# Namaste React Components Documentation

This document provides detailed information about each component in the Namaste React application, including their purpose, props, state, and how they interact with other components.

## Table of Contents

1. [AppLayout](#applayout)
2. [Header](#header)
3. [Body](#body)
4. [RestaurantCard](#restaurantcard)
5. [RestaurantMenu](#restaurantmenu)
6. [Shimmer](#shimmer)
7. [About](#about)
8. [Contact](#contact)
9. [Error](#error)

---

## AppLayout

### Purpose
The AppLayout component serves as the main layout container for the application. It includes the Header component and an Outlet component from React Router that renders the current route's component.

### Implementation
```jsx
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};
```

### Dependencies
- Header component
- Outlet component from React Router

### Usage
The AppLayout component is used as the root component for all routes in the application.

---

## Header

### Purpose
The Header component displays the navigation header of the application, including the logo, location, search bar, and user options.

### Props
None

### State
The Header component might maintain state for:
- Whether the user is logged in
- Current location
- Cart items count

### Implementation
The Header component includes:
- Logo container with Swiggy logo
- Location container showing the current delivery location
- Navigation items including search, offers, help, user profile, and cart

### Dependencies
None

### Usage
The Header component is included in the AppLayout and appears on all pages of the application.

---

## Body

### Purpose
The Body component is the main content area of the application that displays the list of restaurants.

### State
The Body component maintains state for:
- List of restaurants (`restaurants`)
- Filtered list of restaurants (`filteredRestaurants`)
- Search text (`searchText`)
- Loading state (`isLoading`)

### Effects
The Body component uses the `useEffect` hook to fetch restaurant data when the component mounts.

### Implementation
The Body component includes:
- Search functionality to filter restaurants by name
- Filter functionality to filter restaurants by rating
- A grid of RestaurantCard components displaying restaurant information

### Dependencies
- RestaurantCard component
- Shimmer component (for loading state)

### Usage
The Body component is rendered when the user navigates to the home page (`/`).

---

## RestaurantCard

### Purpose
The RestaurantCard component displays information about a restaurant in a card format.

### Props
- `resData`: Object containing restaurant data including:
  - `info`: Object containing restaurant information such as:
    - `name`: Restaurant name
    - `cloudinaryImageId`: ID for the restaurant image
    - `cuisines`: Array of cuisine types
    - `avgRating`: Average rating
    - `costForTwo`: Cost for two people
    - `deliveryTime`: Estimated delivery time

### Implementation
The RestaurantCard component displays:
- Restaurant image
- Restaurant name
- Cuisines
- Average rating
- Delivery time
- Cost for two

### Dependencies
- constants.js for CDN_URL

### Usage
The RestaurantCard component is used in the Body component to display each restaurant in the list.

---

## RestaurantMenu

### Purpose
The RestaurantMenu component displays the menu for a specific restaurant.

### Props
None (uses URL parameters)

### State
The RestaurantMenu component maintains state for:
- Restaurant information (`resInfo`)

### Effects
The RestaurantMenu component uses the `useEffect` hook to fetch restaurant menu data when the component mounts.

### Implementation
```jsx
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import {MENU_URL} from "../utils/constants";

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

    const { name, cuisines, costForTwoMessage } = resInfo?.data?.cards[2]?.card?.card?.info || {};
    const itemCards = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || [];

    return resInfo === null ? (<Shimmer/>) : (
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

export default RestaurantMenu;
```

### Dependencies
- Shimmer component (for loading state)
- useParams hook from React Router
- constants.js for MENU_URL

### Usage
The RestaurantMenu component is rendered when the user navigates to a specific restaurant page (`/restaurant/:resId`).

---

## Shimmer

### Purpose
The Shimmer component displays a loading state while data is being fetched.

### Props
None

### Implementation
The Shimmer component displays a series of shimmer cards that mimic the layout of the content that will be loaded.

### Usage
The Shimmer component is used in various components like Body and RestaurantMenu to indicate loading state.

---

## About

### Purpose
The About component displays information about the application and its creators.

### Props
None

### Implementation
The About component is a simple component that displays static content about the application.

### Usage
The About component is rendered when the user navigates to the about page (`/about`).

---

## Contact

### Purpose
The Contact component displays contact information and possibly a contact form.

### Props
None

### Implementation
The Contact component is a simple component that displays static content with contact information.

### Usage
The Contact component is rendered when the user navigates to the contact page (`/contact`).

---

## Error

### Purpose
The Error component displays an error message when a route is not found or another error occurs.

### Props
None

### Implementation
The Error component displays a user-friendly error message and possibly a link to return to the home page.

### Usage
The Error component is used as the error element in the router configuration to handle 404 errors and other routing errors.