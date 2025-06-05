# Day 5 - June 2025: Custom React Hooks

## What We Learned Today

1. **Custom React Hooks**
   - Created and implemented a custom hook called `useRestaurantMenu`
   - Learned how to extract component logic into reusable functions
   - Understood the naming convention for custom hooks (must start with "use")

2. **React State Management**
   - Practiced using the useState hook for local component state
   - Implemented data fetching with useEffect and useState

3. **Async/Await in React**
   - Used async/await syntax for API calls
   - Handled API responses and updated state accordingly

## Problems Encountered and Solutions

### Problem 1: useState Hook Used Outside Component

**Issue:**
The useState hook was incorrectly placed outside the component function:

```javascript
import {useEffect, useState} from "react";
import {MENU_URL} from "./constants";
const [resInfo, setResInfo] = useState(null); // Error: Called outside component

const useRestaurantMenu = (resId) => {
    // Component logic
}
```

**Solution:**
Moved the useState hook inside the component function:

```javascript
import {useEffect, useState} from "react";
import {MENU_URL} from "./constants";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null); // Correct: Inside component
    
    // Rest of component logic
}
```

**Explanation:**
React hooks can only be called inside React function components or custom hooks. They cannot be called at the top level of a module. By moving the useState hook inside our custom hook function, we ensure it follows React's rules of hooks.

### Problem 2: API Data Fetching

**Issue:**
Needed to implement efficient data fetching for restaurant menu information.

**Solution:**
Created a custom hook that encapsulates the data fetching logic:

```javascript
const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(MENU_URL + resId);
        const json = await data.json();
        setResInfo(json);
    };

    return resInfo;
}
```

**Explanation:**
This custom hook handles the entire data fetching process, including state management. Components can now simply call this hook with a restaurant ID and receive the menu data without needing to implement the fetching logic themselves.