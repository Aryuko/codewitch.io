"use client"
import React, {
    useState,
    useEffect,
    useRef,
    RefObject,
    useCallback,
} from "react"
import { twMerge } from "tailwind-merge"

// Source: https://ui.aceternity.com/components/shooting-stars-and-stars-background

interface StarProps {
    x: number
    y: number
    radius: number
    opacity: number
    twinkleSpeed: number | null
}

interface StarBackgroundProps {
    starDensity?: number
    allStarsTwinkle?: boolean
    twinkleProbability?: number
    minTwinkleSpeed?: number
    maxTwinkleSpeed?: number
    className?: string
}

export const StarsBackground: React.FC<StarBackgroundProps> = ({
    starDensity = 0.00015,
    allStarsTwinkle = true,
    twinkleProbability = 0.7,
    minTwinkleSpeed = 0.75,
    maxTwinkleSpeed = 1.25,
    className,
}) => {
    const [stars, setStars] = useState<StarProps[]>([])
    const canvasRef: RefObject<HTMLCanvasElement> =
        useRef<HTMLCanvasElement>(null)

    const generateStars = useCallback(
        (width: number, height: number): StarProps[] => {
            const area = width * height
            const numStars = Math.floor(area * starDensity)
            return Array.from({ length: numStars }, () => {
                const shouldTwinkle =
                    allStarsTwinkle || Math.random() < twinkleProbability
                return {
                    x: Math.random() * width,
                    y: Math.random() * height,
                    radius:
                        Math.random() * 0.05 + window.innerWidth > 768
                            ? 0.6 // Bigger stars on desktop
                            : 0.4, // Smaller stars on mobile
                    opacity: Math.random() * 0.5 + 0.5,
                    twinkleSpeed: shouldTwinkle
                        ? minTwinkleSpeed +
                          Math.random() * (maxTwinkleSpeed - minTwinkleSpeed)
                        : null,
                }
            })
        },
        [
            starDensity,
            allStarsTwinkle,
            twinkleProbability,
            minTwinkleSpeed,
            maxTwinkleSpeed,
        ]
    )

    useEffect(() => {
        const updateStars = () => {
            if (canvasRef.current) {
                const canvas = canvasRef.current
                const ctx = canvas.getContext("2d")
                if (!ctx) return

                const { width, height } = canvas.getBoundingClientRect()
                canvas.width = width
                canvas.height = height
                setStars(generateStars(width, height))
            }
        }

        updateStars()

        const resizeObserver = new ResizeObserver(updateStars)
        if (canvasRef.current) {
            resizeObserver.observe(canvasRef.current)
        }

        const currentCanvas = canvasRef.current
        return () => {
            if (currentCanvas) {
                resizeObserver.unobserve(currentCanvas)
            }
        }
    }, [
        starDensity,
        allStarsTwinkle,
        twinkleProbability,
        minTwinkleSpeed,
        maxTwinkleSpeed,
        generateStars,
    ])

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        let animationFrameId: number

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            stars.forEach((star) => {
                ctx.beginPath()
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
                ctx.fill()

                if (star.twinkleSpeed !== null) {
                    star.opacity =
                        0.5 +
                        Math.abs(
                            Math.sin((Date.now() * 0.001) / star.twinkleSpeed) *
                                0.5
                        )
                }
            })

            animationFrameId = requestAnimationFrame(render)
        }

        render()

        return () => {
            cancelAnimationFrame(animationFrameId)
        }
    }, [stars])

    return (
        <canvas
            ref={canvasRef}
            className={twMerge("absolute inset-0 h-full w-full", className)}
        />
    )
}
