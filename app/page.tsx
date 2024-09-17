"use client"
import Link from "next/link"
import React from "react"

export default function Home() {
    return (
        // Container
        <div className="flex h-dvh w-dvw flex-col items-center gap-8 text-center font-light leading-relaxed">
            {/* TODO: Make sure title stays centered-ish even with more content below */}
            {/* Title */}
            <h1 className="animate-title mt-[35dvh] text-6xl font-light tracking-normal md:text-8xl lg:text-9xl">
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
            <div className="*:text-discreet animate-fade-in flex gap-6 text-4xl *:transition-all hover:*:text-base-content md:text-4xl">
                <Link target="_blank" href="https://github.com/aryuko">
                    <i className="fa-brands fa-github" />
                </Link>
                <Link target="_blank" href="https://x.com/_codewitch">
                    <i className="fa-brands fa-twitter" />
                </Link>
                <Link href="mailto:hanna@codewitch.io">
                    <i className="fa-solid fa-envelope" />
                </Link>
            </div>
            {/* Projects */}
            <div></div>
        </div>
    )
}
