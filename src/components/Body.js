import React, {useEffect} from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import {useState} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";



const Body = () => {

    let [listOfRestaurants2, setListOfRestaurants2] = useState([
        {
            "info": {
                "id": "23680",
                "name": "McDonald's",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/20/abde17ea-aad5-48f6-987f-c1320ccfd0be_23680.jpg",
                "locality": "Murgesh Pallya",
                "areaName": "KempFort Total Mall",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Burgers",
                    "Beverages",
                    "Cafe",
                    "Desserts"
                ],
                "avgRating": 4.5,
                "avgRatingString": "4.5",

            }
        },

        {
            "info": {
                "id": "69882",
                "name": "Kanti Sweets",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/13/53ddce01-3187-4d90-b959-778359744651_69882.jpg",
                "locality": "Murgeshpalya",
                "areaName": "Old Aiport Road",
                "costForTwo": "₹100 for two",
                "cuisines": [
                    "Desserts"
                ],
                "avgRating": 4.7,
                "veg": true,
                "parentId": "4700",
                "avgRatingString": "4.7",
                "totalRatingsString": "5.2K+",

            }
        }

    ]);

    let [listOfRestaurants, setListOfRestaurants] = useState([]);
    let listOfRestaurantsJS = [
        {
            "info": {
                "id": "23680",
                "name": "McDonald's",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/20/abde17ea-aad5-48f6-987f-c1320ccfd0be_23680.jpg",
                "locality": "Murgesh Pallya",
                "areaName": "KempFort Total Mall",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Burgers",
                    "Beverages",
                    "Cafe",
                    "Desserts"
                ],
                "avgRating": 4.5,
                "avgRatingString": "4.5",

            }
        },
        {
            "info": {
                "id": "69882",
                "name": "Kanti Sweets",
                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/13/53ddce01-3187-4d90-b959-778359744651_69882.jpg",
                "locality": "Murgeshpalya",
                "areaName": "Old Aiport Road",
                "costForTwo": "₹100 for two",
                "cuisines": [
                    "Desserts"
                ],
                "avgRating": 4.7,
                "veg": true,
                "parentId": "4700",
                "avgRatingString": "4.7",
                "totalRatingsString": "5.2K+",

            }
        }
    ];

    let [filteredRestaurants, setFilteredRestaurants] = useState([]);


    const [searchText , setSearchText] = useState("");

    console.log("React re renders on every change in state of search textbox typing whole Body component every time on every change");

    useEffect(() => {
        console.log("use Effect is called");
        fetchData();
    },[]);

    const fetchData = async () => {
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9269824&lng=77.6693608&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await data.json();
        console.log(jsonData);
        //setListOfRestaurants(jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setListOfRestaurants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlineStatus = useOnlineStatus() ;
    console.log("Current online status:", onlineStatus);

    if(onlineStatus === false) {
        console.log("Displaying offline message to user");
        return (
            <div className="offline-status">
                <h1>Looks like you are offline!! Please Check your internet connection</h1>
            </div>
        );
    }

    return listOfRestaurants.length === 0 ? (
        <Shimmer/>
    ) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                <input type="text" placeholder="Search Restaurants" value={searchText}
                       onChange={   (e) => {
                           setSearchText(e.target.value);
                       }
                }/>

                    <button onClick={ () => {
                        console.log(searchText);

                        const filteredRestaurant = listOfRestaurants.filter( res=>
                        res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurants(filteredRestaurant);

                    }}>Search</button>

                </div>
                <button className="filter-btn"
                onClick={ () => {
                    console.log("Button Clicked");

                    const filteredList = listOfRestaurants.filter(
                        (restaurant) =>
                        restaurant.info.avgRating > 4.5
                    );

                    // Update filteredRestaurants instead of listOfRestaurants
                    setFilteredRestaurants(filteredList);

                }} onMouseOver={ () => {
                    console.log("mouse pointer on over hovered");
                }}>Top Rated Restuarant</button>

            </div>
            <div className="res-container">
                {/*
                          Component composition: Using the RestaurantCard component
                          The styleCard object's styles will be applied to this component
                        */}
                {/* Passing props to RestaurantCard components */}
                {/* Props are passed as attributes in JSX */}
                {/*<RestaurantCard
                            resName="Meghna Foods"
                            cuisine="Biryani, North Indian, Asian"
                            rating="4.4"
                            deliveryTime="38 minutes"
                            price="₹200 for two"
                            resData={resList[0]}
                        />*/}
                {/* Using map function to render RestaurantCard components */}

                {/*{resList.map((restaurant, index) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}*/}

                {filteredRestaurants.map((restaurant, index) => (
                    <Link key={restaurant.info.id}
                          to={"/restaurants/"+restaurant.info.id}>
                        <RestaurantCard  resData={restaurant} /> </Link>
                ))}

                {/*
                        <RestaurantCard
                            resName="KFC"
                            cuisine="Fast Food, Burgers, Sandwiches"
                            rating="4.1"
                            deliveryTime="25 minutes"
                            price="₹400 for two"
                        />
                        <RestaurantCard
                            resName="Domino's Pizza"
                            cuisine="Pizza, Italian, Pasta"
                            rating="3.9"
                            deliveryTime="30 minutes"
                            price="₹350 for two"
                        />
                        <RestaurantCard
                            resName="Burger King"
                            cuisine="Burgers, American, Fast Food"
                            rating="4.2"
                            deliveryTime="28 minutes"
                            price="₹300 for two"
                        />*/}
                {/* Example of a component with no props - will use default values */}
                {/*<RestaurantCard />*/}

                {/*RestaurantCards*/}
            </div>

        </div>
    );
};

export default Body;
