"use client"
import React from "react"

export default function Home() {
    return (
        // Container
        <div className="flex-center h-dvh w-dvw flex-col gap-4 text-center font-light leading-relaxed">
            {/* TODO: Make sure title stays centered-ish even with more content below */}
            {/* Title */}
            <h1 className="animate-title mt-0 text-6xl font-light tracking-normal md:text-8xl lg:text-9xl">
                codewitch
            </h1>
            {/* Description */}
            <div className="text-subtle animate-fade-in">
                <p>
                    Exploring my curiosity and sharing what I learn along the
                    way.
                </p>
                <p>Engineer, entrepreneur, cat mother.</p>
            </div>
            {/* Links and socials */}
            <div></div>
            {/* Projects */}
            <div></div>
        </div>
    )
}
