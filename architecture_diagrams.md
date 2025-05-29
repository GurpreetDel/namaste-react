# Namaste React Application Architecture Diagrams

This document contains architecture diagrams for the Namaste React application, a food delivery application similar to Swiggy.

## Table of Contents
1. [Component Hierarchy Diagram](#component-hierarchy-diagram)
2. [Data Flow Diagram](#data-flow-diagram)
3. [Routing Diagram](#routing-diagram)
4. [State Management Diagram](#state-management-diagram)

## Component Hierarchy Diagram

```mermaid
graph TD
    A[App] --> B[AppLayout]
    B --> C[Header]
    B --> D[Outlet]
    D --> E[Body]
    D --> F[About]
    D --> G[Contact]
    D --> H[RestaurantMenu]
    E --> I[RestaurantCard]
    E --> J[Shimmer]
    H --> K[Shimmer]
    
    style A fill:#f9f,stroke:#333,stroke-width:2px
    style B fill:#bbf,stroke:#333,stroke-width:2px
    style C fill:#dfd,stroke:#333,stroke-width:2px
    style D fill:#dfd,stroke:#333,stroke-width:2px
    style E fill:#dfd,stroke:#333,stroke-width:2px
    style F fill:#dfd,stroke:#333,stroke-width:2px
    style G fill:#dfd,stroke:#333,stroke-width:2px
    style H fill:#dfd,stroke:#333,stroke-width:2px
    style I fill:#ffd,stroke:#333,stroke-width:2px
    style J fill:#ffd,stroke:#333,stroke-width:2px
    style K fill:#ffd,stroke:#333,stroke-width:2px
```

### Component Hierarchy Explanation

The diagram above illustrates the component hierarchy of the Namaste React application:

1. **App**: The root component that initializes the application
2. **AppLayout**: The main layout component that contains the Header and an Outlet for child routes
3. **Header**: The navigation header component that appears on all pages
4. **Outlet**: A placeholder for rendering child routes based on the current URL
5. **Body**: The main page component that displays a list of restaurants
6. **About**: A static page with information about the application
7. **Contact**: A static page with contact information
8. **RestaurantMenu**: A dynamic page that displays the menu for a selected restaurant
9. **RestaurantCard**: A reusable component that displays information about a restaurant
10. **Shimmer**: A loading state component used by both Body and RestaurantMenu

## Data Flow Diagram

```mermaid
graph TD
    A[User] -->|Interacts with| B[UI Components]
    B -->|Triggers| C[API Calls]
    C -->|Fetches Data from| D[Swiggy API]
    D -->|Returns Data to| C
    C -->|Updates| E[Component State]
    E -->|Renders| B
    
    F[Body Component] -->|Fetches| G[Restaurant List API]
    G -->|Returns| F
    
    H[RestaurantMenu Component] -->|Fetches| I[Restaurant Menu API]
    I -->|Returns| H
    
    J[Search Input] -->|Updates| K[Search Text State]
    K -->|Filters| L[Restaurant List]
    
    M[Filter Button] -->|Triggers| N[Filter Function]
    N -->|Filters| L
    
    style A fill:#f9f,stroke:#333,stroke-width:2px
    style B fill:#bbf,stroke:#333,stroke-width:2px
    style C fill:#dfd,stroke:#333,stroke-width:2px
    style D fill:#dfd,stroke:#333,stroke-width:2px
    style E fill:#ffd,stroke:#333,stroke-width:2px
    style F fill:#bbf,stroke:#333,stroke-width:2px
    style G fill:#dfd,stroke:#333,stroke-width:2px
    style H fill:#bbf,stroke:#333,stroke-width:2px
    style I fill:#dfd,stroke:#333,stroke-width:2px
    style J fill:#bbf,stroke:#333,stroke-width:2px
    style K fill:#ffd,stroke:#333,stroke-width:2px
    style L fill:#ffd,stroke:#333,stroke-width:2px
    style M fill:#bbf,stroke:#333,stroke-width:2px
    style N fill:#dfd,stroke:#333,stroke-width:2px
```

### Data Flow Explanation

The diagram above illustrates the data flow within the Namaste React application:

1. **User Interaction**: The user interacts with UI components
2. **API Calls**: These interactions may trigger API calls to the Swiggy API
3. **Data Fetching**: The application fetches data from the Swiggy API
4. **State Updates**: The fetched data is used to update component state
5. **Rendering**: The updated state triggers re-rendering of UI components

Specific data flows include:
- The Body component fetches the restaurant list from the Swiggy API
- The RestaurantMenu component fetches menu data for a specific restaurant
- The search input updates the search text state, which filters the restaurant list
- The filter button triggers a filter function that filters the restaurant list based on ratings

## Routing Diagram

```mermaid
graph LR
    A["/"] -->|Main Page| B[Body Component]
    C["/about"] -->|About Page| D[About Component]
    E["/contact"] -->|Contact Page| F[Contact Component]
    G["/restaurants/:resId"] -->|Restaurant Menu Page| H[RestaurantMenu Component]
    I[Any Other Path] -->|Error Page| J[Error Component]
    
    K[User] -->|Navigates to| A
    K -->|Navigates to| C
    K -->|Navigates to| E
    K -->|Clicks Restaurant Card| G
    K -->|Invalid URL| I
    
    style A fill:#f9f,stroke:#333,stroke-width:2px
    style B fill:#bbf,stroke:#333,stroke-width:2px
    style C fill:#f9f,stroke:#333,stroke-width:2px
    style D fill:#bbf,stroke:#333,stroke-width:2px
    style E fill:#f9f,stroke:#333,stroke-width:2px
    style F fill:#bbf,stroke:#333,stroke-width:2px
    style G fill:#f9f,stroke:#333,stroke-width:2px
    style H fill:#bbf,stroke:#333,stroke-width:2px
    style I fill:#f9f,stroke:#333,stroke-width:2px
    style J fill:#bbf,stroke:#333,stroke-width:2px
    style K fill:#dfd,stroke:#333,stroke-width:2px
```

### Routing Explanation

The diagram above illustrates the routing structure of the Namaste React application:

1. **Main Route ("/")**:
   - Renders the Body component
   - Displays a list of restaurants

2. **About Route ("/about")**:
   - Renders the About component
   - Displays information about the application

3. **Contact Route ("/contact")**:
   - Renders the Contact component
   - Displays contact information

4. **Restaurant Menu Route ("/restaurants/:resId")**:
   - Renders the RestaurantMenu component
   - Uses the resId parameter to fetch and display the menu for a specific restaurant

5. **Error Route**:
   - Renders the Error component for any invalid routes
   - Provides a user-friendly error message

## State Management Diagram

```mermaid
graph TD
    A[Body Component] -->|useState| B[listOfRestaurants]
    A -->|useState| C[filteredRestaurants]
    A -->|useState| D[searchText]
    
    E[RestaurantMenu Component] -->|useState| F[resInfo]
    
    G[User Search] -->|Updates| D
    D -->|Filters| C
    
    H[User Filter] -->|Updates| C
    
    I[API Response] -->|Updates| B
    B -->|Initial Value| C
    
    J[Restaurant API Response] -->|Updates| F
    
    style A fill:#bbf,stroke:#333,stroke-width:2px
    style B fill:#ffd,stroke:#333,stroke-width:2px
    style C fill:#ffd,stroke:#333,stroke-width:2px
    style D fill:#ffd,stroke:#333,stroke-width:2px
    style E fill:#bbf,stroke:#333,stroke-width:2px
    style F fill:#ffd,stroke:#333,stroke-width:2px
    style G fill:#dfd,stroke:#333,stroke-width:2px
    style H fill:#dfd,stroke:#333,stroke-width:2px
    style I fill:#dfd,stroke:#333,stroke-width:2px
    style J fill:#dfd,stroke:#333,stroke-width:2px
```

### State Management Explanation

The diagram above illustrates the state management within the Namaste React application:

1. **Body Component State**:
   - `listOfRestaurants`: Stores the original list of restaurants fetched from the API
   - `filteredRestaurants`: Stores the filtered list of restaurants based on search or rating filters
   - `searchText`: Stores the current search text entered by the user

2. **RestaurantMenu Component State**:
   - `resInfo`: Stores the restaurant information and menu items fetched from the API

3. **State Updates**:
   - User search updates the searchText state, which filters the restaurant list
   - User filter (e.g., top-rated restaurants) updates the filteredRestaurants state
   - API responses update the listOfRestaurants and resInfo states
   - The listOfRestaurants state provides the initial value for the filteredRestaurants state