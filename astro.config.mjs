import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://maicol50.github.io',
    base: '/Maicol.github.io',
    integrations: [
        mdx(),
        sitemap()
    ],
    vite: {
        plugins: [tailwind()]
    }
});
