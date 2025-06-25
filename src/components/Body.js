import React, { useEffect, useState, useContext } from "react";
import RestaurantCard  from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link, useNavigate } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import withPromotedLabel from "./withPromotedLabel";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [locationText, setLocationText] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    // Get username and setter from UserContext
    const { loggedInUser, setUserName } = useContext(UserContext);
    const [userNameInput, setUserNameInput] = useState(loggedInUser || "");

    const navigate = useNavigate();
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    const onlineStatus = useOnlineStatus();

    console.log("Body component mounted/updated");
    console.log("List of Restaurants",listOfRestaurants);
    console.log("Current logged in user:", loggedInUser);

    // Update local input state when context changes
    useEffect(() => {
        setUserNameInput(loggedInUser || "");
    }, [loggedInUser]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            setIsLoading(true);
            const data = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9269824&lng=77.6693608&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
            const jsonData = await data.json();

            const restaurants = jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
            setListOfRestaurants(restaurants);
            setFilteredRestaurants(restaurants);
        } catch (error) {
            console.error("Error fetching data:", error);
            // Fallback to mock data if API fails
            const mockData = [
                {
                    "info": {
                        "id": "23680",
                        "name": "McDonald's",
                        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/20/abde17ea-aad5-48f6-987f-c1320ccfd0be_23680.jpg",
                        "locality": "Murgesh Pallya",
                        "areaName": "KempFort Total Mall",
                        "costForTwo": "₹400 for two",
                        "cuisines": ["Burgers", "Beverages", "Cafe", "Desserts"],
                        "avgRating": 4.5,
                        "avgRatingString": "4.5",
                        "sla": { "slaString": "30-35 mins" }
                    }
                }
            ];
            setListOfRestaurants(mockData);
            setFilteredRestaurants(mockData);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSearch = () => {
        const filteredRestaurant = listOfRestaurants.filter(res =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredRestaurants(filteredRestaurant);
    };

    const handleLocationFilter = () => {
        const filteredByLocation = listOfRestaurants.filter(res =>
            res.info.areaName.toLowerCase().includes(locationText.toLowerCase()) ||
            res.info.locality.toLowerCase().includes(locationText.toLowerCase())
        );
        setFilteredRestaurants(filteredByLocation);
    };

    const handleTopRatedFilter = () => {
        const filteredList = listOfRestaurants.filter(
            restaurant => restaurant.info.avgRating > 4.5
        );
        setFilteredRestaurants(filteredList);
    };

    const handleClearFilters = () => {
        setFilteredRestaurants(listOfRestaurants);
        setSearchText("");
        setLocationText("");
    };

    // Handle username change
    const handleUserNameChange = (e) => {
        const newUserName = e.target.value;
        setUserNameInput(newUserName);
        setUserName(newUserName); // Update the context immediately
    };

    // Function to handle restaurant card click with image data
    const handleRestaurantClick = (restaurant) => {
        const imageUrl = restaurant.info.cloudinaryImageId
            ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant.info.cloudinaryImageId}`
            : "https://via.placeholder.com/300x200/f0f0f0/666666?text=No+Image";

        navigate(`/restaurants/${restaurant.info.id}`, {
            state: {
                restaurantImage: imageUrl,
                restaurantData: restaurant.info
            }
        });
    };

    if (!onlineStatus) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background">
                <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-md mx-4">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h2 className="text-xl font-semibold text-textPrimary mb-2">You're Offline</h2>
                    <p className="text-textSecondary">Please check your internet connection and try again.</p>
                </div>
            </div>
        );
    }

    if (isLoading) {
        return <Shimmer />;
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Filters Section */}
            <div className="bg-white shadow-sm border-b border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    {/* Username Input Section */}
                    <div className="mb-6 pb-4 border-b border-gray-200">
                        <div className="flex items-center space-x-4 max-w-md">
                            <label className="text-sm font-medium text-textPrimary whitespace-nowrap">
                                UserName:
                            </label>
                            <div className="relative flex-1">
                                <input
                                    type="text"
                                    placeholder="Enter your username..."
                                    value={userNameInput}
                                    onChange={handleUserNameChange}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors text-sm"
                                />
                                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                        <p className="text-xs text-textSecondary mt-2 ml-20">
                            Current user: <span className="font-medium text-textPrimary">{loggedInUser}</span>
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0 lg:space-x-4">

                        {/* Search Bar */}
                        <div className="flex flex-1 max-w-md">
                            <div className="relative flex-1">
                                <input
                                    type="text"
                                    placeholder="Search for restaurants..."
                                    value={searchText}
                                    onChange={(e) => setSearchText(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors"
                                />
                                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <button
                                onClick={handleSearch}
                                className="px-6 py-3 bg-primary text-white rounded-r-lg hover:bg-orange-600 focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
                            >
                                Search
                            </button>
                        </div>

                        {/* Location Filter Input */}
                        <div className="flex flex-1 max-w-md">
                            <div className="relative flex-1">
                                <input
                                    type="text"
                                    placeholder="Filter by location..."
                                    value={locationText}
                                    onChange={(e) => setLocationText(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleLocationFilter()}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-colors"
                                />
                                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <button
                                onClick={handleLocationFilter}
                                className="px-6 py-3 bg-primary text-white rounded-r-lg hover:bg-orange-600 focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
                            >
                                Filter
                            </button>
                        </div>

                        {/* Filter Buttons */}
                        <div className="flex flex-wrap gap-3">
                            <button
                                onClick={handleTopRatedFilter}
                                className="btn-secondary flex items-center space-x-2"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <span>Top Rated</span>
                            </button>

                            <button
                                onClick={handleClearFilters}
                                className="btn-secondary flex items-center space-x-2"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                <span>Clear Filters</span>
                            </button>
                        </div>
                    </div>

                    {/* Results Info */}
                    <div className="mt-4 text-sm text-textSecondary">
                        Showing {filteredRestaurants.length} of {listOfRestaurants.length} restaurants
                        {searchText && <span> • Search: "{searchText}"</span>}
                        {locationText && <span> • Location: "{locationText}"</span>}
                    </div>
                </div>
            </div>

            {/* Restaurants Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {filteredRestaurants.length === 0 ? (
                    <div className="text-center py-12">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-medium text-textPrimary mb-2">No restaurants found</h3>
                        <p className="text-textSecondary">Try adjusting your search or filters to find what you're looking for.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredRestaurants.map((restaurant) => (
                            <div
                                key={restaurant.info.id}
                                onClick={() => handleRestaurantClick(restaurant)}
                                className="transform hover:scale-105 transition-transform duration-200 cursor-pointer"
                            >
                                {/** if the restaurant is opened then add a opened label to it */}
                                {restaurant?.info?.availability?.opened ? (
                                    <RestaurantCardPromoted resData={restaurant} />
                                ) : (
                                    <RestaurantCard resData={restaurant} />
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Body;