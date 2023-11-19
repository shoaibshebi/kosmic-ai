# Content Creation with NextAuth + MaterialUI + Tailwind CSS + TypeScript

<p align="center">
  <img src="./public/demo.png" alt="Logo">
</p>

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## 📁 Structure of the project

The project is structured as follows:

```bash

src
|- app
|- components
| |- Container.tsx
| |- Footer.tsx
| |- Header.tsx
| |- Main.tsx
|- Reuseable
| |- AutoCompleteInput.tsx
| |- Primary.tsx
| |- Slider.tsx
|- utils
| |- data.ts
| |- global.css
| |- layout.tsx
| |- not-found.tsx
| |- page.tsx
|- node_modules
|- public
|- .gitignore
etc
```

## 🔧 Improvements

- We can add unit tests for the testing of each component.
- We can break components more into atoms and molecules.
- We can make modules more resuable and iterable rather than hard code.
- We can add precommit and huskey to strict the users before commit for tree shaking.
- We can more modularize the code using React patterns i.e Render Props Pattern, Hooks Pattern, Compund Pattern etc.
- We can add tests using Jest and React Testing Library.
- We can add more interfaces and types for the components rather than "any" or "no-check".
- We can add comments for the code to make it more readable.
- We can make code accessable / a11y for the disbled persons.
- We can make website i18n and l9n.

## 📑 Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## 🛳️ Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
