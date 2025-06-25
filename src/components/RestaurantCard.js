import React from "react";
import { Link } from "react-router-dom";

const RestaurantCard = ({ resData }) => {
    const { info } = resData || {};

    const {
        id,
        cloudinaryImageId,
        name = "Restaurant Name",
        cuisines = [],
        avgRatingString = "4.0",
        sla = {},
        costForTwo = "₹300 for two",
        aggregatedDiscountInfoV3
    } = info || {};

    const imageUrl = cloudinaryImageId
        ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`
        : "https://via.placeholder.com/300x200/f0f0f0/666666?text=No+Image";

    const deliveryTime = sla?.slaString || "30-40 mins";
    const rating = parseFloat(avgRatingString) || 4.0;

    // Determine rating color based on value
    const getRatingColor = (rating) => {
        if (rating >= 4.0) return "bg-green-500";
        if (rating >= 3.5) return "bg-yellow-500";
        return "bg-red-500";
    };

    const discountText = aggregatedDiscountInfoV3
        ? `${aggregatedDiscountInfoV3.header} ${aggregatedDiscountInfoV3.subHeader || ''}`.trim()
        : "Special offers available";

    return (
        <Link
            to={{
                pathname: `/restaurants/${id}`,
                state: {
                    restaurantImage: imageUrl,
                    restaurantData: info
                }
            }}
            className="block"
        >
            <div className="bg-white rounded-2xl overflow-hidden card-shadow hover:shadow-xl transition-all duration-300 group">
                {/* Image Section */}
                <div className="relative overflow-hidden">
                    <img
                        src={imageUrl}
                        alt={name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                    />

                    {/* Discount Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <div className="text-white text-sm font-semibold flex items-center space-x-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                            </svg>
                            <span className="text-ellipsis">{discountText}</span>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-4 space-y-3">
                    {/* Restaurant Name */}
                    <h3 className="text-lg font-semibold text-textPrimary text-ellipsis leading-tight">
                        {name}
                    </h3>

                    {/* Cuisines */}
                    <p className="text-sm text-textSecondary text-ellipsis">
                        {cuisines.length > 0 ? cuisines.join(", ") : "Various Cuisines"}
                    </p>

                    {/* Rating, Time, and Cost Row */}
                    <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-3">
                            {/* Rating */}
                            <div className="flex items-center space-x-1">
                                <div className={`${getRatingColor(rating)} text-white px-2 py-1 rounded-md flex items-center space-x-1`}>
                                    <span className="font-semibold">{avgRatingString}</span>
                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2L15.09 8.26L22 9L17 14.74L18.18 22L12 18.27L5.82 22L7 14.74L2 9L8.91 8.26L12 2Z"/>
                                    </svg>
                                </div>
                            </div>

                            {/* Delivery Time */}
                            <div className="flex items-center space-x-1 text-textSecondary">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>{deliveryTime}</span>
                            </div>
                        </div>

                        {/* Cost for Two */}
                        <div className="text-textSecondary font-medium">
                            {costForTwo}
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="pt-2 border-t border-gray-100">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-1 text-xs text-textSecondary">
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                </svg>
                                <span>Fast Delivery</span>
                            </div>

                            <button className="text-primary hover:text-orange-600 text-xs font-medium transition-colors">
                                View Menu →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default RestaurantCard;