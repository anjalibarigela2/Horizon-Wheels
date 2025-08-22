
# Horizon Wheels — Car Rental Website

A clean, responsive car rental site built with **Vite + React** and **Tailwind CSS**. Smooth scroll-in animations via **AOS**, icons via **react-icons**, and a simple dark mode powered by `localStorage`.

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Customization](#customization)
- [Available Scripts](#available-scripts)


## Features
- **Responsive UI** across mobile, tablet, and desktop.
- **Dark mode** toggle (`localStorage` keeps the preference).
- **AOS animations** on scroll (lightweight and smooth).
- **Sectioned layout**: Navbar, Hero, About, Services, Car List, Testimonials, App Store banner, Contact, Footer.
- **Simple theming** with Tailwind utility classes.
- **Zero backend required** (static build).

## Tech Stack
- **React 18** (with **Vite** tooling)
- **Tailwind CSS**
- **AOS** (Animate On Scroll)
- **react-icons**

## Getting Started
### Prerequisites
- Node.js **18+** (or 20+)
- npm or pnpm or yarn

### Install

# install deps
npm install

### Run Dev
npm run dev


## Customization
- **Brand name**: search for `Horizon Wheels` in components (Navbar, Footer, Hero) and replace.
- **Colors**: adjust Tailwind classes in components or extend the Tailwind theme.
- **Copywriting**: edit text in `About`, `Services`, `CarList`, `Testimonial`, `Contact` as needed.
- **Images**: replace files in `src/assets/` and update imports in components.

### Dark Mode
- Default is set via `localStorage.getItem("theme")` in `App.jsx`.
- Toggle updates `document.documentElement.classList` with `dark` and persists preference.


## Available Scripts
- npm run dev       # start dev server.
- npm run build     # production build (to /dist).
- npm run preview   # preview the production build.
