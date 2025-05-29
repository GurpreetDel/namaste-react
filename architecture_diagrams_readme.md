# Namaste React Architecture Diagrams

This repository contains architecture diagrams for the Namaste React application, a food delivery application similar to Swiggy.

## Overview

The diagrams in this repository provide a visual representation of the application's architecture, including component hierarchy, data flow, routing, and state management. These diagrams are designed to help developers understand the structure and behavior of the application.

## Diagrams

### 1. Component Hierarchy Diagram

**File:** `component_hierarchy.svg`

This diagram shows the hierarchical structure of components in the application. It illustrates how components are nested within each other and their parent-child relationships.

Key components include:
- App (root component)
- AppLayout (main layout component)
- Header (navigation header)
- Body (main content area with restaurant listings)
- RestaurantMenu (restaurant details and menu)
- RestaurantCard (individual restaurant card)
- Shimmer (loading state component)

### 2. Data Flow Diagram

**File:** `data_flow.svg`

This diagram illustrates how data flows through the application, including:
- User interactions
- API calls to the Swiggy API
- Data processing
- State updates
- Component rendering

It shows the complete lifecycle of data from user interaction to UI rendering.

### 3. Routing Diagram

**File:** `routing_diagram.svg`

This diagram shows the routing structure of the application, including:
- Available routes
- Components rendered for each route
- Navigation flow between routes
- Error handling

Routes include:
- `/` - Main page with restaurant listings
- `/about` - About page
- `/contact` - Contact page
- `/restaurants/:resId` - Restaurant menu page with dynamic parameter

### 4. State Management Diagram

**File:** `state_management.svg`

This diagram illustrates how state is managed within the application, including:
- State variables in each component
- How state is updated
- How state changes affect the UI
- Relationships between different state variables

Key state variables include:
- `listOfRestaurants` - Original list of restaurants from API
- `filteredRestaurants` - Filtered list based on search or rating
- `searchText` - Current search text
- `resInfo` - Restaurant information and menu items

## Mermaid Diagrams

In addition to the SVG files, we also provide Mermaid syntax diagrams in the `architecture_diagrams.md` file. These can be rendered by GitHub and other Markdown viewers that support Mermaid.

## How to Use These Diagrams

### For New Developers

1. Start with the Component Hierarchy Diagram to understand the overall structure
2. Review the Routing Diagram to understand navigation flow
3. Study the Data Flow Diagram to understand how data moves through the application
4. Examine the State Management Diagram to understand how state is managed

### For Existing Developers

1. Use these diagrams as a reference when making changes to the application
2. Ensure that new components or features follow the existing architecture patterns
3. Update the diagrams when making significant architectural changes

## Viewing the Diagrams

The SVG diagrams can be viewed in any web browser or SVG viewer. The Mermaid diagrams in `architecture_diagrams.md` can be viewed on GitHub or any Markdown viewer that supports Mermaid syntax.

## Contributing

When making significant changes to the application architecture, please update these diagrams to reflect the changes. This will help maintain accurate documentation for future developers.