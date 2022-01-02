module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#1b1b1b",
            }
        },
    },
    plugins: [],
    purge: ["src/**/*.{js,ts,jsx,tsx}"],
}
