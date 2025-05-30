# Namaste React Utilities Documentation

This document provides detailed information about the utility modules in the Namaste React application, including constants, helper functions, and mock data.

## Table of Contents

1. [constants.js](#constantsjs)
2. [mockData.js](#mockdatajs)

---

## constants.js

### Purpose
The constants.js file contains constant values used throughout the application, such as API URLs, CDN URLs, and other configuration values.

### Implementation
```javascript
export const CDN_URL =
    ""
export const LOGO_URL =
    ""
export const MENU_URL = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9269824&lng=77.6693608&restaurantId="
```

### Constants

#### CDN_URL
- **Purpose**: Base URL for the Content Delivery Network where restaurant images are stored
- **Usage**: Used in the RestaurantCard component to construct the full URL for restaurant images
- **Example**: 
  ```javascript
  <img src={CDN_URL + resData.info.cloudinaryImageId} alt={resData.info.name} />
  ```

#### LOGO_URL
- **Purpose**: URL for the application logo
- **Usage**: Used in the Header component to display the application logo
- **Example**:
  ```javascript
  <img src={LOGO_URL} alt="App Logo" className="logo" />
  ```

#### MENU_URL
- **Purpose**: Base URL for fetching restaurant menu data from the Swiggy API
- **Usage**: Used in the RestaurantMenu component to fetch menu data for a specific restaurant
- **Example**:
  ```javascript
  const fetchMenu = async () => {
      const data = await fetch(MENU_URL + resId);
      const json = await data.json();
      setResInfo(json);
  }
  ```

### Usage
The constants.js file is imported in various components to access these constant values:

```javascript
import { CDN_URL, LOGO_URL, MENU_URL } from "../utils/constants";
```

---

## mockData.js

### Purpose
The mockData.js file contains mock data used for development and testing purposes. This allows developers to work on the application without relying on the actual API, which can be useful in scenarios where the API is unavailable or rate-limited.

### Implementation
The file contains mock data structures that mimic the response from the Swiggy API, including:
- Restaurant list data
- Restaurant menu data

### Data Structures

#### restaurantList
- **Purpose**: Mock data for the list of restaurants
- **Structure**: An array of restaurant objects, each containing information such as name, cuisine, rating, etc.
- **Usage**: Used in the Body component during development to display a list of restaurants without making an API call

#### restaurantMenu
- **Purpose**: Mock data for a restaurant's menu
- **Structure**: An object containing menu categories and items
- **Usage**: Used in the RestaurantMenu component during development to display a restaurant's menu without making an API call

### Usage
The mockData.js file can be imported in components for development and testing:

```javascript
import { restaurantList, restaurantMenu } from "../utils/mockData";

// Example usage in Body component during development
const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);
  // ...
}
```

### Benefits of Using Mock Data
1. **Development without API**: Allows developers to work on the application without relying on the actual API
2. **Consistent Data**: Provides consistent data for testing and development
3. **Offline Development**: Enables development in offline environments
4. **Reduced API Calls**: Minimizes the number of API calls during development, which can be important if the API has rate limits

### Switching Between Mock and Real Data
The application can be configured to use either mock data or real API data based on environment variables or other configuration settings. This allows for flexibility in different development and production environments.