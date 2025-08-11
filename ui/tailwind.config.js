/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "app-color": "#6559A2",
        "app-surface": "#47307B",
        // Light Mode
        "lightbg": "#F1F3F6", // pure white card
        "lightsurface": "#FFFFFF", // very light gray background
        "lighttext": "#1F2937", // dark gray (for readability)
        "lightborder": "#E5E7EB", // light gray border

        // Dark Mode
        "darkbg": "#111827", // dark card surface (gray-800)
        "darksurface": "#1F2937", // deep background (gray-900)
        "darktext": "#F9FAFB", // very light text
        "darkborder": "#374151", // dark gray border (gray-700)
      },
    },
  },
  plugins: [],
};
