import React, { useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const location = useLocation();
    const resInfo = useRestaurantMenu(resId);

    // Get restaurant image from location state or use fallback
    const restaurantImage = location.state?.restaurantImage;
    const [showIndex, setShowIndex] = useState(null);

    if (resInfo === null) return <Shimmer />;

    // Extract restaurant information
    const restaurantInfo =
        resInfo?.data?.cards[0]?.card?.card?.info ||
        resInfo?.data?.cards[2]?.card?.card?.info ||
        {};

    const restaurantName =
        resInfo?.cards?.[0]?.card?.card?.text ||
        restaurantInfo?.name ||
        "Restaurant Name Not Available";

    const {
        name = restaurantName,
        cuisines = [],
        costForTwoMessage,
        avgRating,
        areaName,
        sla,
        cloudinaryImageId
    } = restaurantInfo;

    // Get final restaurant image URL
    const finalRestaurantImage = restaurantImage ||
        (cloudinaryImageId ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}` : null);

    // Extract menu items
    const menuItemsPath1 = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const menuItemsPath2 = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const menuItemsPath3 = resInfo?.cards?.find(card =>
        card?.groupedCard?.cardGroupMap?.REGULAR?.cards
    )?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    const menuCards = menuItemsPath3 || menuItemsPath1 || menuItemsPath2 || [];

    // Filter for all accordion-worthy categories
    const categories = menuCards.filter(card => {
        const cardType = card?.card?.card?.["@type"];
        return (
            cardType === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
            cardType === "type.googleapis.com/swiggy.presentation.food.v2.MenuCarousel" ||
            cardType === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
        );
    });

    console.log("All Categories for Accordion", categories);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Restaurant Header */}
            <div className="bg-white">
                <div className="max-w-6xl mx-auto px-6 py-8">
                    {/* Back Button */}
                    <div className="mb-6">
                        <Link
                            to="/"
                            className="inline-flex items-center text-gray-500 hover:text-gray-700 transition-colors text-sm font-medium"
                        >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to Restaurants
                        </Link>
                    </div>

                    {/* Restaurant Info Card */}
                    <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-3xl p-8 shadow-sm border border-orange-200">
                        <div className="flex justify-between items-start">
                            <div className="flex-1">
                                {/* Restaurant Name */}
                                <h1 className="text-3xl font-bold text-gray-900 mb-3">{name}</h1>

                                {/* Cuisines */}
                                <p className="text-gray-600 text-lg mb-2 font-medium">
                                    {cuisines.join(", ")}
                                </p>

                                {/* Location */}
                                <p className="text-gray-500 text-base mb-4 flex items-center">
                                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                    {areaName}
                                </p>

                                {/* Rating, Time, and Cost Row */}
                                <div className="flex items-center space-x-6">
                                    {/* Rating */}
                                    {avgRating && (
                                        <div className="flex items-center">
                                            <div className="bg-green-600 text-white px-2 py-1 rounded-md flex items-center space-x-1">
                                                <span className="font-bold text-sm">★</span>
                                                <span className="font-bold text-sm">{avgRating}</span>
                                            </div>
                                        </div>
                                    )}

                                    {/* Delivery Time */}
                                    {sla?.slaString && (
                                        <div className="flex items-center text-gray-700">
                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="font-semibold text-sm uppercase tracking-wide">
                                                {sla.slaString}
                                            </span>
                                        </div>
                                    )}

                                    {/* Cost for Two */}
                                    {costForTwoMessage && (
                                        <div className="text-gray-700 font-semibold text-sm">
                                            {costForTwoMessage}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Restaurant Logo/Image */}
                            <div className="ml-8">
                                {finalRestaurantImage ? (
                                    <div className="w-24 h-24 rounded-2xl shadow-lg overflow-hidden border-4 border-white">
                                        <img
                                            src={finalRestaurantImage}
                                            alt={name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ) : (
                                    <div className="w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center border-4 border-orange-200">
                                        <span className="text-3xl font-bold text-orange-500">
                                            {name.charAt(0)}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Menu Section */}
            <div className="max-w-6xl mx-auto px-6 py-8">
                {/* Menu Header */}
                <div className="bg-orange-500 text-white px-6 py-4 rounded-t-2xl">
                    <div className="flex items-center">
                        <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <h2 className="text-xl font-bold">Menu</h2>
                    </div>
                </div>

                {/* Menu Content */}
                <div className="bg-white rounded-b-2xl shadow-lg border-x border-b border-gray-200">
                    {categories.length === 0 ? (
                        <div className="text-center py-12">
                            <div className="text-gray-500">
                                <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                                <p className="text-lg font-medium">Menu items not available at the moment.</p>
                            </div>
                        </div>
                    ) : (
                        <div className="p-2">
                            {categories.map((category, index) => (
                                <RestaurantCategory
                                    key={index}
                                    data={category?.card?.card}
                                    showItems={index === showIndex}
                                    setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RestaurantMenu;