# Personal Blog

A simple React blog built with Vite. This project includes a small component tree with `App`, `Header`, `About`, `ArticleList`, and `Article`.

## Run the project

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open the local URL shown in the terminal (usually `http://localhost:5173`).

## Run tests

This project includes a basic Jest test covering prop-based rendering.

```bash
npm test
```

## Blog structure

- `App.jsx`: root component that connects `Header`, `About`, and `ArticleList`
- `src/components/Header.jsx`: renders the blog title
- `src/components/About.jsx`: renders the blog logo and description
- `src/components/ArticleList.jsx`: maps a list of posts to `Article` components
- `src/components/Article.jsx`: renders individual article details
- `src/components/Home.jsx`: renders a short welcome note inside the header
- `src/components/Links.jsx`: renders quick blog navigation links

## Screenshots

Add screenshots of the blog site here once the app is running.

> Example: capture the rendered page from the browser and save it in the repository, then reference it here.

## Notes

- `About.jsx` includes an accessible image with `alt="blog logo"`.
- `ArticleList.jsx` passes a unique `key` to every `Article` component.
- `App.test.jsx` verifies the blog title and sample post content are rendered.
