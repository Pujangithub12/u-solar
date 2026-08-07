# U-Solar

Marketing website for U-Solar — built with React 19, Vite, Tailwind CSS, and React Router. Fully static: all content (project listings, service details) lives in source, no backend or login required.

## Project Structure

```
src/
├── assets/          # Images, grouped per project/section
├── components/
│   ├── common/      # Shared, reusable UI components
│   └── layout/      # Navbar, Footer, and other layout chrome
├── data/            # Static data (project listings)
├── pages/           # Route-level components, grouped by feature
│   ├── home/
│   ├── projects/
│   └── services/
├── sections/        # Homepage sections (Hero, About, Services, ...)
├── utils/           # Small shared helpers
├── App.jsx          # Route definitions
└── main.jsx         # App entry point
```

## Getting Started

```bash
npm install
npm run dev
```

## Available Scripts

- `npm run dev` — start the development server
- `npm run build` — build for production
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint
