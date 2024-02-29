/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        backgroundImage: {
          "gradient-to-r": "var(--to-right-gradient)",
          "gradient-to-b": "var(--to-bottom-gradient)",
        },
        colors: {
          background: "var(--background)",
          primary: "var(--primary)",
          link: "var(--link)",
        },
      },
    },
    plugins: [],
}

