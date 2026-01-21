import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/project-promo-55-module-3-team-1/",
    server: {
        open: "/",
        watch: {
            usePolling: true,
        },
        proxy: {
            "/api": "http://localhost:3000", // <--- puerto donde corre tu backend
        },
    },
});
