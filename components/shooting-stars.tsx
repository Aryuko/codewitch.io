"use client"
import { useInterval } from "@/lib/useInterval"
import React, { useEffect, useState, useRef } from "react"
import { twMerge } from "tailwind-merge"

// Source: https://ui.aceternity.com/components/shooting-stars-and-stars-background

interface ShootingStar {
    id: number
    x: number
    y: number
    angle: number
    scale: number
    speed: number
    distance: number
}

interface ShootingStarsProps {
    minSpeed?: number
    maxSpeed?: number
    minDelay?: number
    maxDelay?: number
    starColor?: string
    trailColor?: string
    starWidth?: number
    starHeight?: number
    className?: string
}

const getRandomStartPoint = () => {
    const side = Math.floor(Math.random() * 4)
    const offsetX = Math.random() * document.body.clientWidth
    const offsetY = (Math.random() * window.innerHeight) / 2 // Always start in the upper half of the screen, regardless of scroll

    const minAngle = 30
    const maxAngle = 60
    const angle = Math.random() * (maxAngle - minAngle) + minAngle
    switch (side) {
        case 0:
            // Top side of screen going right
            return { x: offsetX, y: window.scrollY, angle }
        case 1:
            // Top side of screen going left
            return {
                x: offsetX,
                y: window.scrollY,
                angle: angle + 90,
            }
        case 2:
            // Left side of screen going right
            return {
                x: 0,
                y: window.scrollY + offsetY,
                angle: angle,
            }
        case 3:
            // Right side of screen going left
            return {
                x: document.body.clientWidth,
                y: window.scrollY + offsetY,
                angle: angle + 90,
            }
        default:
            return { x: 0, y: 0, angle: angle }
    }
}
export const ShootingStars: React.FC<ShootingStarsProps> = ({
    minSpeed = 10,
    maxSpeed = 20,
    minDelay = 4000,
    maxDelay = 6000,
    starColor = "#9E00FF",
    trailColor = "#2EB9DF",
    starWidth = 10,
    starHeight = 1,
    className,
}) => {
    const [star, setStar] = useState<ShootingStar | null>(null)
    const svgRef = useRef<SVGSVGElement>(null)

    useInterval(() => {
        // Interval runs on minDelay, add random delay up to maxDelay before ccreating a new star
        const randomDelay = Math.random() * (maxDelay - minDelay)
        setTimeout(() => {
            const { x, y, angle } = getRandomStartPoint()
            const newStar: ShootingStar = {
                id: Date.now(),
                x,
                y,
                angle,
                scale: 1,
                speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
                distance: 0,
            }
            setStar(newStar)
        }, randomDelay)
    }, minDelay)

    useEffect(() => {
        const moveStar = () => {
            if (star) {
                setStar((prevStar) => {
                    if (!prevStar) return null
                    const newX =
                        prevStar.x +
                        prevStar.speed *
                            Math.cos((prevStar.angle * Math.PI) / 180)
                    const newY =
                        prevStar.y +
                        prevStar.speed *
                            Math.sin((prevStar.angle * Math.PI) / 180)
                    const newDistance = prevStar.distance + prevStar.speed
                    const newScale = 1 + newDistance / 100
                    if (
                        newX < -50 ||
                        newX > document.body.clientWidth + 50 ||
                        newY < -50 ||
                        newY > document.body.clientHeight + 50
                    ) {
                        return null
                    }
                    return {
                        ...prevStar,
                        x: newX,
                        y: newY,
                        distance: newDistance,
                        scale: newScale,
                    }
                })
            }
        }

        const animationFrame = requestAnimationFrame(moveStar)
        return () => cancelAnimationFrame(animationFrame)
    }, [star])

    return (
        <svg
            ref={svgRef}
            className={twMerge("absolute inset-0 h-full w-full", className)}
        >
            {star && (
                <rect
                    key={star.id}
                    x={star.x}
                    y={star.y}
                    width={starWidth * star.scale}
                    height={starHeight}
                    fill="url(#gradient)"
                    transform={`rotate(${star.angle}, ${
                        star.x + (starWidth * star.scale) / 2
                    }, ${star.y + starHeight / 2})`}
                />
            )}
            <defs>
                <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                >
                    <stop
                        offset="0%"
                        style={{ stopColor: trailColor, stopOpacity: 0 }}
                    />
                    <stop
                        offset="100%"
                        style={{ stopColor: starColor, stopOpacity: 1 }}
                    />
                </linearGradient>
            </defs>
        </svg>
    )
}
