import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      animation: {
        "idle-bob": "idle-bob 3.2s ease-in-out infinite",
        "idle-sway": "idle-sway 4s ease-in-out infinite",
        "idle-breathe": "idle-breathe 3.6s ease-in-out infinite",
        "dance-bounce": "dance-bounce 0.7s ease-in-out infinite",
        "dance-step": "dance-step 0.9s ease-in-out infinite",
        "dance-bop": "dance-bop 0.6s ease-in-out infinite",
        blink: "blink 4.5s ease-in-out infinite",
        "scarf-drift": "scarf-drift 4s ease-in-out infinite",
        "scarf-dance": "scarf-dance 0.7s ease-in-out infinite",
      },
      keyframes: {
        "idle-bob": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-3px)" },
        },
        "idle-sway": {
          "0%, 100%": { transform: "rotate(-1.2deg)" },
          "50%": { transform: "rotate(1.2deg)" },
        },
        "idle-breathe": {
          "0%, 100%": { transform: "scaleY(1)" },
          "50%": { transform: "scaleY(1.015)" },
        },
        "dance-bounce": {
          "0%, 100%": { transform: "translateY(0) rotate(-3deg)" },
          "50%": { transform: "translateY(-7px) rotate(3deg)" },
        },
        "dance-step": {
          "0%, 100%": { transform: "translateX(-3px) rotate(-4deg)" },
          "25%": { transform: "translateY(-4px) rotate(0deg)" },
          "50%": { transform: "translateX(3px) rotate(4deg)" },
          "75%": { transform: "translateY(-4px) rotate(0deg)" },
        },
        "dance-bop": {
          "0%, 100%": { transform: "translateY(0) scaleY(1)" },
          "50%": { transform: "translateY(-5px) scaleY(1.04)" },
        },
        blink: {
          "0%, 92%, 100%": { transform: "scaleY(1)" },
          "94%, 98%": { transform: "scaleY(0.1)" },
        },
        "scarf-drift": {
          "0%, 100%": { transform: "rotate(-2deg) translateX(0)" },
          "50%": { transform: "rotate(2deg) translateX(2px)" },
        },
        "scarf-dance": {
          "0%, 100%": { transform: "rotate(-6deg) translateX(-2px)" },
          "50%": { transform: "rotate(6deg) translateX(2px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
