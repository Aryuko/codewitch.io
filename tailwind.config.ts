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
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                "codewitch-light": {
                    primary: "#eadbff",
                    "primary-content": "#7949c1",
                    "primary-content-gradient-target": "#c59bff",
                    secondary: "#a6e3d3",
                    "secondary-content": "#1e453b",
                    accent: "#a6e3d3",
                    "accent-content": "#1e453b",
                    neutral: "#d1d6db",
                    "neutral-content": "#1e453b",
                    "base-100": "#ffffff",
                    "base-200": "#f9fafb",
                    "base-300": "#d1d6db",
                    "base-content": "#161616",
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
                    "base-100": "#2a303c",
                    "base-200": "#242933",
                    "base-300": "#20252e",
                    "base-content": "#ced4d6",
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
