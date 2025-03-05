import { defineConfig, transformerCompileClass } from "unocss";
import { presetUno, presetWebFonts, transformerVariantGroup } from "unocss";

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
  transformers: [transformerVariantGroup(), transformerCompileClass()],
});
