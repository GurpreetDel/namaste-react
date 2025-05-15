import React from 'react';
import { createRoot } from 'react-dom/client';

// Wait for DOM to be fully loaded before rendering React components
document.addEventListener('DOMContentLoaded', function() {
    // Create a container div for React to render into
    const reactDivElement = document.createElement("div");
    reactDivElement.id = "react-root";
    document.body.appendChild(reactDivElement);

    // Header component - Uses className for CSS styling
    // This component demonstrates traditional CSS styling with class names
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

    // CSS-in-JS: Defining styles as a JavaScript object
    // This is one way to create inline styles in React
    // The object keys are camelCased CSS properties (backgroundColor instead of background-color)
    // The values are regular CSS values as strings
    const styleCard =
    {
      backgroundColor: "yellow" // This will apply a yellow background to the component
    };

    // RestaurantCard component - Uses inline styling with objects
    // This component demonstrates two approaches to inline styling:
    // 1. Using a predefined style object (styleCard)
    // 2. Using an inline style object directly in the JSX
    const RestaurantCard = () => {
        return (
            <div className="res-card" style={styleCard}>
                {/* 
                  Inline style defined directly in the JSX
                  Note how we use double curly braces: {{ }} 
                  - The outer braces are for embedding JavaScript in JSX
                  - The inner braces define the object literal
                */}
                <img 
                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/x4uyxvihmg8qa3pddkgf"
                    style={{ width: "100%", height: "auto", maxHeight: "70%" }}
                />
                <h3>Meghna Foods</h3>
            </div>
        );
    };

    // Body component - Container for the main content
    // This component uses className for styling and demonstrates component composition
    // by including the RestaurantCard component
    const Body = () => {
        return (
            <div className="body">
                <div className="search">Search</div>
                    <div className="res-container">
                        {/* 
                          Component composition: Using the RestaurantCard component
                          The styleCard object's styles will be applied to this component
                        */}
                        <RestaurantCard />
                        {/*RestaurantCards*/}
                    </div>

            </div>
        );
    };

    // AppLayout component - The main application layout
    // This component demonstrates component composition by including Header and Body components
    const AppLayout = () => {
        return (
            <div className="app">
                {/*<h1>Hello World</h1>*/}
                <Header />
                <Body />
            </div>
        );
    }

    // Create a root using React 18's createRoot API
    // This is the modern way to render React components to the DOM
    const root = createRoot(document.getElementById("react-root"));

    // Render the AppLayout component to the DOM
    // This will trigger the rendering of all nested components (Header, Body, RestaurantCard)
    root.render(<AppLayout />);
});
