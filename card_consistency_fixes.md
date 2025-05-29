# Restaurant Card Consistency Fixes

## Problem Description

Despite previous improvements to the restaurant cards, there were still inconsistencies in how they were displayed:

1. **Cuisine Display Issues**: Some cards were not able to show cuisines properly, and some had longer cuisine lists that took up more space, causing layout inconsistencies.
2. **Horizontal Line Positioning**: The horizontal line separating the restaurant information from the metadata was displayed differently across cards.
3. **Hidden Information**: Offer information, delivery ETA time, and cost for two were getting hidden on some cards.

These inconsistencies created a disjointed user experience that did not match the uniform appearance of the original Swiggy.com website.

## Root Cause Analysis

After examining the codebase, we identified the following issues:

1. **Variable Cuisine Length**:
   - Different restaurants had varying numbers of cuisines (from 1 to 5+)
   - When joined with commas, this created text of varying lengths
   - The text was set to wrap (`whiteSpace: "normal"`), causing it to take up different amounts of vertical space

2. **Insufficient Height Constraints**:
   - The metadata section had a fixed height (48px), but this wasn't enough to accommodate all content consistently
   - Individual elements within the metadata section didn't have fixed heights

3. **Text Overflow Handling**:
   - Long text wasn't consistently truncated with ellipsis
   - Some elements didn't have proper overflow handling

4. **Offer Information Inconsistency**:
   - The offer information was displayed based on hardcoded values rather than actual data from the API
   - There was no guarantee that the offer section would be visible if other elements took up too much space

## Solution

We implemented the following changes to ensure consistent display across all restaurant cards:

### 1. Fixed Cuisine Display

```jsx
<h4 style={{
    fontSize: "14px",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",  // Changed from "normal" to "nowrap"
    overflow: "hidden",
    margin: "0 12px 4px 12px",
    color: "#686b78",
    fontWeight: "400",
    height: "20px",        // Changed from "minHeight" to fixed "height"
    lineHeight: "20px"
}}>{resData && resData.info && resData.info.cuisines ? resData.info.cuisines.join(", ") : props.cuisine || "Various Cuisines"}</h4>
```

- Changed `whiteSpace` from "normal" to "nowrap" to prevent wrapping
- Changed `minHeight` to a fixed `height` of 20px to ensure consistent height
- This ensures that all cuisine text is displayed on a single line with ellipsis if it's too long

### 2. Improved Metadata Section

```jsx
<div style={{
    borderTop: "1px solid #e9e9eb",
    paddingTop: "8px",
    margin: "8px 12px 0 12px",
    height: "60px"  // Increased from 48px to 60px
}}>
```

- Increased the fixed height from 48px to 60px to accommodate all content
- This ensures that the metadata section has enough space for all elements

### 3. Fixed Rating and Delivery Info

```jsx
<div style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "6px",
    height: "20px"  // Added fixed height
}}>
```

- Added a fixed height of 20px for the rating and delivery info section
- Added text truncation properties to ensure consistent display:
  ```jsx
  <h4 style={{
      fontSize: "12px",
      margin: "0",
      color: "#686b78",
      fontWeight: "400",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
  }}>
  ```

### 4. Improved Offer Information Display

```jsx
<div style={{
    color: "#8a584b",
    fontSize: "11px",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    height: "20px",  // Added fixed height
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis"
}}>
    <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/v1634558776/swiggy_one/OneIcon_3x.png"
        alt="Swiggy One"
        style={{ width: "18px", height: "18px", marginRight: "4px", flexShrink: 0 }}
    />
    <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
        {resData && resData.info && resData.info.aggregatedDiscountInfoV3 
            ? `${resData.info.aggregatedDiscountInfoV3.header} ${resData.info.aggregatedDiscountInfoV3.subHeader}`
            : "50% off up to ₹100"}
    </span>
</div>
```

- Added a fixed height of 20px for the offer info section
- Added proper handling of the aggregatedDiscountInfoV3 data from the API
- Ensured the offer text is truncated with ellipsis if too long
- Added `flexShrink: 0` to the offer icon to prevent it from shrinking

## Before and After Comparison

### Before:
- Cuisine text could wrap to multiple lines, taking up variable space
- Horizontal lines appeared at different positions in different cards
- Offer information, delivery ETA, and cost for two were sometimes hidden
- Cards had inconsistent heights and layouts

### After:
- All cuisine text is displayed on a single line with ellipsis if too long
- Horizontal lines appear at the same position across all cards
- Offer information, delivery ETA, and cost for two are always visible
- All cards have a uniform appearance, matching the Swiggy.com website

## Technical Implementation Details

The implementation required careful consideration of the following factors:

1. **Fixed Heights**: Fixed heights were added to all sections to ensure consistent layout:
   - Cuisine section: 20px
   - Rating and delivery info section: 20px
   - Offer info section: 20px
   - Overall metadata section: 60px

2. **Text Truncation**: All text elements now have consistent truncation with ellipsis:
   - `whiteSpace: "nowrap"`
   - `overflow: "hidden"`
   - `textOverflow: "ellipsis"`

3. **Dynamic Content Handling**: The offer information now properly uses data from the API when available, with a fallback for when it's not.

## Conclusion

The implemented changes successfully address the inconsistencies in the restaurant cards. All cards now display cuisines, horizontal lines, offer information, delivery ETA, and cost for two in a consistent manner, creating a uniform appearance that matches the original Swiggy.com website.

This enhancement improves the overall user experience by providing a consistent and professional look to the restaurant listing page, ensuring that all important information is visible and properly formatted.