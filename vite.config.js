import { defineConfig } from "vit1e";
import path from "path";

export default defineConfig({
  root: "src/",
  rollUpOptions: {
    input: {
      index: path.resolve(__dirname, "src/index.html"),
      contact: path.resolve(__dirname, "src/pages/contact/contact.hmtl"),
    }
  },
  outDir: 'dist',
});
