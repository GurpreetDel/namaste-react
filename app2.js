/**
 * app2.js - React application with JSX example
 * 
 * This file demonstrates both the traditional React.createElement approach
 * and the more modern JSX syntax for creating React elements.
 * 
 * JSX is a syntax extension for JavaScript that looks similar to HTML
 * but gets transformed into React.createElement calls during the build process.
 * 
 * WHAT JSX RETURNS:
 * -----------------
 * JSX expressions always return React elements, which are plain JavaScript objects.
 * These objects describe what you want to see on the screen. They contain:
 * 1. type: The element type (HTML tag name or React component)
 * 2. props: An object containing attributes and children
 * 3. key: A special identifier for lists (optional)
 * 4. ref: A reference to the DOM node or component instance (optional)
 * 
 * For example, the JSX expression:
 *   <h1 className="header">Hello World</h1>
 * 
 * Returns a JavaScript object that looks like:
 *   {
 *     type: 'h1',
 *     props: {
 *       className: 'header',
 *       children: 'Hello World'
 *     },
 *     key: null,
 *     ref: null
 *   }
 * 
 * React then uses these objects to build the DOM and keep it in sync with your data.
 * 
 * JSX VS FUNCTIONAL COMPONENTS:
 * ----------------------------
 * 1. JSX:
 *    - Is a syntax extension for JavaScript that looks like HTML
 *    - Gets transformed into React.createElement() calls during build
 *    - Returns React elements (JavaScript objects)
 *    - Is used to describe what the UI should look like
 *    - Example: const element = <h1>Hello World</h1>;
 * 
 * 2. Functional Components:
 *    - Are JavaScript functions that return JSX/React elements
 *    - Can contain logic, state (with hooks), and side effects
 *    - Can be reused and composed with other components
 *    - Follow naming convention of starting with a capital letter
 *    - Example: const Greeting = () => <h1>Hello World</h1>;
 * 
 * HOW TO RENDER JSX AND FUNCTIONAL COMPONENTS:
 * -------------------------------------------
 * 1. Rendering JSX:
 *    - Create a root using createRoot()
 *    - Call root.render() with your JSX expression
 *    - Example: root.render(<h1>Hello World</h1>);
 * 
 * 2. Rendering Functional Components:
 *    - Method 1: Use the component as a JSX tag
 *      Example: root.render(<Greeting />);
 *    - Method 2: Call the component function and render its result
 *      Example: root.render(Greeting());
 * 
 * The key difference in rendering is that functional components can be:
 * - Used as JSX tags (preferred, allows React to manage the component lifecycle)
 * - Called as functions (less common, but useful in some scenarios)
 * 
 * Below are examples of HTML structures we can create with React:
 * 
 * Structure 1: Simple parent-child structure
 * <div id="parent">
 *     <div id="child">
 *         <h1> This is h1 tag from React</h1>
 *     </div>
 * </div>
 *
 * Structure 2: Parent with child containing sibling elements
 * <div id="parent">
 *     <div id="child">
 *          <h1 id="h1Heading"> This is h1 heading from React Sibling 1 </h1>
 *          <h2 id="h2Heading"> This is h2 heading from React Sibling 2</h2>
 *     </div>
 * </div>
 *
 * Structure 3: Parent with multiple children, each containing multiple elements
 * <div id="parent">
 *     <div id="child">
 *         <h1 id="h1child"> This is h1 child</h1>
 *         <h2 id="h2child"> This is h2 child </h2>
 *     </div>
 *
 *     <div id="child2">
 *         <h1 id="h1child2"> this is h1 child2</h1>
 *         <h2 id="h2child2"> this is h2 child2</h2>
 *     </div>
 * </div>
 */

// Import React library for creating elements
import React from 'react';
// Import createRoot API from React DOM for rendering (React 18+)
import { createRoot } from 'react-dom/client';

// Wait for DOM to be fully loaded before rendering React components
document.addEventListener('DOMContentLoaded', function() {
    // Create a container div for React to render into
    const reactDivElement = document.createElement("div");
    reactDivElement.id = "react-root";
    document.body.appendChild(reactDivElement);

    // Traditional React.createElement approach
    const heading = React.createElement(
        "h1",                     // HTML tag
        {id: "reactHeading"},     // Props/attributes
        "Hello World from React"  // Children/content
    );

    // JSX approach - this gets transformed into React.createElement during build
    // This is more readable and similar to HTML syntax

    // Simple JSX heading with attributes
    const jsxHeading = <h1 id="reactHeading" className="head" tabIndex="1">Hello World from React using JSX</h1>;

    // JSX with various HTML elements and attributes
    const jsxContent = (
        <div className="jsx-examples">
            {/* Heading with multiple attributes */}
            <h1 id="reactHeading" className="head" tabIndex="1">
                Exploring JSX Attributes
            </h1>

            {/* Image tag with various attributes */}
            <div className="image-example">
                <h2>Image Tag in JSX</h2>
                <img 
                    src="https://reactjs.org/logo-og.png" 
                    alt="React Logo" 
                    width="300" 
                    height="200"
                    loading="lazy"
                    className="react-logo"
                    title="React Logo"
                />
                <p>Above: Image with src, alt, width, height, loading, className, and title attributes</p>
            </div>

            {/* Video tag with various attributes */}
            <div className="video-example">
                <h2>Video Tag in JSX</h2>
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
                <p>Above: Video with src, controls, width, height, autoPlay, muted, loop, poster, and className attributes</p>
            </div>

            {/* Anchor tag with various attributes */}
            <div className="anchor-example">
                <h2>Anchor Tag in JSX</h2>
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
                <p>Above: Anchor with href, target, rel, className, title, and id attributes</p>
            </div>

            {/* Form elements with attributes */}
            <div className="form-example">
                <h2>Form Elements in JSX</h2>
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
            </div>
        </div>
    );

    // FUNCTIONAL COMPONENTS AND RETURNING REACT ELEMENTS
    // There are multiple ways to define functional components and return React elements:

    // Method 1: Using explicit return statement with curly braces
    // This is useful when you need to include additional logic before returning
    const ReactHeadingComponent = () => {
        // You can add any JavaScript logic here
        const title = "Namaste React";

        // The return statement explicitly returns a React element (object)
        return (
            <div>
                <h1>{title} Functional Component</h1>
            </div>
        );
    };

    // Method 2: Using implicit return with parentheses (no curly braces or return keyword)
    // This is a more concise syntax when you only need to return JSX without additional logic
    const ReactHeadingComponent2 = () => (
        <div>
            <h1>Namaste React Functional Component</h1>
        </div>
    );

    // Method 3: Single-line implicit return (for very simple components)
    // No parentheses needed for single-line expressions
    const ReactHeadingComponent3 = () => <h1>Simple Functional Component</h1>;

    // Create instances of the functional components (these are also React elements)
    // Method 2 of rendering functional components: Call the function directly
    const componentInstance = ReactHeadingComponent();
    const componentInstance2 = ReactHeadingComponent2();
    const componentInstance3 = ReactHeadingComponent3();

    // Log the React elements to console for debugging
    // Notice how React elements are JavaScript objects, not actual DOM elements
    console.log("React.createElement result:", heading);
    console.log("Simple JSX element:", jsxHeading);
    console.log("Complex JSX structure:", jsxContent);

    // Log functional component instances
    console.log("Functional component instance:", componentInstance);

    // Create a root using the React 18+ createRoot API
    const root = createRoot(document.getElementById("react-root"));

    // RENDERING JSX VS FUNCTIONAL COMPONENTS:
    // ----------------------------------------

    // 1. Rendering JSX directly:
    // This is the most basic way to render content with React
    // root.render(<h1>Direct JSX Rendering</h1>);

    // 2. Rendering JSX stored in a variable:
    // This is useful when you want to create JSX ahead of time
    // root.render(jsxHeading);

    // 3. Rendering a functional component by calling it (Method 2):
    // This calls the function and renders the returned JSX
    // root.render(reactHeadingComponent());

    // 4. Rendering a functional component using JSX tags (Method 1 - PREFERRED):
    // This is the standard way to use components in React applications
    // It allows React to manage the component lifecycle and handle props properly
    // root.render(<reactHeadingComponent />);  // Note: This won't work because the function name doesn't start with a capital letter

    // To properly use Method 1, component names should start with a capital letter:
    const HeadingComponent = () => <h1>Properly Named Functional Component</h1>;
    // root.render(<HeadingComponent />);  // This works correctly

    // For this example, we're rendering all three functional components:
    // This is where React takes the React element objects returned by the components
    // and converts them into actual DOM elements that the browser can display
    root.render(
        <div>
            {/* Rendering all three functional components using JSX tags (Method 1) */}
            <h2>All Three Functional Components:</h2>
            <div className="component-container">
                <ReactHeadingComponent />
                <ReactHeadingComponent2 />
                <ReactHeadingComponent3 />
            </div>
        </div>
    );

    // Try uncommenting different render calls above to see the different rendering methods in action!
    // For example: root.render(componentInstance);
});
