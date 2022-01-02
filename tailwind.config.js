module.exports = {
    content: ["src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                "background-alt": "var(--background-alt)",
                secondary: "var(--secondary)",
            }
        },
    },
    plugins: [],
}
