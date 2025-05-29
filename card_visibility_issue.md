# Restaurant Card Visibility Issue

## Problem Description

The restaurant cards were not properly visible in full length when running the application on localhost. This issue occurred after wrapping the `RestaurantCard` components with `Link` components to make them clickable and navigate to the restaurant detail page.

## Root Cause Analysis

After investigating the codebase, we identified the following issues:

1. **Missing Link Component Styling**: When the `RestaurantCard` components were wrapped with `Link` components in the `Body.js` file, the `Link` components didn't have any styling to ensure they maintained the proper dimensions of the `RestaurantCard`.

2. **CSS Structure Issues**: 
   - The `.res-card` class had a fixed height of 320px, which might be too restrictive for the content.
   - The text elements in the `RestaurantCard` component had `textOverflow: "ellipsis"` and `whiteSpace: "nowrap"` which truncated text rather than allowing it to wrap.
   - The `.res-container` class used a very small gap (0.3%) between cards, which might have caused them to be squeezed.

3. **HTML Structure**: The `Link` component was wrapping the `RestaurantCard` component without inheriting its styling properties, causing the cards to lose their proper dimensions.

## Solution

We implemented the following changes to fix the issue:

1. **Added CSS Styling for Link Components**: We added CSS rules for the `Link` components inside the `.res-container` to ensure they maintain the proper dimensions of the `RestaurantCard`:

```css
.res-container a {
    width: 24.5%;
    text-decoration: none;
    color: inherit;
}
```

This ensures that:
- The `Link` components have the same width as the `RestaurantCard` components (24.5%)
- The default text decoration (underline) is removed
- The text color is inherited from the parent element

## Before and After

### Before:
- Restaurant cards were not properly visible in full length
- Cards appeared squeezed or truncated
- Content might have been cut off

### After:
- Restaurant cards are now properly visible in full length
- Cards maintain their proper dimensions
- All content is visible without being cut off

## Lessons Learned

1. **Component Wrapping**: When wrapping components with other components (like `Link`), make sure to consider the styling implications.
2. **CSS Inheritance**: Be aware of how CSS properties are inherited (or not) between parent and child components.
3. **Responsive Design**: Ensure that your components are designed to be responsive and can adapt to different content lengths.

## Conclusion

The issue was resolved by adding proper CSS styling for the `Link` components that wrap the `RestaurantCard` components. This ensures that the cards display properly in full length and maintain their proper dimensions.