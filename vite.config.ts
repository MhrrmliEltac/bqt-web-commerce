import { defineConfig } from "vite";
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
});
