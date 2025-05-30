# Getting Started with Namaste React

This guide will help you set up and run the Namaste React application on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v14 or higher) - [Download Node.js](https://nodejs.org/)
- **npm** (v6 or higher, comes with Node.js)
- **Git** - [Download Git](https://git-scm.com/downloads)

## Installation

Follow these steps to set up the project:

1. **Clone the repository**

   ```bash
   git clone https://github.com/GurpreetDel/namaste-react.git
   cd namaste-react
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

   This will install all the required dependencies listed in the `package.json` file.

## Running the Application

1. **Start the development server**

   ```bash
   npm start
   ```

   This command runs the app in development mode using Parcel bundler.

2. **Open the application**

   Open your browser and navigate to:
   ```
   http://localhost:1234
   ```

   The page will automatically reload if you make changes to the code.

## Project Structure

Here's a brief overview of the important files and directories in the project:

```
namaste-react/
├── src/                  # Source code
│   ├── components/       # React components
│   │   ├── About.js      # About page component
│   │   ├── Body.js       # Main content component
│   │   ├── Contact.js    # Contact page component
│   │   ├── Error.js      # Error handling component
│   │   ├── Header.js     # Navigation header component
│   │   ├── RestaurantCard.js # Restaurant card component
│   │   ├── RestaurantMenu.js # Restaurant menu component
│   │   └── Shimmer.js    # Loading state component
│   └── utils/            # Utility functions and constants
│       ├── constants.js  # Application constants
│       └── mockData.js   # Mock data for development
├── app.js                # Example React code
├── index.css             # Global CSS styles
├── index.html            # HTML entry point
└── package.json          # Project dependencies and scripts
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode using Parcel bundler.
Open [http://localhost:1234](http://localhost:1234) to view it in the browser.

### `npm run build`

Builds the app for production to the `dist` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

## Development Workflow

1. **Make changes to the code**

   Edit files in the `src` directory to make changes to the application.

2. **See changes in real-time**

   The development server will automatically reload the page when you save changes.

3. **Build for production**

   When you're ready to deploy, run `npm run build` to create an optimized production build.

## Troubleshooting

### Common Issues

1. **Port already in use**

   If port 1234 is already in use, Parcel will try to use the next available port. Check your terminal output for the correct URL.

2. **Dependencies installation fails**

   Try removing the `node_modules` directory and the `package-lock.json` file, then run `npm install` again:

   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Parcel build errors**

   If you encounter errors with Parcel, try clearing the cache:

   ```bash
   rm -rf .parcel-cache
   npm start
   ```

## Next Steps

Now that you have the application running, you can:

1. Explore the code to understand how it works
2. Make changes to the components to see how they affect the UI
3. Add new features or modify existing ones
4. Check out the documentation in the `docs` directory for more detailed information

## Additional Resources

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Parcel Documentation](https://parceljs.org/docs/)
- [React Router Documentation](https://reactrouter.com/en/main)

## Support

If you encounter any issues or have questions, please open an issue on the GitHub repository.