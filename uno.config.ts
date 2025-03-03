import { defineConfig } from "unocss";
import { presetUno, presetWebFonts } from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetWebFonts({
      provider: "bunny",
      fonts: {
        honk: "Honk",
        mmd: "Major Mono Display",
        mm: "Martian Mono",
      },
    }),
  ],
});
