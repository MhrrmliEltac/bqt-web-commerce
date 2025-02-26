import { defineConfig } from "vite";
<<<<<<< HEAD
<<<<<<< HEAD
import react from "@vitejs/plugin-react";
=======
import react from "@vitejs/plugin-react-swc";
>>>>>>> d9500387d6f94e83ddbc962bf7411f1abe8ed5a5

export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  optimizeDeps: {
    include: ["@iconify/react"],
  },
=======
>>>>>>> d9500387d6f94e83ddbc962bf7411f1abe8ed5a5
=======
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["@iconify/react"],
  },
>>>>>>> 1814fd0178c89fe3292d4bb660e32d66282f8a45
});
