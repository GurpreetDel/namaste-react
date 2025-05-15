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
- Demonstrates creating nested header elements using React.createElement and JSX
- Shows how to pass attributes to components in JSX
- Illustrates component composition (nesting components within each other)
- Demonstrates different ways to use components in JSX
- Includes a complete Header component with logo, search bar, and user icon

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

## JSX and HTML Attributes

JSX allows you to write HTML-like syntax directly in your JavaScript code. This section demonstrates how to use various HTML elements and their attributes in JSX.

### Basic JSX Syntax

```jsx
const jsxHeading = <h1 id="reactHeading" className="head" tabIndex="1">Hello World from React using JSX</h1>;
```

Note the differences from HTML:
- `class` becomes `className` (since `class` is a reserved keyword in JavaScript)
- `tabindex` becomes `tabIndex` (camelCase naming convention)
- Attributes that accept JavaScript expressions use curly braces: `disabled={false}`

### What JSX Returns

JSX expressions always return React elements, which are plain JavaScript objects. These objects describe what you want to see on the screen. When you write JSX:

```jsx
const element = <h1 className="header">Hello World</h1>;
```

It gets transformed into:

```javascript
const element = React.createElement(
  'h1',
  { className: 'header' },
  'Hello World'
);
```

Which creates a JavaScript object that looks like:

```javascript
{
  type: 'h1',
  props: {
    className: 'header',
    children: 'Hello World'
  },
  key: null,
  ref: null
}
```

React uses these objects to build and update the DOM efficiently. This is why JSX is powerful - it provides a familiar HTML-like syntax while leveraging the full power of JavaScript.

### Different Ways to Return React Elements in Components

React functional components can return React elements in several ways:

1. **Explicit return with curly braces** - Useful when you need additional logic:
   ```jsx
   const Component = () => {
     const title = "Hello";
     // You can add any JavaScript logic here
     return (
       <div>
         <h1>{title} World</h1>
       </div>
     );
   };
   ```

2. **Implicit return with parentheses** - More concise for simple components:
   ```jsx
   const Component = () => (
     <div>
       <h1>Hello World</h1>
     </div>
   );
   ```

3. **Single-line implicit return** - For very simple components:
   ```jsx
   const Component = () => <h1>Hello World</h1>;
   ```

All these methods return the same thing: a React element object that React can render to the DOM.

## JSX vs Functional Components

Understanding the difference between JSX and functional components is crucial for React development:

### What is JSX?

JSX is a syntax extension for JavaScript that looks like HTML but gets transformed into React.createElement() calls during the build process. It's not a template language but a full-powered JavaScript expression.

- **JSX is just syntax** - It's syntactic sugar for React.createElement() calls
- **JSX returns React elements** - Plain JavaScript objects that describe DOM nodes
- **JSX can't contain logic** - It's just a description of what to render
- **JSX is used directly** - You write it inline or assign it to variables

```jsx
// Simple JSX expression
const element = <h1>Hello World</h1>;

// JSX with expressions
const name = "John";
const greeting = <h1>Hello, {name}!</h1>;

// JSX with attributes
const image = <img src="logo.png" alt="Logo" />;
```

### What are Functional Components?

Functional components are JavaScript functions that return JSX/React elements. They encapsulate structure and behavior into reusable pieces.

- **Functions that return JSX** - They take props as input and return React elements
- **Can contain logic** - You can include variables, conditions, loops, etc.
- **Can manage state** - Using React hooks like useState, useEffect
- **Can be reused** - Components are designed to be composed together
- **Follow naming convention** - Start with a capital letter (PascalCase)

```jsx
// Simple functional component
function Greeting() {
  return <h1>Hello World</h1>;
}

// Functional component with props
function PersonGreeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Functional component with state
function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

### How to Render JSX and Functional Components

There are different ways to render JSX and functional components to the DOM:

#### Rendering JSX:

```jsx
// Create a root
const root = createRoot(document.getElementById("root"));

// Render JSX directly
root.render(<h1>Hello World</h1>);

// Render JSX stored in a variable
const element = <h1>Hello World</h1>;
root.render(element);
```

#### Rendering Functional Components:

```jsx
// Method 1: Using JSX tags (preferred)
// This allows React to manage the component lifecycle
root.render(<Greeting />);

// With props
root.render(<PersonGreeting name="John" />);

// Method 2: Calling the function
// This is less common but can be useful in some scenarios
const element = Greeting();
root.render(element);
```

The key difference in rendering is that functional components can be used as JSX tags (like HTML elements) or called as functions, while JSX expressions are always used directly.

### Image Tag in JSX

```jsx
<img 
  src="https://reactjs.org/logo-og.png" 
  alt="React Logo" 
  width="300" 
  height="200"
  loading="lazy"
  className="react-logo"
  title="React Logo"
/>
```

Important image attributes:
- `src`: URL of the image (required)
- `alt`: Alternative text for accessibility (required)
- `width` and `height`: Dimensions in pixels
- `loading="lazy"`: Defers loading until the image is near the viewport
- `className`: For CSS styling (equivalent to HTML's `class`)
- `title`: Tooltip text shown on hover

### Video Tag in JSX

```jsx
<video 
  src="https://www.example.com/video.mp4" 
  controls
  width="400"
  height="300"
  autoPlay={false}
  muted
  loop={false}
  poster="https://www.example.com/poster.jpg"
  className="video-player"
>
  Your browser does not support the video tag.
</video>
```

Important video attributes:
- `src`: URL of the video file
- `controls`: Boolean attribute to show video controls
- `width` and `height`: Dimensions in pixels
- `autoPlay`: Boolean attribute to start playing automatically (use camelCase)
- `muted`: Boolean attribute to mute the audio
- `loop`: Boolean attribute to loop the video
- `poster`: URL of an image to show before the video plays
- Fallback content inside the tags for browsers that don't support video

### Anchor Tag in JSX

```jsx
<a 
  href="https://reactjs.org" 
  target="_blank"
  rel="noopener noreferrer"
  className="react-link"
  title="Visit React Website"
  id="react-website-link"
>
  Visit React Website
</a>
```

Important anchor attributes:
- `href`: URL to navigate to (required)
- `target="_blank"`: Opens the link in a new tab/window
- `rel="noopener noreferrer"`: Security attribute for external links
- `className`: For CSS styling
- `title`: Tooltip text shown on hover
- `id`: Unique identifier for the element

### Form Elements in JSX

```jsx
<input 
  type="text" 
  placeholder="Enter your name"
  disabled={false}
  maxLength="50"
  className="input-field"
  id="name-input"
/>

<button 
  type="submit"
  className="submit-button"
  disabled={false}
  onClick={() => console.log('Button clicked!')}
>
  Submit
</button>
```

Important form element attributes:
- `type`: Specifies the type of input or button
- `placeholder`: Hint text for input fields
- `disabled`: Boolean attribute to disable the element
- `maxLength`: Maximum number of characters allowed
- `onClick`: Event handler for click events (uses camelCase)

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

- **Important**: This project uses React 18.2.0, which is the stable version. Using experimental or pre-release versions (like React 19.x) may cause compatibility issues with Parcel bundler.

## Advanced React Concepts

### Nested Header Element

The project demonstrates creating a nested header element (h1, h2, h3 inside a div with class "title") in three different ways:

1. **Using React.createElement**:
   ```javascript
   const nestedHeaderElement = React.createElement(
       "div",
       { className: "title" },
       [
           React.createElement("h1", { key: "h1", id: "heading1" }, "This is h1 Heading"),
           React.createElement("h2", { key: "h2", id: "heading2" }, "This is h2 Heading"),
           React.createElement("h3", { key: "h3", id: "heading3" }, "This is h3 Heading")
       ]
   );
   ```

2. **Using JSX**:
   ```jsx
   const nestedHeaderJSX = (
       <div className="title">
           <h1 id="heading1">This is h1 Heading</h1>
           <h2 id="heading2">This is h2 Heading</h2>
           <h3 id="heading3">This is h3 Heading</h3>
       </div>
   );
   ```

3. **Using a Functional Component with JSX**:
   ```jsx
   const TitleComponent = () => (
       <div className="title">
           <h1 id="heading1">This is h1 Heading</h1>
           <h2 id="heading2">This is h2 Heading</h2>
           <h3 id="heading3">This is h3 Heading</h3>
       </div>
   );
   ```

### Passing Attributes in JSX

The project shows how to pass attributes (props) to components in JSX:

```jsx
const TitleComponentWithProps = (props) => (
    <div className="title" style={props.style}>
        <h1 id="heading1" style={{ color: props.color }}>This is h1 Heading</h1>
        <h2 id="heading2">This is h2 Heading</h2>
        <h3 id="heading3">This is h3 Heading</h3>
    </div>
);

// Usage
<TitleComponentWithProps color="blue" style={{ backgroundColor: "#f0f0f0", padding: "10px" }} />
```

### Component Composition

Component composition is a pattern where you combine simpler components to create more complex ones:

```jsx
const HeadingComponent = () => (
    <h1 id="composedHeading">This is a Heading Component</h1>
);

const ContainerComponent = () => (
    <div className="container">
        <HeadingComponent />
        <p>This is a paragraph inside the container</p>
    </div>
);
```

### Different Ways to Use Components in JSX

There are three main ways to use components in JSX:

1. **{TitleComponent()}** - Calling the component function:
   ```jsx
   const ComponentVariable = DemoComponent;
   {ComponentVariable()}
   ```
   This calls the component function and renders its result.

2. **{<TitleComponent/>}** - Using the component as a JSX tag with self-closing syntax:
   ```jsx
   <DemoComponent />
   ```
   This is the most common way to use components in React.

3. **{<TitleComponent></TitleComponent>}** - Using the component as a JSX tag with opening and closing tags:
   ```jsx
   <DemoComponent></DemoComponent>
   ```
   This is equivalent to the self-closing syntax but allows for nested content.

### Header Component

The project includes a complete Header component built from scratch using functional components with JSX:

```jsx
const Header = () => {
    return (
        <header className="header">
            {/* Logo on left */}
            <div className="logo">
                <img 
                    src="https://reactjs.org/logo-og.png" 
                    alt="React Logo" 
                    className="logo-img"
                />
            </div>

            {/* Search bar in middle */}
            <div className="search-container">
                <input 
                    type="text" 
                    placeholder="Search..." 
                    className="search-input"
                />
                <button className="search-button">
                    Search
                </button>
            </div>

            {/* User icon on right */}
            <div className="user-icon">
                <img 
                    src="https://cdn-icons-png.flaticon.com/512/149/149071.png" 
                    alt="User Icon" 
                    className="user-img"
                />
            </div>
        </header>
    );
};
```

The Header component features:
- A logo on the left
- A search bar in the middle
- A user icon on the right
- CSS styling to make it look nice

## CSS Styling in React

React offers several approaches to styling components. This section explores the different methods with a focus on inline styling using JavaScript objects.

### 1. Traditional CSS with className

The most basic approach is using external CSS files and applying classes with the `className` prop (React's equivalent of HTML's `class` attribute):

```jsx
// In your component
<div className="header">
    <h1 className="title">Hello World</h1>
</div>

// In your CSS file
.header {
    background-color: #f0f0f0;
    padding: 20px;
}
.title {
    color: blue;
}
```

This approach is familiar to developers with HTML/CSS experience and allows for separation of concerns.

### 2. Inline Styling with Style Objects

React allows you to define styles directly in your JavaScript using objects. This is known as "CSS-in-JS" and offers several advantages:

- **Dynamic styling** based on props or state
- **Scoped styles** that won't affect other components
- **No CSS class name conflicts**
- **JavaScript power** for style manipulation

#### Example: Pre-defined Style Object

```jsx
// Define a style object outside the component
const styleCard = {
    backgroundColor: "yellow",
    borderRadius: "8px",
    padding: "16px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
};

// Use it in your component
const Card = () => (
    <div style={styleCard}>
        <h2>Card Title</h2>
        <p>Card content goes here</p>
    </div>
);
```

#### Example: Inline Style Object

```jsx
// Define styles directly in the JSX
const Button = () => (
    <button 
        style={{ 
            backgroundColor: "blue", 
            color: "white",
            padding: "8px 16px",
            border: "none",
            borderRadius: "4px"
        }}
    >
        Click Me
    </button>
);
```

### Important Rules for Inline Styling in React

1. **Use camelCase for CSS properties**:
   - `background-color` becomes `backgroundColor`
   - `font-size` becomes `fontSize`
   - `border-radius` becomes `borderRadius`

2. **Values are strings** (except for numbers):
   ```jsx
   // Correct
   style={{ fontSize: "16px", margin: "10px", opacity: 0.8 }}

   // Also correct (numbers automatically get "px" added)
   style={{ fontSize: 16, margin: 10, opacity: 0.8 }}
   ```

3. **Double curly braces syntax**:
   - Outer braces `{ }` are for embedding JavaScript in JSX
   - Inner braces `{ }` define the object literal
   ```jsx
   <div style={{ color: "red" }}>Red Text</div>
   ```

### Visual Comparison of Styling Approaches

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  ┌─────────────────┐    ┌─────────────────┐            │
│  │  External CSS   │    │  Inline Styles  │            │
│  └─────────────────┘    └─────────────────┘            │
│                                                         │
│  className="header"     style={headerStyle}            │
│                         style={{ color: "blue" }}      │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │ Pros:                 │ Pros:                   │   │
│  │ • Separation of       │ • Co-located with       │   │
│  │   concerns            │   component             │   │
│  │ • Caching             │ • Dynamic styling       │   │
│  │ • Media queries       │ • No class conflicts    │   │
│  │ • Pseudo-classes      │ • JavaScript power      │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Real Example from Our Project

In our food ordering app, we use both styling approaches:

1. **External CSS with className** for the Header component:
```jsx
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    src="https://www.dealnloot.com/wp-content/uploads/2020/03/swiggy-logo-1.png"
                    alt="Food Panda Logo"
                    className="logo"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};
```

2. **Inline styling with objects** for the RestaurantCard component:
```jsx
// Pre-defined style object
const styleCard = {
    backgroundColor: "yellow"
};

const RestaurantCard = () => {
    return (
        <div className="res-card" style={styleCard}>
            <img 
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/x4uyxvihmg8qa3pddkgf"
                // Inline style object
                style={{ width: "100%", height: "auto", maxHeight: "70%" }}
            />
            <h3>Meghna Foods</h3>
        </div>
    );
};
```

### When to Use Each Approach

**Use External CSS with className when:**
- You have complex styles with media queries and pseudo-classes
- You want to leverage CSS features like animations and transitions
- You're working with a large team that's familiar with traditional CSS
- You want to benefit from browser caching of CSS files

**Use Inline Styling with objects when:**
- You need dynamic styles based on props or state
- You want to ensure style encapsulation (no leaking styles)
- You're building a self-contained component
- You want to leverage JavaScript for style manipulation

### Other Styling Approaches in React

Beyond these two basic approaches, React ecosystem offers several advanced styling solutions:

1. **CSS Modules**: Scoped CSS files that avoid global namespace conflicts
2. **Styled Components**: A popular CSS-in-JS library for component-scoped styles
3. **Emotion**: Another powerful CSS-in-JS library with great performance
4. **Tailwind CSS**: A utility-first CSS framework that works well with React

## Future Enhancements

- Add more complex component examples with state and props
- Implement state management with hooks or context API
- Add routing capabilities with React Router
- Enhance styling with CSS-in-JS or a CSS framework
- Implement form validation and handling

## License

This project is licensed under the ISC License - see the package.json file for details.

## Author

Gurpreet
