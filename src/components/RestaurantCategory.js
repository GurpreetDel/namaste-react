import React from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
    console.log("Category data:", data);

    // Extract items from different category types
    const getItemsFromCategory = () => {
        let items = [];

        if (data?.itemCards) {
            // Regular ItemCategory
            items = data.itemCards;
        } else if (data?.carousel) {
            // MenuCarousel
            items = data.carousel;
        } else if (data?.categories) {
            // NestedItemCategory
            items = data.categories.flatMap(subCat => subCat?.itemCards || []);
        }

        return items;
    };

    const items = getItemsFromCategory();
    const categoryTitle = data?.title || data?.header?.title || "Menu Category";

    const handleClick = () => {
        setShowIndex();
    };

    return (
        <div className="border-b border-gray-100 last:border-b-0">
            {/* Accordion Header */}
            <div
                className="w-full px-6 py-5 cursor-pointer flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={handleClick}
            >
                <div className="flex items-center space-x-3">
                    <span className="text-lg font-bold text-gray-900">
                        {categoryTitle}
                    </span>
                    {items.length > 0 && (
                        <span className="text-gray-500 text-sm">
                            ({items.length})
                        </span>
                    )}
                </div>

                <div className="flex items-center space-x-2">
                    <svg
                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                            showItems ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </div>
            </div>

            {/* Accordion Body for Restaurant Category */}
            {showItems && (
                <div className="bg-white">
                    {items.length === 0 ? (
                        <div className="p-8 text-center text-gray-500">
                            <div className="text-gray-400 mb-2">
                                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                            </div>
                            <p>No items available in this category</p>
                        </div>
                    ) : (
                        <ItemList items={items} />
                    )}
                </div>
            )}
        </div>
    );
};

export default RestaurantCategory;