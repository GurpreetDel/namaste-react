/**
 * app.js - Main React application file
 * 
 * This file demonstrates different ways to create nested React components using React.createElement.
 * Below are the HTML structures we're trying to create with React:
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

    // Example 1: Simple heading element
    const heading = React.createElement(
        "h1",                     // HTML tag
        {id: "reactHeading"},     // Props/attributes
        "Hello World from React"  // Children/content
    );

    // Example 3: Complex nested structure with multiple children and siblings
    // This creates the third HTML structure shown in the comment above
    const heading3 = React.createElement(
        "div",                    // Parent div
        {id: "parent"},           // Parent props
        [                         // Array of children
            // First child div with its own children
            React.createElement(
                "div",
                {id: "child", key: "child1"},
                [                 // Array of siblings within first child
                    React.createElement(
                        "h1",
                        {id: "h1child", key: "h1child1"},
                        "This is Namaste React Emoji"
                    ),
                    React.createElement(
                        "h2",
                        {id: "h2child", key: "h2child1"},
                        "This is h2 heading from React Sibling 2 child"
                    )
                ]
            ),

            // Second child div with its own children
            React.createElement(
                "div",
                {id: "child2", key: "child2"},
                [                 // Array of siblings within second child
                    React.createElement(
                        "h1",
                        {id: "h1child2", key: "h1child2"},
                        "This is h1 heading from React Sibling 1 child2 "
                    ),
                    React.createElement(
                        "h2",
                        {id: "h2child2", key: "h2child2"},
                        "This is h2 heading from React Sibling 2 child2 "
                    )
                ]
            )
        ]
    );

    // Example 2: Parent with child containing sibling elements
    // This creates the second HTML structure shown in the comment above
    const heading2 = React.createElement(
        "div",                    // Parent div
        {id: "parent"},           // Parent props
        React.createElement(      // Single child
            "div",
            {id: "child"},
            [                     // Array of siblings within child
                React.createElement(
                    "h1",
                    {id: "h1Heading", key: "heading2-h1"},
                    "This is h1 heading from React Sibling 1 "
                ),
                React.createElement(
                    "h2",
                    {id: "h2Heading", key: "heading2-h2"},
                    "This is h2 heading from React Sibling 2 "
                )
            ]
        )
    );

    // Log the complex structure to console for debugging
    console.log(heading3);

    // Create a root using the React 18+ createRoot API
    const root = createRoot(document.getElementById("react-root"));

    // Render the complex nested structure to the DOM
    root.render(heading3);
});
