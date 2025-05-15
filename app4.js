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
      // Removed background color to use the white background from CSS
    };

    // RestaurantCard component - Uses inline styling with objects
    // This component demonstrates two approaches to inline styling:
    // 1. Using a predefined style object (styleCard)
    // 2. Using an inline style object directly in the JSX
    // RestaurantCard component - Now accepts props as a parameter
    // Props is a JavaScript object containing all the properties passed to the component
    const RestaurantCard = (props) => {
        // Console log the props object to see what's being passed
        console.log("RestaurantCard props:", props);

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
                    style={{ 
                        width: "100%", 
                        height: "auto", 
                        maxHeight: "50%", 
                        borderRadius: "8px 8px 0 0",
                        objectFit: "cover"
                    }}
                />
                {/* Using props.resName instead of hardcoded value */}
                <h3 style={{ 
                    margin: "10px 0 5px 0", 
                    fontSize: "17px", 
                    fontWeight: "500", 
                    color: "#3e4152",
                    lineHeight: "24px"
                }}>{props.resName || "Restaurant Name"}</h3>
                {/* Using props.cuisine instead of hardcoded value */}
                <h4 style={{ 
                    fontSize: "13px", 
                    textOverflow: "ellipsis", 
                    whiteSpace: "normal", 
                    marginBottom: "4px",
                    color: "#686b78",
                    fontWeight: "400"
                }}>{props.cuisine || "Various Cuisines"}</h4>
                <div style={{
                    borderTop: "1px solid #e9e9eb",
                    paddingTop: "8px",
                    marginTop: "8px"
                }}>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }}>
                        <div style={{
                            display: "flex",
                            alignItems: "center"
                        }}>
                            <span style={{ 
                                backgroundColor: "#48c479", 
                                color: "white", 
                                padding: "2px 5px", 
                                borderRadius: "4px",
                                fontSize: "12px",
                                fontWeight: "500",
                                marginRight: "8px"
                            }}>{props.rating || "4.4"} ★</span>
                            <h4 style={{ 
                                fontSize: "12px", 
                                margin: "0",
                                color: "#686b78",
                                fontWeight: "400"
                            }}>{props.deliveryTime || "38 minutes"}</h4>
                        </div>
                        <h4 style={{ 
                            fontSize: "12px", 
                            margin: "0",
                            color: "#686b78",
                            fontWeight: "400"
                        }}>{props.price || "₹200 for two"}</h4>
                    </div>
                    <div style={{
                        marginTop: "10px",
                        color: "#8a584b",
                        fontSize: "11px",
                        fontWeight: "500",
                        display: "flex",
                        alignItems: "center"
                    }}>
                        <img 
                            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/v1634558776/swiggy_one/OneIcon_3x.png" 
                            alt="Swiggy One" 
                            style={{ width: "18px", height: "18px", marginRight: "4px" }}
                        />
                        <span>50% off up to ₹100</span>
                    </div>
                </div>
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
                        {/* Passing props to RestaurantCard components */}
                        {/* Props are passed as attributes in JSX */}
                        <RestaurantCard 
                            resName="Meghna Foods" 
                            cuisine="Biryani, North Indian, Asian" 
                            rating="4.4" 
                            deliveryTime="38 minutes" 
                            price="₹200 for two"
                        />
                        <RestaurantCard 
                            resName="KFC" 
                            cuisine="Fast Food, Burgers, Sandwiches" 
                            rating="4.1" 
                            deliveryTime="25 minutes" 
                            price="₹400 for two"
                        />
                        <RestaurantCard 
                            resName="Domino's Pizza" 
                            cuisine="Pizza, Italian, Pasta" 
                            rating="3.9" 
                            deliveryTime="30 minutes" 
                            price="₹350 for two"
                        />
                        <RestaurantCard 
                            resName="Burger King" 
                            cuisine="Burgers, American, Fast Food" 
                            rating="4.2" 
                            deliveryTime="28 minutes" 
                            price="₹300 for two"
                        />
                        {/* Example of a component with no props - will use default values */}
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
