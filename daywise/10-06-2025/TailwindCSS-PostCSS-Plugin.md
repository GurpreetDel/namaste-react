# Tailwind CSS PostCSS Plugin Issue - 10-06-2025

## What Happened

When trying to build the project with Parcel, the following error occurred:

```
Server running at http://localhost:1234
× Build failed.

@parcel/transformer-postcss: It looks like you're trying to use `tailwindcss` directly as a PostCSS plugin. The PostCSS plugin has moved to a separate package, so to continue using Tailwind CSS with PostCSS you'll need to install `@tailwindcss/postcss` and update your PostCSS configuration.

Error: It looks like you're trying to use `tailwindcss` directly as a PostCSS plugin. The PostCSS plugin has moved to a separate package, so to continue using Tailwind CSS with PostCSS you'll need to install `@tailwindcss/postcss` and update your PostCSS configuration.
```

## What Went Wrong

In Tailwind CSS version 4.1.x, the PostCSS plugin has been moved from the main `tailwindcss` package to a separate package called `@tailwindcss/postcss`. This is a breaking change that requires updating the PostCSS configuration.

The error occurred because our `postcss.config.js` file was still using the old configuration:

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
```

## How to Fix It

### 1. Update PostCSS Configuration

The solution is to update the `postcss.config.js` file to use the new package:

```javascript
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  }
}
```

### 2. Ensure the Package is Installed

Make sure the `@tailwindcss/postcss` package is installed:

```bash
npm install @tailwindcss/postcss
```

In our case, the package was already installed in the dependencies section of `package.json`:

```json
"dependencies": {
  "@tailwindcss/postcss": "^4.1.8",
  // other dependencies...
}
```

## Why This Solution Works

Tailwind CSS 4.1.x has moved its PostCSS plugin to a separate package to better align with the modular architecture of the ecosystem. By updating the PostCSS configuration to use the new package, we're following the recommended approach for this version of Tailwind CSS.

The separation of the PostCSS plugin into its own package allows for:

1. **Better Maintenance**: Each package can be maintained and versioned independently
2. **Reduced Bundle Size**: Users who don't need the PostCSS integration don't have to include it
3. **Clearer Dependencies**: The dependency relationship between Tailwind CSS and PostCSS is more explicit

## Additional Information

### Tailwind CSS 4.1.x Changes

Tailwind CSS 4.1.x introduced several changes to the package structure:

- The PostCSS plugin moved to `@tailwindcss/postcss`
- The Vite plugin moved to `@tailwindcss/vite`
- Other integrations may have moved to their own packages as well

### Checking Your Tailwind Version

You can check your installed Tailwind CSS version with:

```bash
npm list tailwindcss
```

If you're using Tailwind CSS 4.1.x or later, you'll need to use the separate PostCSS plugin.

### Documentation

For more information, refer to the official Tailwind CSS documentation:
- [Tailwind CSS Installation Guide](https://tailwindcss.com/docs/installation)
- [PostCSS Configuration](https://tailwindcss.com/docs/installation/using-postcss)