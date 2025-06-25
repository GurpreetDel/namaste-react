import React, { lazy, Suspense, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header';
import Body from "./components/Body";
import { Outlet, RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";

// Lazy load Grocery component for code splitting
const Grocery = lazy(() => import("./components/Grocery"));

// Loading Spinner Component for Suspense fallback
const LoadingSpinner = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="text-center">
                <div className="relative">
                    {/* Outer Ring */}
                    <div className="w-16 h-16 border-4 border-gray-200 rounded-full animate-spin border-t-primary mx-auto"></div>

                    {/* Inner Ring */}
                    <div className="absolute top-2 left-2 w-12 h-12 border-4 border-gray-100 rounded-full animate-spin border-t-orange-300"></div>
                </div>

                <div className="mt-6 space-y-2">
                    <h3 className="text-lg font-semibold text-textPrimary">Loading...</h3>
                    <p className="text-sm text-textSecondary">Please wait while we prepare your experience</p>
                </div>

                {/* Loading Dots */}
                <div className="flex justify-center space-x-1 mt-4">
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
            </div>
        </div>
    );
};

// Authentication Loading Component
const AuthLoadingSpinner = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="text-center">
                <div className="w-12 h-12 border-4 border-gray-200 rounded-full animate-spin border-t-primary mx-auto"></div>
                <p className="mt-4 text-sm text-textSecondary">Authenticating...</p>
            </div>
        </div>
    );
};

// Main App Layout Component with Authentication
const AppLayout = () => {
    const [userName, setUserName] = useState("");
    const [isAuthLoading, setIsAuthLoading] = useState(true);
    const [authError, setAuthError] = useState(null);

    // Authentication useEffect
    useEffect(() => {
        // Function to make authentication API call
        const authenticateUser = async () => {
            try {
                setIsAuthLoading(true);
                setAuthError(null);

                // Simulate API call - Replace this with your actual authentication API
                // Example API call using fetch:

                // Option 1: Using actual API call (uncomment and modify as needed)
                /*
                const response = await fetch('https://your-api-endpoint.com/auth', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: 'your-username',
                        password: 'your-password'
                    })
                });

                if (!response.ok) {
                    throw new Error('Authentication failed');
                }

                const data = await response.json();
                */

                // Option 2: Simulated API response for demo (remove this when using real API)
                await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate network delay

                const data = {
                    name: "Akshay Saini",
                    email: "akshay@example.com",
                    id: "12345"
                };

                // Set the authenticated user
                setUserName(data.name);

                console.log("User authenticated successfully:", data);

            } catch (error) {
                console.error("Authentication error:", error);
                setAuthError(error.message);
                // Set default user or handle error as needed
                setUserName("Guest User");
            } finally {
                setIsAuthLoading(false);
            }
        };

        // Call authentication function
        authenticateUser();
    }, []);

    // Show loading spinner while authenticating
    if (isAuthLoading) {
        return <AuthLoadingSpinner />;
    }

    // Show error message if authentication failed
    if (authError) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background">
                <div className="text-center">
                    <p className="text-red-500 mb-4">Authentication Error: {authError}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark"
                    >
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    return (
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
            <div className="min-h-screen bg-background">
                <Header />
                <main className="min-h-screen">
                    <Outlet />
                </main>
            </div>
        </UserContext.Provider>
    );
};

// Router Configuration with all routes
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/grocery",
                element: (
                    <Suspense fallback={<LoadingSpinner />}>
                        <Grocery />
                    </Suspense>
                )
            }
        ],
        errorElement: <Error />
    }
]);

// Initialize React App when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded, initializing React app with Tailwind CSS");

    // Get the existing root element or create one if it doesn't exist
    let rootElement = document.getElementById("root");

    if (!rootElement) {
        console.log("Root element not found, creating new one");
        // Create a container div for React to render into if it doesn't exist
        rootElement = document.createElement("div");
        rootElement.id = "root";
        rootElement.className = "min-h-screen";
        document.body.appendChild(rootElement);
    }

    // Create a root using React 18's createRoot API
    const root = createRoot(rootElement);

    // Render the Router with StrictMode for better development experience
    root.render(
        <React.StrictMode>
            <RouterProvider router={appRouter} />
        </React.StrictMode>
    );

    console.log("React app rendered successfully with Tailwind CSS styling");
});