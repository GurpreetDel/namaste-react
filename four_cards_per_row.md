# Four Cards Per Row Implementation

## Problem Description

The restaurant cards in the application were displaying only three cards per row, which did not match the layout of the original Swiggy.com website that displays four cards per row. This created a visual inconsistency between our application and the reference design.

## Root Cause Analysis

After examining the codebase, we identified that the CSS styling was configured to display three cards per row:

1. **Card Width Configuration**: 
   - The `.res-container a` class had a width of 32%, which allowed only three cards to fit in a row (3 * 32% = 96%, with 2% gaps between them).
   - The `.shimmer-card` class also had a width of 32%, maintaining consistency with the actual cards during loading.

2. **Layout Structure**:
   - The `.res-container` class used a 2% gap between cards, which was appropriate but needed to be considered when calculating the new card width.

## Solution

We implemented the following changes to display four cards per row:

### 1. Updated Card Width

```css
.res-container a {
    width: 23.5%;
    text-decoration: none;
    color: inherit;
    display: block;
}
```

- Changed the width from 32% to 23.5%
- This allows four cards to fit in a row (4 * 23.5% = 94%, plus 2% gaps between them)

### 2. Updated Shimmer UI

```css
.shimmer-card {
    width: 23.5%;
    height: 380px;
    /* other properties remain the same */
}
```

- Changed the width from 32% to 23.5% to match the actual cards
- This ensures consistency between the loading state and the loaded content

## Before and After Comparison

### Before:
- Three restaurant cards per row
- Each card taking up 32% of the container width
- More vertical scrolling required to view all restaurants

### After:
- Four restaurant cards per row (matching Swiggy.com)
- Each card taking up 23.5% of the container width
- More efficient use of horizontal space
- Less vertical scrolling required to view all restaurants

## Technical Implementation Details

The implementation required careful consideration of the following factors:

1. **Responsive Design**: The new width (23.5%) was chosen to ensure that four cards would fit in a row while maintaining the 2% gap between them.

2. **Consistency**: Both the actual restaurant cards and the shimmer UI (loading state) were updated to maintain visual consistency.

3. **Visual Balance**: The new width ensures that the cards are not too narrow, maintaining readability and visual appeal.

## Conclusion

The implemented changes successfully modified the layout to display four restaurant cards per row, matching the design of the original Swiggy.com website. This creates a more consistent user experience and makes more efficient use of the available screen space.

The solution maintains the responsive nature of the application while providing a layout that is visually identical to the reference design.