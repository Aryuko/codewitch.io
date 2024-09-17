import type { Config } from "tailwindcss"

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                "primary-content-gradient-target": "#c59bff",
            },
            animation: {
                "fade-in": "fade-in 3s ease-in-out forwards",
                title: "title 3s ease-out forwards",
            },
            keyframes: {
                "fade-in": {
                    "0%": {
                        opacity: "0%",
                    },
                    "50%": {
                        opacity: "0%",
                    },
                    "100%": {
                        opacity: "100%",
                    },
                },
                title: {
                    "0%": {
                        "line-height": "0%",
                        "letter-spacing": "0.25em",
                        opacity: "0",
                    },
                    "80%": {
                        opacity: "100%",
                    },

                    "100%": {
                        "line-height": "100%",
                        opacity: "100%",
                    },
                },
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                // TODO: Figure out primary vs primary-content in dark mode
                "codewitch-dark": {
                    primary: "#7949c1",
                    "primary-content": "#eadbff",
                    "primary-content-gradient-target": "#7949c1",
                    secondary: "#a6e3d3",
                    "secondary-content": "#1e453b",
                    accent: "#a6e3d3",
                    "accent-content": "#1e453b",
                    neutral: "#d1d6db",
                    "neutral-content": "#1e453b",
                    "base-100": "#020202",
                    "base-200": "#242933",
                    "base-300": "#20252e",
                    "base-content": "#fff",
                    info: "#c1dbf2",
                    "info-content": "#1e3345",
                    success: "#c1f2cd",
                    "success-content": "#1f4522",
                    warning: "#f9ed8e",
                    "warning-content": "#724f1e",
                    error: "#f3c6c6",
                    "error-content": "#692527",
                },
            },
        ],
    },

    future: {
        hoverOnlyWhenSupported: true,
    },
}
export default config
