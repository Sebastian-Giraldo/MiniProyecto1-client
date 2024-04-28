import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  root: "src/",
  rollUpOptions: {
    input: {
      index: path.resolve(__dirname, "src/index.html"),
      contact: path.resolve(__dirname, "src/pages/contact/contact.html"),
    }
  },
  outDir: 'dist',
});
