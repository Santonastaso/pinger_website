# Pinger Website

A React application that replicates the OpenAI website design with a modern dark theme and responsive layout.

## Features

- **Dark Theme**: Modern black background with white text, matching OpenAI's design
- **Responsive Layout**: Works on desktop and mobile devices
- **Hero Section**: Gradient cards showcasing featured content
- **Navigation**: Left sidebar with navigation links
- **News Section**: Latest news cards with hover effects
- **UI Components**: Reusable components built with Radix UI and Tailwind CSS

## Tech Stack

- **React 19** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Radix UI** for accessible UI components
- **Lucide React** for icons
- **Class Variance Authority** for component variants

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   └── ui/           # Reusable UI components
├── lib/
│   └── utils.ts      # Utility functions
├── App.tsx           # Main application component
├── main.tsx          # Application entry point
└── index.css         # Global styles and Tailwind imports
```

## Components

The project includes several reusable UI components:

- **Button**: Customizable button with multiple variants
- **Card**: Flexible card component for content display
- **Utils**: Utility functions for class name merging

## Styling

The application uses a custom dark theme with:
- Black background (`#000000`)
- White text for contrast
- Gradient backgrounds for hero cards
- Custom scrollbar styling
- Hover effects and transitions

## Development

The project is set up with:
- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting
- Path aliases for clean imports (`@/` maps to `src/`)

## Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.