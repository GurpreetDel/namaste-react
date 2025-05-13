# Namaste React

A comprehensive React learning project that demonstrates the fundamentals of React and modern web development.

## Project Overview

Namaste React is an educational project designed to showcase different approaches to creating and rendering content on a web page:

1. **Plain HTML** - Traditional HTML markup
2. **JavaScript DOM Manipulation** - Creating elements using vanilla JavaScript
3. **React** - Building UI components using React's createElement API

The project demonstrates the evolution of web development approaches and highlights the benefits of using React for creating complex user interfaces.

## Project Structure

```
namaste-react/
├── .gitignore           # Git ignore file
├── app.js               # Main React application code
├── index.css            # CSS styles for the application
├── index.html           # HTML entry point
├── package.json         # Project dependencies and scripts
├── package-lock.json    # Locked versions of dependencies
└── node_modules/        # Installed dependencies (gitignored)
```

## Technologies Used

- **React** - A JavaScript library for building user interfaces
- **React DOM** - React package for DOM rendering
- **Parcel** - Web application bundler
- **HTML5** - Structure of the web page
- **CSS3** - Styling of the web page
- **JavaScript** - Programming language

## Features

- Demonstrates three different ways to create content:
  - HTML markup (blue heading)
  - JavaScript DOM manipulation (green heading)
  - React components (red heading)
- Shows how to create nested component structures in React
- Illustrates the creation of sibling elements in React
- Uses modern React 18+ createRoot API for rendering

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm (v6 or higher recommended)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/GurpreetDel/namaste-react.git
   ```

2. Navigate to the project directory:
   ```
   cd namaste-react
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:1234
   ```

6. To build for production:
   ```
   npm run build
   ```
   This will create optimized files in the `dist` directory.

## Project Setup from Scratch

If you want to set up this project from scratch, follow these steps in sequence:

1. Initialize a new npm project:
   ```
   npm init
   ```
   This will create a package.json file after you answer a few questions about your project.

2. Install Parcel as a development dependency:
   ```
   npm install -D parcel
   ```
   Parcel is a web application bundler that will compile and serve our React application.

3. Install React:
   ```
   npm install react
   ```
   This installs the core React library.

4. Install React DOM:
   ```
   npm install react-dom
   ```
   This installs the React DOM library which is needed for web applications.

5. Create your HTML, CSS, and JavaScript files (index.html, index.css, app.js).

6. Start the development server:
   ```
   npx parcel index.html
   ```
   Or add a start script to your package.json and use:
   ```
   npm start
   ```

7. For production builds:
   ```
   npx parcel build index.html
   ```
   Or use the build script in package.json:
   ```
   npm run build
   ```

## Code Examples

### HTML Content Creation
```html
<div id="root">
  <h1 id="htmlHeading">Hello World from HTML</h1>
</div>
```

### JavaScript DOM Manipulation
```javascript
const heading = document.createElement("h1");
heading.innerHTML = "Hello World from JS";
heading.id = "jsHeading";
const root = document.getElementById("root");
root.appendChild(heading);
```

### React Component Creation
```javascript
const heading = React.createElement(
  "h1",
  {id: "reactHeading"},
  "Hello World from React"
);

const root = createRoot(document.getElementById("react-root"));
root.render(heading);
```

## Notes

- The project uses Parcel as a bundler, which provides features like:
  - Hot Module Replacement
  - File watching
  - Development server
  - Production optimization

- React is imported as an npm package rather than using CDN links (which are commented out in the HTML file)

- The application demonstrates the core concept of React's virtual DOM by creating elements with `React.createElement`

- Browser compatibility is configured with browserslist to support:
  - Last 2 versions of all browsers
  - Browsers with more than 1% market share
  - Browsers that are still maintained

## Future Enhancements

- Implement JSX for more readable component creation
- Add more complex component examples
- Implement state management
- Add routing capabilities
- Enhance styling with CSS-in-JS or a CSS framework

## License

This project is licensed under the ISC License - see the package.json file for details.

## Author

Gurpreet
