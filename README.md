# Second FamiLeash: Dog Rescue Website

React + TypeScript + Tailwind CSS (Vite), two pages: Home and About.

## Run it
    npm install
    npm run dev

Build for production with `npm run build`.

## Where things live
- `src/components/Navbar.tsx`: navigation (desktop, mobile menu, theme toggle)
- `src/theme/ThemeContext.tsx` + `src/index.css`: light/dark themes via color tokens
- `src/assets/`: dog illustrations, leash divider, logo (all SVG)
- `src/data/content.ts`: all site copy, in one place
- `src/pages/Home.tsx`, `src/pages/About.tsx`

All names, numbers, and email addresses are sample content for a fictional organization. Replace them in `content.ts` before launch.
