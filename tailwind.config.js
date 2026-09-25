/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        brand: {
          orange: "#ff7800",
          peach: "#ffd07b",
          dark: "#191919",
          light: "#fff0e4",
        },
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at 50% 50%, rgba(255, 120, 0, 0.15) 0%, rgba(25, 25, 25, 0) 50%)",
        "card-gradient":
          "linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)",
        "grid-pattern": `linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                                         linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 7s ease-in-out 2s infinite",
        "pulse-glow": "pulse-glow 3s infinite",
        shimmer: "shimmer 2.5s infinite",
        marquee: "marquee 25s linear infinite",
        blob: "blob 7s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(124, 58, 237, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(124, 58, 237, 0.6)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
