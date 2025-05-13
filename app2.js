/**
 * app2.js - React application with JSX example
 * 
 * This file demonstrates both the traditional React.createElement approach
 * and the more modern JSX syntax for creating React elements.
 * 
 * JSX is a syntax extension for JavaScript that looks similar to HTML
 * but gets transformed into React.createElement calls during the build process.
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
    const jsxHeading = <h1>Hello World from React using JSX</h1>;

    // Log the React element to console for debugging
    // Notice how React elements are JavaScript objects, not actual DOM elements
    console.log(heading);

    // Create a root using the React 18+ createRoot API
    const root = createRoot(document.getElementById("react-root"));

    // Render the React element to the DOM
    // Note: We could also render jsxHeading instead to see the JSX version
    root.render(heading);
});
