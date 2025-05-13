/**
 * app3.js - React application implementing the requirements from the issue description
 * 
 * This file demonstrates:
 * 1. Creating a nested header element using React.createElement
 * 2. Creating the same element using JSX
 * 3. Creating a functional component of the same with JSX
 * 4. Passing attributes into the tag in JSX
 * 5. Composition of Component (Add a component inside another)
 * 6. Different ways to use components in JSX: {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>}
 * 7. Creating a Header Component with logo, search bar, and user icon
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

    // 1. Create a Nested header Element using React.createElement (h1, h2, h3 inside a div with class "title")
    const nestedHeaderElement = React.createElement(
        "div",                    // Parent div
        { className: "title" },   // Using className instead of class for CSS class
        [                         // Array of children
            React.createElement(
                "h1",
                { key: "h1", id: "heading1" },
                "This is h1 Heading"
            ),
            React.createElement(
                "h2",
                { key: "h2", id: "heading2" },
                "This is h2 Heading"
            ),
            React.createElement(
                "h3",
                { key: "h3", id: "heading3" },
                "This is h3 Heading"
            )
        ]
    );

    // 2. Create the same element using JSX
    const nestedHeaderJSX = (
        <div className="title">
            <h1 id="heading1">This is h1 Heading</h1>
            <h2 id="heading2">This is h2 Heading</h2>
            <h3 id="heading3">This is h3 Heading</h3>
        </div>
    );

    // 3. Create a functional component of the same with JSX
    const TitleComponent = () => (
        <div className="title">
            <h1 id="heading1">This is h1 Heading</h1>
            <h2 id="heading2">This is h2 Heading</h2>
            <h3 id="heading3">This is h3 Heading</h3>
        </div>
    );

    // 4. Pass attributes into the tag in JSX
    const TitleComponentWithProps = (props) => (
        <div className="title" style={props.style}>
            <h1 id="heading1" style={{ color: props.color }}>This is h1 Heading</h1>
            <h2 id="heading2">This is h2 Heading</h2>
            <h3 id="heading3">This is h3 Heading</h3>
        </div>
    );

    // 5. Composition of Component (Add a component inside another)
    const HeadingComponent = () => (
        <h1 id="composedHeading">This is a Heading Component</h1>
    );

    const ContainerComponent = () => (
        <div className="container">
            <HeadingComponent />
            <p>This is a paragraph inside the container</p>
        </div>
    );

    // 6. Different ways to use components in JSX
    // First, create a simple component to demonstrate
    const DemoComponent = () => (
        <div className="demo">
            <h2>Demo Component</h2>
        </div>
    );

    // Component to demonstrate different ways to use components in JSX
    const ComponentUsageDemo = () => {
        // Store component in a variable
        const ComponentVariable = DemoComponent;

        return (
            <div className="usage-demo">
                <h2>Different Ways to Use Components in JSX</h2>

                {/* Method 1: Calling the component function */}
                <div className="method">
                    <h3>Method 1: {'{TitleComponent()}'}</h3>
                    <p>Calling the component function:</p>
                    {ComponentVariable()}
                </div>

                {/* Method 2: Using component as a JSX tag with self-closing syntax */}
                <div className="method">
                    <h3>Method 2: {'{<TitleComponent/>}'}</h3>
                    <p>Using the component as a JSX tag with self-closing syntax:</p>
                    <DemoComponent />
                </div>

                {/* Method 3: Using component as a JSX tag with opening and closing tags */}
                <div className="method">
                    <h3>Method 3: {'{<TitleComponent></TitleComponent>}'}</h3>
                    <p>Using the component as a JSX tag with opening and closing tags:</p>
                    <DemoComponent></DemoComponent>
                </div>
            </div>
        );
    };

    // 7. Create a Header Component from scratch using Functional Components with JSX
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

    // Create a root using the React 18+ createRoot API
    const root = createRoot(document.getElementById("react-root"));

    // Render all components to demonstrate the requirements
    root.render(
        <div className="app-container">
            <h1 className="section-title">1. Nested Header Element using React.createElement</h1>
            {/* We can't directly render the React.createElement result here because we're in JSX,
                 but it would be rendered if we used root.render(nestedHeaderElement) */}
            <div className="example-output">
                <pre>{JSON.stringify(nestedHeaderElement, null, 2)}</pre>
            </div>

            <h1 className="section-title">2. Same Element using JSX</h1>
            {nestedHeaderJSX}

            <h1 className="section-title">3. Functional Component with JSX</h1>
            <TitleComponent />

            <h1 className="section-title">4. Passing Attributes into JSX</h1>
            <TitleComponentWithProps color="blue" style={{ backgroundColor: "#f0f0f0", padding: "10px" }} />

            <h1 className="section-title">5. Component Composition</h1>
            <ContainerComponent />

            <h1 className="section-title">6. Different Ways to Use Components in JSX</h1>
            <ComponentUsageDemo />

            <h1 className="section-title">7. Header Component</h1>
            <Header />
        </div>
    );
});
