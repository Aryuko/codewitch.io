"use client"
import Link from "next/link"
import React, { useRef } from "react"

const projects = [
    {
        name: "QuickStack",
        description:
            "The NextJS template with everything you'll need to launch a product or service.",
        url: "https://template.codewitch.io/",
        badges: ["Work in progress"],
    },
    {
        name: "HEMA Broadcast",
        description: "An easier way of creating overlays for HEMA events",
        url: "https://hema.codewitch.io/",
        badges: ["Open source", "Work in progress"],
    },
]

export default function Home() {
    const projectsRef = useRef<HTMLDivElement>(null)

    return (
        // Container
        // TODO: Add something fun, like particles or framer motion interactive animations
        // To implement::
        // - https://ui.aceternity.com/components/shooting-stars-and-stars-background (love this concept)
        // - https://ui.aceternity.com/components/text-hover-effect (this is sick)
        // Examples/ideas:
        // - https://vercel.com/templates/next.js/nextjs-portfolio-pageview-counter (I like how these move with the cursor)
        // - https://ui.aceternity.com/components/hero-highlight (could do something similar with the stars, super subtle?)
        <>
            <div className="flex h-dvh w-dvw flex-col items-center gap-8 px-8 text-center font-light leading-relaxed">
                {/* Title */}
                <h1 className="animate-title mt-[35dvh] text-6xl font-light tracking-normal md:text-8xl lg:text-9xl">
                    codewitch
                </h1>
                {/* Description */}
                <div className="text-subtle animate-fade-in">
                    <p>
                        Exploring my curiosity and sharing what I learn along
                        the way.
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
                {/* Projects title/scroll indicator */}
                <div
                    className="animate-fade-in text-subtle absolute bottom-4 cursor-pointer hover:text-base-content"
                    onClick={() =>
                        projectsRef.current?.scrollIntoView({
                            block: "start",
                            inline: "nearest",
                            behavior: "smooth",
                        })
                    }
                >
                    <p>Projects</p>
                    <i className="fa-solid fa-chevron-down text-xl" />
                </div>
            </div>
            {/* Projects list */}
            <div
                className="animate-fade-in text-subtle my-24 flex flex-col gap-12 px-8 font-light"
                ref={projectsRef}
            >
                {projects.map(({ name, description, url, badges }) => (
                    <Link
                        href={url}
                        className="flex flex-col gap-2 transition-all hover:text-base-content"
                        key={name}
                    >
                        <span className="flex items-center justify-between">
                            <h3>{name}</h3>
                            <span className="flex gap-2">
                                {badges.map((badge) => (
                                    <div key={badge} className="badge">
                                        {badge}
                                    </div>
                                ))}
                            </span>
                        </span>
                        <p>{description}</p>
                    </Link>
                ))}
            </div>
        </>
    )
}
