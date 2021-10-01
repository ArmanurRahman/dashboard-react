module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            padding: {
                "3/5": "60%",
            },
        },
    },
    variants: {
        extend: {
            translate: ["responsive", "group-hover", "hover", "focus"],
        },
    },
    plugins: [],
};
