import React from "react";

const ShimmerCard = () => (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md animate-pulse">
        {/* Image Placeholder */}
        <div className="w-full h-48 bg-gray-200"></div>

        {/* Content Placeholder */}
        <div className="p-4 space-y-3">
            {/* Title */}
            <div className="h-6 bg-gray-200 rounded-md w-3/4"></div>

            {/* Subtitle */}
            <div className="h-4 bg-gray-200 rounded-md w-full"></div>

            {/* Rating and Time Row */}
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <div className="h-6 w-16 bg-gray-200 rounded-md"></div>
                    <div className="h-4 w-20 bg-gray-200 rounded-md"></div>
                </div>
                <div className="h-4 w-24 bg-gray-200 rounded-md"></div>
            </div>

            {/* Bottom Row */}
            <div className="pt-2 border-t border-gray-100">
                <div className="flex items-center justify-between">
                    <div className="h-3 w-20 bg-gray-200 rounded-md"></div>
                    <div className="h-3 w-16 bg-gray-200 rounded-md"></div>
                </div>
            </div>
        </div>
    </div>
);

const Shimmer = () => {
    return (
        <div className="min-h-screen bg-background">
            {/* Header Shimmer */}
            <div className="bg-white shadow-sm border-b border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                        <div className="flex flex-1 max-w-md">
                            <div className="w-full h-12 bg-gray-200 rounded-lg animate-pulse"></div>
                        </div>
                        <div className="flex space-x-3">
                            <div className="h-10 w-32 bg-gray-200 rounded-lg animate-pulse"></div>
                            <div className="h-10 w-28 bg-gray-200 rounded-lg animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cards Grid Shimmer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {Array(12).fill("").map((_, index) => (
                        <ShimmerCard key={index} />
                    ))}
                </div>
            </div>

            {/* Loading Message */}
            <div className="text-center py-8">
                <div className="inline-flex items-center space-x-2 text-textSecondary">
                    <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span className="text-sm font-medium">Loading delicious restaurants...</span>
                </div>
            </div>
        </div>
    );
};

export default Shimmer;