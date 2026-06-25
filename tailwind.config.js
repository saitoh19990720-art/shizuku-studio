/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Figma「Shizuku Studio」から抽出した正値
        page: "#F0F7FF", // 地（淡い水色）
        ink: "#2A3D54", // 見出し・濃い文字
        accent: "#3E5F85", // ボタン・締め・アクセント青
        muted: "#5F7FA8", // 補足・本文グレー青
        hair: "#D6E4F0", // 細い境界線
      },
      fontFamily: {
        mincho: ['"Shippori Mincho"', "serif"],
        gothic: ['"Zen Kaku Gothic New"', "sans-serif"],
        dm: ['"DM Sans"', "sans-serif"],
      },
      boxShadow: {
        card: "0px 8px 24px rgba(62,95,133,0.06)",
      },
      maxWidth: {
        shell: "1120px",
      },
    },
  },
  plugins: [],
};
