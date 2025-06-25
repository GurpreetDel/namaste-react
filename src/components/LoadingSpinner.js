import React from "react";

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

export default LoadingSpinner;