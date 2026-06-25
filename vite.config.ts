import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages 配信用に相対パス（base: "./"）。ルート配信でも崩れない。
export default defineConfig({
  plugins: [react()],
  base: "./",
  // GitHub Pages（main / docs 配信）用に docs へ出力
  build: { outDir: "docs" },
});
