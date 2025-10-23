# $STD - Solana Transmitted Degeneracy

A memecoin project website with an immersive ASCII/matrix aesthetic. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Immersive Matrix Design**: ASCII art, falling matrix code animation, and terminal-style interface
- **Interactive Elements**: Typewriter effects, glitch animations, and hover effects
- **Token Information**: Contract address, network details, and platform information
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Warning System**: Clear disclaimers about the memecoin nature

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom matrix-themed styles
- **Fonts**: JetBrains Mono for terminal aesthetic
- **Animations**: CSS animations and React state management

## 🎨 Design Features

- Matrix rain background animation
- ASCII art logo
- Terminal-style windows with glowing borders
- Glitch effects and typewriter animations
- Green matrix color scheme with pink accents
- Responsive grid layout

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx           # Main homepage
│   └── globals.css        # Matrix-themed global styles
├── components/
│   └── MatrixRain.tsx     # Falling matrix animation component
└── lib/
    └── config.ts          # Token configuration
```

## 🚀 Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) to view the website

## ⚠️ Disclaimer

This is a memecoin project made to spread like wildfire upon those who don't take care. It's a mock of sexually transmitted diseases. Use protection and trade responsibly.

## 🔧 Configuration

Token details can be updated in `/src/lib/config.ts`:
- Contract address
- Token name and symbol
- Network and platform information
- Social media links

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1920x1080 and up)
- Tablet (768px - 1024px)
- Mobile (320px - 767px)

## 🎯 Key Components

- **MatrixRain**: Canvas-based falling matrix animation
- **Hero Section**: ASCII art with typewriter effects
- **Token Terminal**: Interactive contract information
- **Warning Section**: Clear disclaimers and warnings
- **Action Buttons**: Call-to-action for buying and chart viewing