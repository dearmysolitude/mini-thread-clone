module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media", // or 'media' if you want to use system preferences
  theme: {
    extend: {
      colors: {
        threads: {
          background: {
            light: "#FFFFFF",
            dark: "#000000",
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
            dark: "#2F3336",
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
  plugins: [],
};
