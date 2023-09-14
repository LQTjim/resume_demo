import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

export default ({ mode }) => {
  const VITE_BASENAME: string = loadEnv(mode, process.cwd()).VITE_BASENAME;

  return defineConfig({
    plugins: [react()],
    base: VITE_BASENAME,
  });
};
