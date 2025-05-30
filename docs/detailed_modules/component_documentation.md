# Namaste React: Detailed Component Documentation

## Table of Contents
1. [Introduction](#introduction)
2. [AppLayout Component](#applayout-component)
3. [Header Component](#header-component)
4. [Body Component](#body-component)
5. [RestaurantCard Component](#restaurantcard-component)
6. [RestaurantMenu Component](#restaurantmenu-component)
7. [Shimmer Component](#shimmer-component)
8. [About Component](#about-component)
9. [Contact Component](#contact-component)
10. [Error Component](#error-component)
11. [Utility Functions](#utility-functions)

## Introduction

This document provides detailed explanations of each major component in the Namaste React application. It covers the implementation details, code structure, functionality, and relationships between components.

The Namaste React application is a food delivery platform similar to Swiggy, built using React 18 and modern JavaScript practices. It allows users to browse restaurants, search and filter restaurants, and view restaurant menus.

## AppLayout Component

### Purpose
The AppLayout component serves as the main layout container for the application. It provides a consistent structure across all pages, including the header and the main content area.

### Implementation

```jsx
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet/>
        </div>
    );
}
```

### Key Features
- Renders the Header component, which is present on all pages
- Uses React Router's Outlet component to render the content of the current route
- Provides a consistent layout structure for the entire application

### Relationships
- Parent to Header component
- Contains Outlet which renders child routes (Body, About, Contact, RestaurantMenu)

## Header Component

### Purpose
The Header component displays the navigation bar at the top of the application. It includes the logo, location information, and navigation links.

### Implementation

```jsx
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_URL} alt="Swiggy Logo" className="logo" />
            </div>
            <div className="location-container">
                <div className="location-title">Bellandur</div>
                <div className="location-address">Green Glen Layout, Bellandur, Bengaluru</div>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="cart-item">
                        <span className="cart-icon">
                            {/* Cart icon SVG */}
                        </span>
                        <span>Cart</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};
```

### Key Features
- Displays the application logo
- Shows the user's current location
- Provides navigation links to different sections of the application
- Includes a cart icon for future cart functionality
- Uses React Router's Link component for navigation

### Relationships
- Child of AppLayout component
- No direct children components, but contains navigation links to other routes

## Body Component

### Purpose
The Body component is the main content area of the home page. It displays a list of restaurants, allows users to search for restaurants, and filter restaurants by rating.

### Implementation

```jsx
const Body = () => {
    let [listOfRestaurants, setListOfRestaurants] = useState([]);
    let [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9269824&lng=77.6693608&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await data.json();
        setListOfRestaurants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return listOfRestaurants.length === 0 ? (
        <Shimmer/>
    ) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" placeholder="Search Restaurants" value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button onClick={() => {
                        const filteredRestaurant = listOfRestaurants.filter(res =>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurants(filteredRestaurant);
                    }}>Search</button>
                </div>
                <button className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                            (restaurant) =>
                            restaurant.info.avgRating > 4.5
                        );
                        setFilteredRestaurants(filteredList);
                    }}>
                    Top Rated Restuarant
                </button>
            </div>
            <div className="res-container">
                {filteredRestaurants.map((restaurant) => (
                    <Link key={restaurant.info.id}
                        to={"/restaurants/"+restaurant.info.id}>
                        <RestaurantCard resData={restaurant} />
                    </Link>
                ))}
            </div>
        </div>
    );
};
```

### Key Features
- Fetches restaurant data from the Swiggy API
- Displays a loading state (Shimmer) while data is being fetched
- Allows users to search for restaurants by name
- Provides a filter to show only top-rated restaurants (rating > 4.5)
- Renders a grid of RestaurantCard components
- Uses React Router's Link component to make restaurant cards clickable and navigate to the restaurant menu page

### State Management
- `listOfRestaurants`: Stores the original list of restaurants fetched from the API
- `filteredRestaurants`: Stores the filtered list of restaurants based on search or rating filters
- `searchText`: Stores the current search text entered by the user

### Relationships
- Child of Outlet (rendered through React Router)
- Parent to RestaurantCard components
- Uses Shimmer component for loading state

## RestaurantCard Component

### Purpose
The RestaurantCard component displays information about a single restaurant, including its image, name, cuisines, rating, delivery time, and cost for two.

### Implementation

```jsx
const RestaurantCard = (props) => {
    const { resData } = props;

    return (
        <div className="res-card" style={styleCard}>
            <img
                src={resData && resData.info && resData.info.cloudinaryImageId
                    ? `${CDN_URL}/${resData.info.cloudinaryImageId}`
                    : "default-image-url"
                }
                style={{
                    width: "100%",
                    height: "280px",
                    objectFit: "cover",
                    borderRadius: "16px 16px 0 0"
                }}
                alt={resData && resData.info ? resData.info.name : "Restaurant image"}
            />
            <div style={{
                height: "54px",
                overflow: "hidden"
            }}>
                <h3 style={{
                    margin: "6px 12px 2px 12px",
                    fontSize: "18px",
                    fontWeight: "600",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    height: "24px",
                }}>{resData && resData.info ? resData.info.name : "Restaurant Name"}</h3>
                <h4 style={{
                    fontSize: "14px",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    margin: "0 12px 4px 12px",
                    height: "20px",
                }}>{resData && resData.info && resData.info.cuisines ? resData.info.cuisines.join(", ") : "Various Cuisines"}</h4>
            </div>
            <div style={{
                borderTop: "1px solid #e9e9eb",
                paddingTop: "8px",
                margin: "8px 12px 0 12px",
                height: "70px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
            }}>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: "24px",
                }}>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        maxWidth: "60%"
                    }}>
                        <span style={{
                            backgroundColor: "#48c479",
                            color: "white",
                            padding: "0 5px",
                            borderRadius: "4px",
                            fontSize: "12px",
                            fontWeight: "600",
                            marginRight: "8px",
                            height: "20px",
                            display: "flex",
                            alignItems: "center",
                            flexShrink: 0
                        }}>{resData && resData.info ? resData.info.avgRatingString : "4.4"} ★</span>
                        <h4 style={{
                            fontSize: "12px",
                            margin: "0",
                            color: "#686b78",
                            fontWeight: "400",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            maxWidth: "100%"
                        }}>{resData && resData.info && resData.info.sla ? resData.info.sla.slaString : "38 minutes"}</h4>
                    </div>
                    <h4 style={{
                        fontSize: "12px",
                        margin: "0",
                        color: "#686b78",
                        fontWeight: "600",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "40%",
                        textAlign: "right"
                    }}>{resData && resData.info ? resData.info.costForTwo : "₹200 for two"}</h4>
                </div>
                <div style={{
                    color: "#8a584b",
                    fontSize: "11px",
                    fontWeight: "600",
                    display: "flex",
                    alignItems: "center",
                    height: "24px",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    width: "100%",
                    marginTop: "4px"
                }}>
                    <img
                        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/v1634558776/swiggy_one/OneIcon_3x.png"
                        alt="Swiggy One"
                        style={{ width: "18px", height: "18px", marginRight: "4px", flexShrink: 0 }}
                    />
                    <span style={{ 
                        overflow: "hidden", 
                        textOverflow: "ellipsis", 
                        whiteSpace: "nowrap",
                        width: "100%"
                    }}>
                        {resData && resData.info && resData.info.aggregatedDiscountInfoV3 
                            ? `${resData.info.aggregatedDiscountInfoV3.header} ${resData.info.aggregatedDiscountInfoV3.subHeader}`
                            : "50% off up to ₹100"}
                    </span>
                </div>
            </div>
        </div>
    );
};
```

### Key Features
- Displays restaurant image from Swiggy's CDN
- Shows restaurant name, cuisines, rating, delivery time, cost for two, and offers
- Handles edge cases with fallback values
- Uses inline styles for precise control over the appearance
- Ensures consistent card height and text truncation for long content

### Props
- `resData`: An object containing restaurant information from the Swiggy API

### Relationships
- Child of Body component
- Wrapped by Link component for navigation to restaurant menu

## RestaurantMenu Component

### Purpose
The RestaurantMenu component displays detailed information about a specific restaurant, including its name, cuisines, cost for two, and menu items.

### Implementation

```jsx
const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();

    const fetchMenu = async () => {
        const data = await fetch(MENU_URL + resId);
        const json = await data.json();
        setResInfo(json);
    }

    useEffect(() => {
        fetchMenu();
    }, []);

    // Properly destructuring the required properties from the info object
    const { name, cuisines, costForTwoMessage } = resInfo?.data?.cards[2]?.card?.card?.info || {};
    // Correctly accessing the menu items data
    const itemCards = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || [];

    return resInfo === null ? (
        <Shimmer/>
    ) : (
        <div className="menu">
            <h1>Name of Restaurant</h1>
            <h2>{name}</h2>
            <p>{cuisines.join(",")} - {costForTwoMessage}</p>
            <h3>{costForTwoMessage}</h3>
            <ul>
                {itemCards.map((item, index) => (
                    <li key={item?.card?.info?.id}>
                        {item?.card?.info?.name || ""} - Rs. {item?.card?.info?.price / 100}
                    </li>
                ))}
            </ul>
        </div>
    );
}
```

### Key Features
- Fetches restaurant menu data from the Swiggy API based on the restaurant ID from URL parameters
- Displays a loading state (Shimmer) while data is being fetched
- Shows restaurant name, cuisines, and cost for two
- Lists all menu items with their prices
- Uses optional chaining and default values to handle potential missing data

### State Management
- `resInfo`: Stores the restaurant information and menu items fetched from the API

### Relationships
- Child of Outlet (rendered through React Router)
- Uses Shimmer component for loading state

## Shimmer Component

### Purpose
The Shimmer component displays a loading state that mimics the structure of the content being loaded, providing a better user experience than a simple loading spinner.

### Implementation

```jsx
const Shimmer = () => {
    return (
        <div className="shimmer-container">
            {Array(10).fill("").map((_, index) => (
                <div key={index} className="shimmer-card">
                    <div className="shimmer-img shimmer-animation"></div>
                    <div className="shimmer-details">
                        <div className="shimmer-name shimmer-animation"></div>
                        <div className="shimmer-cuisine shimmer-animation"></div>
                        <div className="shimmer-meta">
                            <div className="shimmer-rating-container">
                                <div className="shimmer-rating shimmer-animation"></div>
                                <div className="shimmer-delivery-time shimmer-animation"></div>
                            </div>
                            <div className="shimmer-price shimmer-animation"></div>
                        </div>
                        <div className="shimmer-offer shimmer-animation"></div>
                    </div>
                </div>
            ))}
        </div>
    );
};
```

### Key Features
- Creates placeholder cards that mimic the structure of restaurant cards
- Uses CSS animations to create a shimmering effect
- Renders multiple shimmer cards to fill the screen
- Provides a more engaging loading experience than a simple spinner

### Relationships
- Used by Body component during initial data loading
- Used by RestaurantMenu component during menu data loading

## About Component

### Purpose
The About component displays information about the application, its purpose, and its creators.

### Implementation

```jsx
const About = () => {
    return (
        <div className="about">
            <h1>About Us</h1>
            <p>This is the About page of our Food Delivery App.</p>
            <p>We are a team of passionate developers who love food and technology.</p>
        </div>
    );
};
```

### Key Features
- Simple static page with information about the application
- Accessible through the navigation menu

### Relationships
- Child of Outlet (rendered through React Router)

## Contact Component

### Purpose
The Contact component provides contact information and potentially a contact form for users to get in touch with the application administrators.

### Implementation

```jsx
const Contact = () => {
    return (
        <div className="contact">
            <h1>Contact Us</h1>
            <p>This is the Contact page of our Food Delivery App.</p>
            <p>You can reach us at contact@fooddelivery.com</p>
        </div>
    );
};
```

### Key Features
- Simple static page with contact information
- Accessible through the navigation menu

### Relationships
- Child of Outlet (rendered through React Router)

## Error Component

### Purpose
The Error component displays a user-friendly error message when a user navigates to a non-existent route.

### Implementation

```jsx
const Error = () => {
    const err = useRouteError();
    
    return (
        <div className="error">
            <h1>Oops! Something went wrong</h1>
            <h2>{err.status}: {err.statusText}</h2>
            <p>{err.data}</p>
            <p>Please check the URL or go back to the home page.</p>
        </div>
    );
};
```

### Key Features
- Displays a user-friendly error message
- Shows the error status and message from React Router
- Provides guidance on how to proceed

### Relationships
- Rendered by React Router when a route doesn't match any defined routes

## Utility Functions

### Constants

The application uses a constants file to store frequently used values:

```jsx
// constants.js
export const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660";
export const LOGO_URL = "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png";
export const MENU_URL = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=";
```

### Key Features
- Centralizes important constants used throughout the application
- Makes it easy to update values in one place
- Improves code maintainability