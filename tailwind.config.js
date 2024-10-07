module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media", // or 'media' if you want to use system preferences
  theme: {
    extend: {
      colors: {
        threads: {
          background: {
            primary: {
              light: "#FFFFFF",
              dark: "#1D1D1D",
            },
            secondary: {
              light: "#FFFFFF",
              dark: "#2D2D2D",
            },
            third: {
              light: "#FFFFFF",
              dark: "#3D3D3D",
            },
          },
          text: {
            primary: {
              light: "#000000",
              dark: "#FFFFFF",
            },
            secondary: {
              light: "#536471",
              dark: "#71767B",
            },
          },
          border: {
            light: "#EFF3F4",
            dark: "#555555",
          },
          action: {
            default: "#FFFFFF",
            hover: "#536471",
          },
          like: "#F91880",
        },
      },
      fontFamily: {
        sans: ["SF Pro Text", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
