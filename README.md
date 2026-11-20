# Testing Simultan

A lightweight static web starter intended for Cloudflare Pages, with a browser-side Supabase connection check.

## Run locally

Open `index.html` in a browser, or serve this directory with any static file server. No build step is required.

## Connect Supabase

1. Create or select a Supabase project.
2. Copy its Project URL and publishable anon key from the project API settings.
3. Enter them in the connection form. The values are used only in memory for that browser session and are not saved by this app.

The publishable anon key is intended to be used in client apps. Never put a service role key in browser code. Enable Row Level Security and add policies before exposing database tables.

## Publish with Cloudflare Pages

Create a Pages project and connect its GitHub repository. Select **Direct Upload / static assets** or configure the build settings as follows:

- Build command: leave empty
- Build output directory: `/` (the repository root)

The site consists of static files and needs no secrets or build variables.

## GitHub

Initialize this folder as a Git repository, then create an empty repository under the desired GitHub account and add it as `origin`. Push the `main` branch. Cloudflare Pages can then deploy from that repository.
