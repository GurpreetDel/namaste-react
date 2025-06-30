import React from "react";
import {useDispatch} from "react-redux";
import {addItem} from "../utils/cartSlice";


const ItemList = ({ items }) => {
    console.log("Items in ItemList:", items);

    const dispatch = useDispatch();

    const handleAddItem = () => {
        //I want to Handle Add ITem Button From here
        // I want to dispatch an Action AddAnItem Action
        dispatch(addItem("pizza"));
        // over here we have payload object pizza an object will be created with payload and pizza
        // It will go inside my cart inside reducer function state.items.push(action.payload);
        // basically along with state,action we have in cartSlice.js and big reducer function
        // it will take and inject it inside big reducers with payload:"pizza" like this and
        // after that it will look for configuration of addITem and it will reach and subscribe?
        // Please explain how it will work

    }
    return (
        <div className="bg-white">
            {items.map((item, index) => {
                const itemInfo = item?.card?.info;
                if (!itemInfo) return null;

                const {
                    id,
                    name = "Item",
                    price = 0,
                    defaultPrice = 0,
                    description = "",
                    imageId,
                    isVeg = 1,
                    ratings = {}
                } = itemInfo;

                const itemPrice = price || defaultPrice;
                const formattedPrice = itemPrice ? `₹${(itemPrice / 100).toFixed(0)}` : "Price not available";
                const rating = ratings?.aggregatedRating?.rating;

                return (
                    <div key={id || index} className="flex justify-between items-start p-6 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors">
                        <div className="flex-1 pr-6">
                            {/* Veg/Non-veg indicator and rating */}
                            <div className="flex items-center space-x-3 mb-3">
                                <div className={`w-5 h-5 border-2 ${isVeg ? 'border-green-500' : 'border-red-500'} flex items-center justify-center`}>
                                    <div className={`w-2.5 h-2.5 rounded-full ${isVeg ? 'bg-green-500' : 'bg-red-500'}`}></div>
                                </div>
                                {rating && (
                                    <div className="flex items-center space-x-1">
                                        <span className="text-sm font-bold text-orange-500">★</span>
                                        <span className="text-sm font-semibold text-gray-700">{rating}</span>
                                    </div>
                                )}
                            </div>

                            {/* Item name */}
                            <h4 className="font-bold text-gray-900 mb-2 text-lg">{name}</h4>

                            {/* Price */}
                            <p className="text-gray-900 font-bold mb-3 text-base">₹{formattedPrice}</p>

                            {/* Description */}
                            {description && (
                                <p className="text-sm text-gray-500 mb-4 line-clamp-2 leading-relaxed">{description}</p>
                            )}
                        </div>

                        {/* Item image and ADD button */}
                        <div className="flex-shrink-0 relative">
                            {imageId ? (
                                <div className="relative">
                                    <img
                                        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${imageId}`}
                                        alt={name}
                                        className="w-32 h-32 object-cover rounded-xl shadow-md"
                                    />
                                    <button className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white border border-gray-300 text-green-600 px-6 py-1.5 rounded-lg text-sm font-bold hover:shadow-lg hover:border-green-600 transition-all duration-200 uppercase tracking-wide shadow-md">
                                        ADD
                                    </button>
                                </div>
                            ) : (
                                <div className="w-32 h-32 bg-gray-100 rounded-xl flex items-center justify-center relative shadow-md">
                                    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <button className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white border border-gray-300 text-green-600 px-6 py-1.5 rounded-lg text-sm font-bold hover:shadow-lg hover:border-green-600 transition-all duration-200 uppercase tracking-wide shadow-md"
                                    onClick={handleAddItem}>
                                        ADD
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ItemList;