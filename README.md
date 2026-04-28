# Niyas M N — Portfolio

A dark luxury React portfolio with GSAP ScrollTrigger parallax animations.

## Setup

```bash
npm install
npm start
```

## CV Download
Place `public/Niyas_MN_Senior_Frontend_Developer_CV.docx` in the `public/` folder (already included).

In `Portfolio.jsx`, the download button fetches from:
```js
const response = await fetch("/Niyas_MN_Senior_Frontend_Developer_CV.docx");
```

This works automatically with Create React App (files in `public/` are served at root).

## Stack
- React 18
- GSAP 3.12 + ScrollTrigger (loaded from CDN)
- Cormorant Garamond + Syne (Google Fonts)
# niyasmn
