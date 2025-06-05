# React Hook Error and Solution

## The Error

When running the application locally, the following error was encountered:

```
TypeError: Cannot read properties of null (reading 'useEffect')
```

Along with:

```
Invalid hook call. Hooks can only be called inside of the body of a function component.
```

The error occurred in the `RestaurantMenu.js` file, specifically at line 3 where the `useEffect` hook was being called outside of the component function.

## Why This Error Occurred

React Hooks, including `useEffect`, must follow specific rules:

1. **Hooks can only be called inside React function components** - They cannot be called at the module level (outside of any component function).
2. Hooks can only be called at the top level of a component - They cannot be called inside loops, conditions, or nested functions.
3. Hooks cannot be called from regular JavaScript functions.

In our code, the error occurred because:
- The `useEffect` hook was defined at the module level (outside of the `RestaurantMenu` component function)
- The `fetchMenu` function was also defined outside the component

## The Solution

To fix this issue, we moved both the `useEffect` hook and the `fetchMenu` function inside the `RestaurantMenu` component function:

### Before (Incorrect):
```javascript
import { useState, useEffect } from "react";

useEffect(() => {
    console.log("useEffect called , RestaurantMenu Component renders and refreshes and calls every time");
    fetchMenu();
}, []);

const fetchMenu = async () => {
    console.log("fetchMenu called");
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9269824&lng=77.6693608&restaurantId=263484&catalog_qa=undefined&submitAction=ENTER");
    const json = await data.json();
    console.log(json);
}

const RestaurantMenu = () => {
    return (
        <div className="menu">
            <h1>Name of Restaurant</h1>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burgers</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    );
}
```

### After (Correct):
```javascript
import { useState, useEffect } from "react";

const RestaurantMenu = () => {
    
    const fetchMenu = async () => {
        console.log("fetchMenu called");
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9269824&lng=77.6693608&restaurantId=263484&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        console.log(json);
    }
    
    useEffect(() => {
        console.log("useEffect called , RestaurantMenu Component renders and refreshes and calls every time");
        fetchMenu();
    }, []);
    
    return (
        <div className="menu">
            <h1>Name of Restaurant</h1>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burgers</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    );
}
```

## Key Takeaways

1. **Always follow the Rules of Hooks**:
   - Only call hooks at the top level of React function components
   - Don't call hooks inside loops, conditions, or nested functions

2. **Component-related logic should be inside the component**:
   - Functions that are used by a component (like `fetchMenu`) should be defined inside that component
   - This makes the code more maintainable and follows React's component-based architecture

3. **Common causes of hook errors**:
   - Calling hooks outside of a component function
   - Conditional hook calls
   - Calling hooks in regular JavaScript functions
   - Having multiple versions of React in the same application

By following these rules, you can avoid similar errors in the future.

"+1"
"🥇"