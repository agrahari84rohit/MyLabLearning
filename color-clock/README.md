# Color Clock

A small React + Vite app that displays the current local date and time using `date-fns`.

## Features

- Live updating clock that refreshes every second
- Formatted output with date and time in a single readout
- Styled card layout with accent colors and a gradient background

## Technologies

- React 19
- Vite
- `date-fns`
- CSS styling

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the URL shown in the terminal to view the clock app in the browser.

## Build

Create a production build with:

```bash
npm run build
```

## Project Structure

- `src/App.jsx` — main clock component
- `src/App.css` — clock styling
- `src/main.jsx` — React app entry point
- `package.json` — dependencies and scripts

## Notes

The clock uses `format` from `date-fns` and updates via `setInterval` inside a React `useEffect` hook.
