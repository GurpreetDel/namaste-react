import React, { useState, useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector} from "react-redux";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();

    const { loggedInUser } = useContext(UserContext);

    console.log("loggedInUser", loggedInUser);

    const cartItems = useSelector( (store) => store.cart.items );
    console.log("cartItems", cartItems);

    useEffect(() => {
        console.log("Header component mounted/updated");
    }, []);

    return (
        <header className="bg-white shadow-md sticky top-0 z-50 border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">

                    {/* Logo and Location */}
                    <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                            <img
                                src="https://images.businessupturn.com/wp-content/uploads/2024/11/BU-2024-11-06T080206.367-1024x576.jpg"
                                alt="Food Delivery Logo"
                                className="h-10 w-auto lg:h-12 rounded-lg"
                            />
                        </div>
                        <div className="hidden md:block">
                            <div className="text-sm font-semibold text-textPrimary">Bellandur</div>
                            <div className="text-xs text-textSecondary max-w-xs text-ellipsis">
                                Green Glen Layout, Bellandur, Bengaluru
                            </div>
                        </div>
                    </div>

                    {/* Navigation Menu */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        <div className="flex items-center space-x-2 text-textSecondary hover:text-textPrimary cursor-pointer transition-colors">
                            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                                <path d="M17.5834 7.66665C17.5834 12.0849 14.0018 15.6666 9.58335 15.6666C5.16488 15.6666 1.58335 12.0849 1.58335 7.66665C1.58335 3.24835 5.16488 -0.333351 9.58335 -0.333351C14.0018 -0.333351 17.5834 3.24835 17.5834 7.66665ZM15.5834 7.66665C15.5834 4.35303 12.8971 1.66665 9.58335 1.66665C6.26969 1.66665 3.58335 4.35303 3.58335 7.66665C3.58335 10.9803 6.26969 13.6666 9.58335 13.6666C12.8971 13.6666 15.5834 10.9803 15.5834 7.66665Z"/>
                                <path d="M15.8333 15.8333L22.4166 22.4166" stroke="currentColor" strokeWidth="2"/>
                            </svg>
                            <span className="text-sm font-medium">Search</span>
                        </div>

                        <div className="flex items-center space-x-2 text-textSecondary hover:text-textPrimary cursor-pointer transition-colors">
                            <span className="text-sm font-medium">Offers</span>
                            <span className="bg-primary text-white text-xs px-1.5 py-0.5 rounded-full">NEW</span>
                        </div>

                        <Link to="/about" className="text-textSecondary hover:text-textPrimary text-sm font-medium transition-colors">
                            About
                        </Link>

                        <Link to="/contact" className="text-textSecondary hover:text-textPrimary text-sm font-medium transition-colors">
                            Contact
                        </Link>

                        <Link to="/grocery" className="text-textSecondary hover:text-textPrimary text-sm font-medium transition-colors">
                            Grocery
                        </Link>

                        {/* Display loggedInUser in desktop navigation */}
                        {loggedInUser && (
                            <div className="flex items-center space-x-2 text-textSecondary hover:text-textPrimary transition-colors">
                                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                                </svg>
                                <span className="text-sm font-medium">{loggedInUser}</span>
                            </div>
                        )}
                    </nav>

                    {/* Right side items */}
                    <div className="flex items-center space-x-4">
                        {/* Online Status Indicator */}
                        <div className="flex items-center space-x-2">
                            <span className="text-sm text-textSecondary">Status:</span>
                            <div className={`w-3 h-3 rounded-full ${onlineStatus ? 'bg-green-500' : 'bg-red-500'}`}></div>
                        </div>

                        {/* Home Link */}
                        <Link
                            to="/"
                            className="text-textSecondary hover:text-textPrimary text-sm font-medium transition-colors hidden sm:block"
                        >
                            Home
                        </Link>

                        {/* Login/Logout Button */}
                        <button
                            className="btn-primary text-sm"
                            onClick={() => {
                                setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
                            }}
                        >
                            {btnNameReact}
                        </button>

                        {/* Cart */}
                        <div className="flex items-center space-x-2 text-textSecondary hover:text-success cursor-pointer transition-colors">
                            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                                <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V19H17V6H7Z"/>
                                <circle cx="9" cy="12" r="1"/>
                                <circle cx="15" cy="12" r="1"/>
                            </svg>
                            <span className="text-sm font-medium">0</span>
                            <span className="text-sm font-medium hidden sm:inline">Cart ({cartItems.length} items ) </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className="lg:hidden border-t border-border">
                <div className="px-4 py-2 space-y-1">
                    <Link to="/about" className="block px-3 py-2 text-sm font-medium text-textSecondary hover:text-textPrimary transition-colors">
                        About
                    </Link>
                    <Link to="/contact" className="block px-3 py-2 text-sm font-medium text-textSecondary hover:text-textPrimary transition-colors">
                        Contact
                    </Link>
                    <Link to="/grocery" className="block px-3 py-2 text-sm font-medium text-textSecondary hover:text-textPrimary transition-colors">
                        Grocery
                    </Link>
                    {/* Display loggedInUser in mobile navigation */}
                    {loggedInUser && (
                        <div className="flex items-center px-3 py-2 text-sm font-medium text-textSecondary">
                            <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2" fill="currentColor">
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                            </svg>
                            <span>{loggedInUser}</span>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;