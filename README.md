# Ignitus Poietik Website

A responsive React + Vite website starter for Ignitus Poietik. The project uses JavaScript (JSX), CSS, and Lucide icons.

## Requirements
- Node.js (LTS recommended)
- Visual Studio Code

## Run it locally
1. Extract the ZIP file.
2. Open the extracted `ignitus-poietik-vscode` folder in VS Code.
3. In VS Code, choose **Terminal → New Terminal**.
4. Install dependencies:
   ```bash
   npm install
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```
6. Open the local address Vite prints in the terminal (usually `http://localhost:5173`).

## Build for deployment
```bash
npm run build
```
Vite creates a production build in the `dist` folder.

## Where to make changes
- `src/App.jsx` — page content, sections, links, services, portfolio cards and contact form.
- `src/index.css` — colours, spacing, layout, typography and responsive styling.
- `index.html` — browser tab title and SEO description.
- `package.json` — scripts and dependencies.

## Before launching officially
- In `src/App.jsx`, replace `hello@ignituspoietik.com` with the company's real email address.
- Add confirmed business phone, email and social media links if desired.
- Replace concept portfolio cards with real work when available.
- The enquiry form opens the visitor's email application; it does not save submissions or send them to a database.
- The current logo is a CSS placeholder. Replace it with the official Ignitus Poietik logo when available.

## Academy link
The academy section links to https://poietik-academy.vercel.app/.
