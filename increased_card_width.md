# Increased Restaurant Card Width

## Problem Description

The restaurant cards in the application needed to have their width increased while maintaining the four-cards-per-row layout. This enhancement was requested to improve the visibility and user experience of the restaurant cards.

## Root Cause Analysis

After examining the codebase, we identified the following constraints:

1. **Card Width Configuration**: 
   - The `.res-container a` class had a width of 23.5%, which allowed four cards to fit in a row with a 2% gap between them.
   - The `.shimmer-card` class also had a width of 23.5%, maintaining consistency with the actual cards during loading.

2. **Layout Structure**:
   - The `.res-container` class used a 2% gap between cards, which limited the maximum width of each card while maintaining four per row.

## Solution

We implemented the following changes to increase the width of the restaurant cards while maintaining four cards per row:

### 1. Reduced Gap Between Cards

```css
.res-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1%;
    /* other properties remain the same */
}
```

- Changed the gap from 2% to 1%
- This freed up 3% of horizontal space (1% saved from each of the 3 gaps between the 4 cards)

### 2. Increased Card Width

```css
.res-container a {
    width: 24%;
    text-decoration: none;
    color: inherit;
    display: block;
}
```

- Changed the width from 23.5% to 24%
- This increased each card's width by 0.5%, utilizing the space freed up by reducing the gaps

### 3. Updated Shimmer UI

```css
.shimmer-card {
    width: 24%;
    height: 380px;
    /* other properties remain the same */
}

.shimmer-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1%;
    /* other properties updated to match res-container */
    row-gap: 30px;
}
```

- Changed the shimmer card width from 23.5% to 24% to match the actual cards
- Updated the shimmer container gap from 0.3% to 1% to match the restaurant container
- Updated the row-gap from 20px to 30px for consistency
- This ensures consistency between the loading state and the loaded content

## Before and After Comparison

### Before:
- Four restaurant cards per row, each with a width of 23.5%
- 2% gap between cards
- Total horizontal space usage: 94% for cards (4 × 23.5%) + 6% for gaps (3 × 2%)

### After:
- Four restaurant cards per row, each with a width of 24%
- 1% gap between cards
- Total horizontal space usage: 96% for cards (4 × 24%) + 3% for gaps (3 × 1%)
- Each card is 0.5% wider, which translates to approximately 6px wider on a 1200px container

## Technical Implementation Details

The implementation required careful consideration of the following factors:

1. **Responsive Design**: The new width (24%) was chosen to ensure that four cards would fit in a row while maintaining the 1% gap between them.

2. **Consistency**: Both the actual restaurant cards and the shimmer UI (loading state) were updated to maintain visual consistency.

3. **Visual Balance**: The reduced gap (1% instead of 2%) still provides sufficient separation between cards while allowing for wider cards.

## Conclusion

The implemented changes successfully increased the width of the restaurant cards while maintaining the four-cards-per-row layout. This enhancement improves the visibility of the restaurant cards and provides a better user experience.

The solution maintains the responsive nature of the application while providing a more visually appealing presentation of restaurant information.