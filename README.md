# Jude Clottey - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Modern UI/UX**: Clean, contemporary design with smooth animations
- **Responsive**: Fully responsive across all device sizes
- **Animated**: Smooth scroll animations using Framer Motion
- **Interactive**: Typing effect, counter animations, and interactive components
- **Fast**: Built with Next.js for optimal performance
- **Accessible**: Semantic HTML and proper accessibility considerations

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Open Sans (Google Fonts)

## Color Scheme

- Primary: #6244c5 (Purple)
- Secondary: #ffc448 (Yellow)
- Light: #fafafb (Off-white)
- Dark: #12141d (Dark blue/black)
- Cyan: #e86a92 (Pink)
- Light Green: #41e2ba
- Light Brown: #c29979
- Light Blue: #5596c2

## Getting Started

First, install dependencies:

```bash
npm install
```

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main page component
│   └── globals.css      # Global styles
├── components/
│   ├── Navbar.tsx       # Navigation bar
│   ├── Hero.tsx         # Hero section with typing animation
│   ├── About.tsx        # About section with counters
│   ├── Skills.tsx       # Skills section with progress bars
│   ├── Services.tsx     # Services section
│   ├── Projects.tsx     # Projects portfolio
│   ├── Contact.tsx      # Contact form
│   ├── Footer.tsx       # Footer component
│   └── ui/
│       ├── section.tsx  # Section wrapper component
│       └── tabs.tsx     # Tabs component
└── lib/
    └── utils.ts         # Utility functions
```

## Customization

### Update Personal Information

Edit the following files to personalize the portfolio:

- **Hero.tsx**: Update name, typing animation text, and CV link
- **About.tsx**: Update experience years and description
- **Skills.tsx**: Update skills and experience/education
- **Services.tsx**: Update service offerings
- **Projects.tsx**: Update project information and images
- **Contact.tsx**: Update contact information
- **Footer.tsx**: Update social media links

### Add Project Images

Place your project images in the `public/images/` directory and update the paths in `Projects.tsx`.

## Deployment

### Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
npm install -g vercel
vercel
```

### Other Platforms

Build the project:

```bash
npm run build
```

Then deploy the `.next` folder to your preferred hosting platform.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
