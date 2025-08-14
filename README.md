# AI Interview Buddy Website

This is the official website for **[AI Interview Buddy](https://aiinterviewbuddy.com/)**.

The project is built using:
- [Next.js](https://nextjs.org/) (static export mode)
- [Tailwind CSS](https://tailwindcss.com/)
- Generated initially with [v0](https://v0.dev/)

## Getting Started

### Development Mode
Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Then open [http://localhost:3000/app-ai-interview-buddy](http://localhost:3000/app-ai-interview-buddy) in your browser.

You can start editing the app by modifying files inside the `app/` directory. The page will auto-update as you make changes.

### GitHub Pages Simulation (Local)
To simulate how the site will be served on GitHub Pages (including the `/app-ai-interview-buddy` base path), you can run:

```bash
./buildLocal.sh
```

This script will:
1. Clean old builds
2. Build the site in static export mode
3. Move files into `/out/app-ai-interview-buddy/`
4. Serve locally exactly as it will appear on GitHub Pages.

## Learn More

To learn more about the core technologies:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

This project is part of the **AI Interview Buddy** open-source initiative.
