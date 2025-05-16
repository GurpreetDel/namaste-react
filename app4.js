import React from 'react';
import { createRoot } from 'react-dom/client';

// Wait for DOM to be fully loaded before rendering React components
document.addEventListener('DOMContentLoaded', function() {
    // Create a container div for React to render into
    const reactDivElement = document.createElement("div");
    reactDivElement.id = "react-root";
    document.body.appendChild(reactDivElement);

    // Header component - Uses className for CSS styling
    // This component demonstrates traditional CSS styling with class names
    const Header = () => {
        return (
            <div className="header">
                <div className="logo-container">
                    <img
                        src="https://images.businessupturn.com/wp-content/uploads/2024/11/BU-2024-11-06T080206.367-1024x576.jpg"
                        alt="Swiggy Logo"
                        className="logo"
                    />
                </div>
                <div className="location-container">
                    <div className="location-title">Other</div>
                    <div className="location-address">241, Road, Green Glen Layout, Bellandur, Bengaluru, Karnataka 560103, India</div>
                </div>
                <div className="nav-items">
                    <ul>
                        <li className="cart-item">
                            <span className="cart-icon">
                                <svg viewBox="0 0 32 32" height="19" width="19" fill="#60b246">
                                    <path d="M14.2 2.864l-1.899 1.38c-0.612 0.447-1.35 0.687-2.11 0.687h-2.352c-0.386 0-0.727 0.248-0.845 0.613l-0.728 2.238c-0.235 0.721-0.691 1.348-1.302 1.79l-1.905 1.385c-0.311 0.226-0.442 0.626-0.323 0.991l0.728 2.241c0.232 0.719 0.232 1.492-0.001 2.211l-0.727 2.237c-0.119 0.366 0.011 0.767 0.323 0.994l1.906 1.384c0.61 0.445 1.064 1.070 1.3 1.79l0.728 2.24c0.118 0.365 0.459 0.613 0.844 0.613h2.352c0.759 0 1.497 0.24 2.107 0.685l1.9 1.381c0.313 0.227 0.736 0.227 1.048 0.001l1.9-1.38c0.613-0.447 1.349-0.687 2.11-0.687h2.352c0.384 0 0.726-0.248 0.845-0.615l0.727-2.235c0.233-0.719 0.688-1.346 1.302-1.794l1.904-1.383c0.311-0.226 0.442-0.627 0.323-0.993l-0.728-2.239c-0.232-0.718-0.232-1.49 0.001-2.213l0.727-2.238c0.119-0.364-0.012-0.765-0.324-0.992l-1.901-1.383c-0.614-0.445-1.070-1.074-1.302-1.793l-0.727-2.236c-0.119-0.366-0.461-0.614-0.845-0.614h-2.352c-0.76 0-1.497-0.239-2.107-0.685l-1.903-1.382c-0.313-0.227-0.736-0.226-1.047-0.001zM16.829 0.683l1.907 1.385c0.151 0.11 0.331 0.168 0.521 0.168h2.352c1.551 0 2.927 1 3.408 2.475l0.728 2.241c0.057 0.177 0.169 0.332 0.321 0.442l1.902 1.383c1.258 0.912 1.784 2.531 1.304 4.006l-0.726 2.234c-0.058 0.182-0.058 0.375-0.001 0.552l0.727 2.237c0.48 1.477-0.046 3.096-1.303 4.007l-1.9 1.38c-0.153 0.112-0.266 0.268-0.324 0.447l-0.727 2.237c-0.48 1.477-1.856 2.477-3.408 2.477h-2.352c-0.19 0-0.37 0.058-0.523 0.17l-1.904 1.383c-1.256 0.911-2.956 0.911-4.213-0.001l-1.903-1.384c-0.15-0.11-0.332-0.168-0.521-0.168h-2.352c-1.554 0-2.931-1.001-3.408-2.477l-0.726-2.234c-0.059-0.18-0.173-0.338-0.324-0.448l-1.902-1.381c-1.258-0.912-1.784-2.53-1.304-4.008l0.727-2.235c0.058-0.179 0.058-0.373 0.001-0.551l-0.727-2.236c-0.481-1.476 0.046-3.095 1.302-4.006l1.905-1.385c0.151-0.11 0.264-0.265 0.323-0.444l0.727-2.235c0.478-1.476 1.855-2.477 3.408-2.477h2.352c0.189 0 0.371-0.059 0.523-0.17l1.902-1.383c1.256-0.911 2.956-0.911 4.212 0zM18.967 23.002c-1.907 0-3.453-1.546-3.453-3.453s1.546-3.453 3.453-3.453c1.907 0 3.453 1.546 3.453 3.453s-1.546 3.453-3.453 3.453zM18.967 20.307c0.419 0 0.758-0.339 0.758-0.758s-0.339-0.758-0.758-0.758c-0.419 0-0.758 0.339-0.758 0.758s0.339 0.758 0.758 0.758zM10.545 14.549c-1.907 0-3.453-1.546-3.453-3.453s1.546-3.453 3.453-3.453c1.907 0 3.453 1.546 3.453 3.453s-1.546 3.453-3.453 3.453zM10.545 11.855c0.419 0 0.758-0.339 0.758-0.758s-0.339-0.758-0.758-0.758c-0.419 0-0.758 0.339-0.758 0.758s0.339 0.758 0.758 0.758zM17.78 7.882l2.331 1.352-7.591 13.090-2.331-1.352 7.591-13.09z"></path>
                                </svg>
                            </span>
                            <span>0</span>
                            <span>Cart</span>
                        </li>
                        <li>Gurpreet</li>
                        <li>Help</li>
                        <li>
                            <span>Offers</span>
                            <span className="new-tag">NEW</span>
                        </li>
                        <li>
                            <span className="search-icon">
                                <svg viewBox="0 0 24 24" height="19" width="19" fill="#686b78">
                                    <path d="M17.5834 7.66665C17.5834 12.0849 14.0018 15.6666 9.58335 15.6666C5.16488 15.6666 1.58335 12.0849 1.58335 7.66665C1.58335 3.24835 5.16488 -0.333351 9.58335 -0.333351C14.0018 -0.333351 17.5834 3.24835 17.5834 7.66665ZM15.5834 7.66665C15.5834 4.35303 12.8971 1.66665 9.58335 1.66665C6.26969 1.66665 3.58335 4.35303 3.58335 7.66665C3.58335 10.9803 6.26969 13.6666 9.58335 13.6666C12.8971 13.6666 15.5834 10.9803 15.5834 7.66665Z"></path>
                                    <path d="M17.5834 7.66665C17.5834 12.0849 14.0018 15.6666 9.58335 15.6666C5.16488 15.6666 1.58335 12.0849 1.58335 7.66665C1.58335 3.24835 5.16488 -0.333351 9.58335 -0.333351C14.0018 -0.333351 17.5834 3.24835 17.5834 7.66665ZM15.5834 7.66665C15.5834 4.35303 12.8971 1.66665 9.58335 1.66665C6.26969 1.66665 3.58335 4.35303 3.58335 7.66665C3.58335 10.9803 6.26969 13.6666 9.58335 13.6666C12.8971 13.6666 15.5834 10.9803 15.5834 7.66665Z"></path>
                                    <path d="M15.8333 15.8333L22.4166 22.4166" stroke="#686b78" strokeWidth="2"></path>
                                </svg>
                            </span>
                            <span>Search</span>
                        </li>
                        <li>Swiggy Corporate</li>
                    </ul>
                </div>
            </div>
        );
    };

    // CSS-in-JS: Defining styles as a JavaScript object
    // This is one way to create inline styles in React
    // The object keys are camelCased CSS properties (backgroundColor instead of background-color)
    // The values are regular CSS values as strings
    const styleCard =
    {
      // Removed background color to use the white background from CSS
    };

    // RestaurantCard component - Uses inline styling with objects
    // This component demonstrates two approaches to inline styling:
    // 1. Using a predefined style object (styleCard)
    // 2. Using an inline style object directly in the JSX
    // RestaurantCard component - Now accepts props as a parameter
    // Props is a JavaScript object containing all the properties passed to the component
    const RestaurantCard = (props) => {
        // Console log the props object to see what's being passed
        console.log("RestaurantCard props:", props);
        const { resData } = props;

        return (
            <div className="res-card" style={styleCard}>
                {/* 
                  Inline style defined directly in the JSX
                  Note how we use double curly braces: {{ }} 
                  - The outer braces are for embedding JavaScript in JSX
                  - The inner braces define the object literal
                */}
                <img 
                    src={resData && resData.info && resData.info.cloudinaryImageId 
                        ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.info.cloudinaryImageId}`
                        : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/x4uyxvihmg8qa3pddkgf"
                    }
                    style={{ 
                        width: "100%",
                        height: "220px",
                        objectFit: "cover",
                        display: "block",
                        margin: 0,
                        padding: 0,
                        borderRadius: "16px 16px 0 0"
                    }}
                    alt={resData && resData.info ? resData.info.name : "Restaurant image"}
                />
                {/* Using props.resName instead of hardcoded value */}
                <h3 style={{
                    margin: "6px 12px 2px 12px",
                    fontSize: "17px",
                    fontWeight: "600",
                    color: "#3e4152",
                    lineHeight: "24px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                    /*}}>{props.resName || "Restaurant Name"}</h3>*/
                }}>{resData && resData.info ? resData.info.name : "Restaurant Name"}</h3>
                {/* Using props.cuisine instead of hardcoded value */}
                <h4 style={{ 
                    fontSize: "13px", 
                    textOverflow: "ellipsis", 
                    whiteSpace: "nowrap", 
                    overflow: "hidden",
                    margin: "0 12px 4px 12px",
                    color: "#686b78",
                    fontWeight: "400"
                }}>{resData && resData.info && resData.info.cuisines ? resData.info.cuisines.join(", ") : props.cuisine || "Various Cuisines"}</h4>
                <div style={{
                    borderTop: "1px solid #e9e9eb",
                    paddingTop: "4px",
                    margin: "4px 12px 0 12px"
                }}>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "6px"
                    }}>
                        <div style={{
                            display: "flex",
                            alignItems: "center"
                        }}>
                            <span style={{ 
                                backgroundColor: "#48c479", 
                                color: "white", 
                                padding: "0 5px", 
                                borderRadius: "4px",
                                fontSize: "12px",
                                fontWeight: "600",
                                marginRight: "8px",
                                height: "20px",
                                display: "flex",
                                alignItems: "center"
                            }}>{resData && resData.info ? resData.info.avgRatingString : props.rating || "4.4"} ★</span>
                            <h4 style={{ 
                                fontSize: "12px", 
                                margin: "0",
                                color: "#686b78",
                                fontWeight: "400"
                            }}>{resData && resData.info && resData.info.sla ? resData.info.sla.slaString : props.deliveryTime || "38 minutes"}</h4>
                        </div>
                        <h4 style={{ 
                            fontSize: "12px", 
                            margin: "0",
                            color: "#686b78",
                            fontWeight: "400"
                        }}>{resData && resData.info ? resData.info.costForTwo : props.price || "₹200 for two"}</h4>
                    </div>
                    <div style={{
                        color: "#8a584b",
                        fontSize: "11px",
                        fontWeight: "600",
                        display: "flex",
                        alignItems: "center",
                        paddingBottom: "4px"
                    }}>
                        <img 
                            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/v1634558776/swiggy_one/OneIcon_3x.png" 
                            alt="Swiggy One" 
                            style={{ width: "18px", height: "18px", marginRight: "4px" }}
                        />
                        <span>50% off up to ₹100</span>
                    </div>
                </div>
            </div>
        );
    };

    const resList = [
            {
                "info": {
                    "id": "79428",
                    "name": "Dindigul Thalappakatti",
                    "cloudinaryImageId": "bfasxigdx7ny0cwqhr9r",
                    "locality": "Indiranagar",
                    "areaName": "Indiranagar",
                    "costForTwo": "₹650 for two",
                    "cuisines": [
                        "Biryani",
                        "Barbecue",
                        "South Indian",
                        "Chinese",
                        "North Indian"
                    ],
                    "avgRating": 4.3,
                    "parentId": "332",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "17K+",
                    "sla": {
                        "deliveryTime": 31,
                        "lastMileTravel": 3.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "3.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-05-16 01:00:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {},
                            "textBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹166 OFF",
                        "subHeader": "ABOVE ₹399",
                        "discountTag": "FLAT DEAL",
                        "headerTypeV2": 12
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "4.4",
                            "ratingCount": "6.3K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                    "context": "seo-data-03c0293c-91d6-4749-b6bd-0f8a7239b98b"
                },
                "cta": {
                    "link": "https://www.swiggy.com/city/bangalore/dindigul-thalappakatti-indiranagar-rest79428",
                    "type": "WEBLINK"
                }
            },
            {
                "info": {
                    "id": "14552",
                    "name": "Pizza Hut",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/9/b8c149e4-7b0b-4a86-8f86-642c6fb04372_14552.jpg",
                    "locality": "Airport Road",
                    "areaName": "Murugeshpalya",
                    "costForTwo": "₹300 for two",
                    "cuisines": [
                        "Pizzas"
                    ],
                    "avgRating": 4.3,
                    "parentId": "721",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "22K+",
                    "sla": {
                        "deliveryTime": 31,
                        "lastMileTravel": 2.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "2.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-05-16 07:00:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {},
                            "textBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹100"
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "4.4",
                            "ratingCount": "3.1K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                    "context": "seo-data-03c0293c-91d6-4749-b6bd-0f8a7239b98b"
                },
                "cta": {
                    "link": "https://www.swiggy.com/city/bangalore/pizza-hut-airport-road-murugeshpalya-rest14552",
                    "type": "WEBLINK"
                }
            },
            {
                "info": {
                    "id": "79461",
                    "name": "Domino's Pizza",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/13/1c467995-1834-4de0-a8e9-814d218bdc19_79461.JPG",
                    "locality": "Embassy Golf Links",
                    "areaName": "Indiranagar",
                    "costForTwo": "₹400 for two",
                    "cuisines": [
                        "Pizzas",
                        "Italian",
                        "Pastas",
                        "Desserts"
                    ],
                    "avgRating": 4.3,
                    "parentId": "2456",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "4.3K+",
                    "sla": {
                        "deliveryTime": 25,
                        "lastMileTravel": 1.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "20-25 mins",
                        "lastMileTravelString": "1.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-05-15 22:59:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "Rxawards/_CATEGORY-Pizza.png",
                                "description": "Delivery!"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "description": "Delivery!",
                                            "imageId": "Rxawards/_CATEGORY-Pizza.png"
                                        }
                                    }
                                ]
                            },
                            "textBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹119"
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                    "context": "seo-data-03c0293c-91d6-4749-b6bd-0f8a7239b98b"
                },
                "cta": {
                    "link": "https://www.swiggy.com/city/bangalore/dominos-pizza-embassy-golf-links-indiranagar-rest79461",
                    "type": "WEBLINK"
                }
            },
            {
                "info": {
                    "id": "413481",
                    "name": "Chinese Wok",
                    "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
                    "locality": "HAL 2nd Stage",
                    "areaName": "Indiranagar",
                    "costForTwo": "₹250 for two",
                    "cuisines": [
                        "Chinese",
                        "Asian",
                        "Tibetan",
                        "Desserts"
                    ],
                    "avgRating": 4.2,
                    "parentId": "61955",
                    "avgRatingString": "4.2",
                    "totalRatingsString": "5.4K+",
                    "sla": {
                        "deliveryTime": 41,
                        "lastMileTravel": 4.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-45 mins",
                        "lastMileTravelString": "4.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-05-16 02:00:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {},
                            "textBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "65% OFF",
                        "subHeader": "UPTO ₹125",
                        "headerTypeV2": 12
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "3.4",
                            "ratingCount": "105"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                    "context": "seo-data-03c0293c-91d6-4749-b6bd-0f8a7239b98b"
                },
                "cta": {
                    "link": "https://www.swiggy.com/city/bangalore/chinese-wok-hal-2nd-stage-indiranagar-rest413481",
                    "type": "WEBLINK"
                }
            },
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
                    "parentId": "630",
                    "avgRatingString": "4.5",
                    "totalRatingsString": "48K+",
                    "sla": {
                        "deliveryTime": 30,
                        "lastMileTravel": 4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "4.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-05-16 04:45:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "Ratnesh_Badges/Rx_Awards_2025/Bolt.png",
                                "description": "Delivery!"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "description": "Delivery!",
                                            "imageId": "Ratnesh_Badges/Rx_Awards_2025/Bolt.png"
                                        }
                                    }
                                ]
                            },
                            "textBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹165 OFF",
                        "subHeader": "ABOVE ₹649",
                        "discountTag": "FLAT DEAL",
                        "headerTypeV2": 12
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                    "context": "seo-data-03c0293c-91d6-4749-b6bd-0f8a7239b98b"
                },
                "cta": {
                    "link": "https://www.swiggy.com/city/bangalore/mcdonalds-murgesh-pallya-kempfort-total-mall-rest23680",
                    "type": "WEBLINK"
                }
            },
            {
                "info": {
                    "id": "157797",
                    "name": "The Good Bowl",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/15/355f71c2-7ab6-42fc-b7e4-678faef35373_157797.jpg",
                    "locality": "B Block",
                    "areaName": "Old Airport Road",
                    "costForTwo": "₹400 for two",
                    "cuisines": [
                        "Biryani",
                        "Pastas",
                        "Punjabi",
                        "Desserts",
                        "Beverages"
                    ],
                    "avgRating": 4.4,
                    "parentId": "7918",
                    "avgRatingString": "4.4",
                    "totalRatingsString": "1.2K+",
                    "sla": {
                        "deliveryTime": 36,
                        "lastMileTravel": 3.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "3.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-05-15 23:59:00",
                        "opened": true
                    },
                    "badges": {
                        "textExtendedBadges": [
                            {
                                "iconId": "guiltfree/GF_Logo_android_3x",
                                "shortDescription": "options available",
                                "fontColor": "#7E808C"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {},
                            "textBased": {},
                            "textExtendedBadges": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "description": "",
                                            "fontColor": "#7E808C",
                                            "iconId": "guiltfree/GF_Logo_android_3x",
                                            "shortDescription": "options available"
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹165 OFF",
                        "subHeader": "ABOVE ₹449",
                        "discountTag": "FLAT DEAL",
                        "headerTypeV2": 12
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                    "context": "seo-data-03c0293c-91d6-4749-b6bd-0f8a7239b98b"
                },
                "cta": {
                    "link": "https://www.swiggy.com/city/bangalore/the-good-bowl-b-block-old-airport-road-rest157797",
                    "type": "WEBLINK"
                }
            },
            {
                "info": {
                    "id": "20237",
                    "name": "Faasos - Wraps, Rolls & Shawarma",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/28/8f6d9b1e-2604-4b73-9f67-fab9f8f25ba6_20237.JPG",
                    "locality": "B Block",
                    "areaName": "Old Airport Road",
                    "costForTwo": "₹200 for two",
                    "cuisines": [
                        "Kebabs",
                        "Fast Food",
                        "Snacks",
                        "American",
                        "Healthy Food",
                        "Desserts",
                        "Beverages"
                    ],
                    "avgRating": 4.3,
                    "parentId": "21809",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "13K+",
                    "sla": {
                        "deliveryTime": 41,
                        "lastMileTravel": 3.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-45 mins",
                        "lastMileTravelString": "3.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-05-15 23:59:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "Rxawards/_CATEGORY-Rolls.png",
                                "description": "Delivery!"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "description": "Delivery!",
                                            "imageId": "Rxawards/_CATEGORY-Rolls.png"
                                        }
                                    }
                                ]
                            },
                            "textBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹89"
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                    "context": "seo-data-03c0293c-91d6-4749-b6bd-0f8a7239b98b"
                },
                "cta": {
                    "link": "https://www.swiggy.com/city/bangalore/faasos-wraps-rolls-and-shawarma-b-block-old-airport-road-rest20237",
                    "type": "WEBLINK"
                }
            },
            {
                "info": {
                    "id": "1286",
                    "name": "Leon's - Burgers & Wings (Leon Grill)",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/14/42be0ca8-3504-49bf-bc18-e293252702a7_1286.jpg",
                    "locality": "Jeevanbhimanagar",
                    "areaName": "Jeevan Bhima Nagar",
                    "costForTwo": "₹300 for two",
                    "cuisines": [
                        "American",
                        "Snacks",
                        "Turkish",
                        "Portuguese",
                        "Continental"
                    ],
                    "avgRating": 4.5,
                    "parentId": "371281",
                    "avgRatingString": "4.5",
                    "totalRatingsString": "174K+",
                    "sla": {
                        "deliveryTime": 34,
                        "lastMileTravel": 4.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "4.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-05-15 23:00:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "Rxawards/_CATEGORY-Burger.png",
                                "description": "Delivery!"
                            }
                        ]
                    },
                    "isOpen": true,
                    "aggregatedDiscountInfoV2": {},
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "description": "Delivery!",
                                            "imageId": "Rxawards/_CATEGORY-Burger.png"
                                        }
                                    }
                                ]
                            },
                            "textBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "4.3",
                            "ratingCount": "7.1K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                    "context": "seo-data-03c0293c-91d6-4749-b6bd-0f8a7239b98b"
                },
                "cta": {
                    "link": "https://www.swiggy.com/city/bangalore/leons-burgers-and-wings-leon-grill-jeevanbhimanagar-jeevan-bhima-nagar-rest1286",
                    "type": "WEBLINK"
                }
            },
            {
                "info": {
                    "id": "333581",
                    "name": "Kwality Walls Ice Cream and More",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/9ad85ada-13be-408d-b9db-57592f235780_333581.JPG",
                    "locality": "Murgesh Pallya",
                    "areaName": "Indiranagar",
                    "costForTwo": "₹300 for two",
                    "cuisines": [
                        "Desserts",
                        "Ice Cream",
                        "Ice Cream Cakes"
                    ],
                    "avgRating": 4.5,
                    "veg": true,
                    "parentId": "582",
                    "avgRatingString": "4.5",
                    "totalRatingsString": "360",
                    "sla": {
                        "deliveryTime": 27,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-05-15 23:59:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "v1695133679/badges/Pure_Veg111.png",
                                "description": "pureveg"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "description": "pureveg",
                                            "imageId": "v1695133679/badges/Pure_Veg111.png"
                                        }
                                    }
                                ]
                            },
                            "textBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹299",
                        "discountTag": "FLAT DEAL"
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                    "context": "seo-data-03c0293c-91d6-4749-b6bd-0f8a7239b98b"
                },
                "cta": {
                    "link": "https://www.swiggy.com/city/bangalore/kwality-walls-ice-cream-and-more-murgesh-pallya-indiranagar-rest333581",
                    "type": "WEBLINK"
                }
            },
            {
                "info": {
                    "id": "104211",
                    "name": "NIC Ice Creams",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/10/f6497179-0d3c-49d9-9d20-f6eafc55ec6d_104211.JPG",
                    "locality": "Devarbisanhalli",
                    "areaName": "Kadubeesanahalli",
                    "costForTwo": "₹120 for two",
                    "cuisines": [
                        "Ice Cream",
                        "Desserts"
                    ],
                    "avgRating": 4.7,
                    "veg": true,
                    "parentId": "6249",
                    "avgRatingString": "4.7",
                    "totalRatingsString": "17K+",
                    "sla": {
                        "deliveryTime": 34,
                        "lastMileTravel": 7.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "7.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-05-15 23:00:00",
                        "opened": true
                    },
                    "badges": {
                        "textExtendedBadges": [
                            {
                                "iconId": "Ratnesh_Badges/test2.png",
                                "shortDescription": "Perfect ice cream delivery",
                                "fontColor": "#7E808C"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {},
                            "textBased": {},
                            "textExtendedBadges": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "description": "",
                                            "fontColor": "#7E808C",
                                            "iconId": "Ratnesh_Badges/test2.png",
                                            "shortDescription": "Perfect ice cream delivery"
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹179"
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                    "context": "seo-data-03c0293c-91d6-4749-b6bd-0f8a7239b98b"
                },
                "cta": {
                    "link": "https://www.swiggy.com/city/bangalore/nic-ice-creams-devarbisanhalli-kadubeesanahalli-rest104211",
                    "type": "WEBLINK"
                }
            },
            {
                "info": {
                    "id": "272238",
                    "name": "EatFit",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/26/ea18b29a-5f40-43f5-bfe2-8c335f22d5fb_272238.jpg",
                    "locality": "CMH Road",
                    "areaName": "Indiranagar",
                    "costForTwo": "₹270 for two",
                    "cuisines": [
                        "Chinese",
                        "Healthy Food",
                        "Tandoor",
                        "Pizzas",
                        "Thalis",
                        "Biryani"
                    ],
                    "avgRating": 4.5,
                    "parentId": "76139",
                    "avgRatingString": "4.5",
                    "totalRatingsString": "14K+",
                    "sla": {
                        "deliveryTime": 38,
                        "lastMileTravel": 4.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "35-40 mins",
                        "lastMileTravelString": "4.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-05-16 00:00:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {},
                            "textBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹165 OFF",
                        "subHeader": "ABOVE ₹499",
                        "discountTag": "FLAT DEAL",
                        "headerTypeV2": 12
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                    "context": "seo-data-03c0293c-91d6-4749-b6bd-0f8a7239b98b"
                },
                "cta": {
                    "link": "https://www.swiggy.com/city/bangalore/eatfit-cmh-road-indiranagar-rest272238",
                    "type": "WEBLINK"
                }
            },
            {
                "info": {
                    "id": "718645",
                    "name": "FreshMenu",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/5/7222a1a5-7f54-43fd-ab13-7b0d87cdf7a8_718645.jpg",
                    "locality": "OLD AIRPORT ROAD",
                    "areaName": "Murgeshpalya",
                    "costForTwo": "₹250 for two",
                    "cuisines": [
                        "Continental",
                        "Chinese",
                        "Oriental",
                        "Asian",
                        "Healthy Food",
                        "Fast Food",
                        "Indian",
                        "Desserts"
                    ],
                    "avgRating": 4.2,
                    "parentId": "398",
                    "avgRatingString": "4.2",
                    "totalRatingsString": "4.4K+",
                    "sla": {
                        "deliveryTime": 35,
                        "lastMileTravel": 3.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "3.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-05-15 23:59:00",
                        "opened": true
                    },
                    "badges": {
                        "textExtendedBadges": [
                            {
                                "iconId": "guiltfree/GF_Logo_android_3x",
                                "shortDescription": "options available",
                                "fontColor": "#7E808C"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {},
                            "textBased": {},
                            "textExtendedBadges": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "description": "",
                                            "fontColor": "#7E808C",
                                            "iconId": "guiltfree/GF_Logo_android_3x",
                                            "shortDescription": "options available"
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹165 OFF",
                        "subHeader": "ABOVE ₹399",
                        "discountTag": "FLAT DEAL",
                        "headerTypeV2": 12
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                    "context": "seo-data-03c0293c-91d6-4749-b6bd-0f8a7239b98b"
                },
                "cta": {
                    "link": "https://www.swiggy.com/city/bangalore/freshmenu-old-airport-road-murgeshpalya-rest718645",
                    "type": "WEBLINK"
                }
            },
            {
                "info": {
                    "id": "35845",
                    "name": "Sweet Truth - Cake and Desserts",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/15/5ed9a8f5-dce4-431f-903d-c67e7f454381_35845.jpg",
                    "locality": "B Block",
                    "areaName": "Old Airport Road",
                    "costForTwo": "₹450 for two",
                    "cuisines": [
                        "Desserts",
                        "Ice Cream",
                        "Bakery",
                        "Beverages"
                    ],
                    "avgRating": 4.5,
                    "parentId": "4444",
                    "avgRatingString": "4.5",
                    "totalRatingsString": "1.0K+",
                    "sla": {
                        "deliveryTime": 29,
                        "lastMileTravel": 3.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "3.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-05-15 23:59:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {},
                            "textBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹165 OFF",
                        "subHeader": "ABOVE ₹649",
                        "discountTag": "FLAT DEAL",
                        "headerTypeV2": 12
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                    "context": "seo-data-03c0293c-91d6-4749-b6bd-0f8a7239b98b"
                },
                "cta": {
                    "link": "https://www.swiggy.com/city/bangalore/sweet-truth-cake-and-desserts-b-block-old-airport-road-rest35845",
                    "type": "WEBLINK"
                }
            },
            {
                "info": {
                    "id": "131114",
                    "name": "Andhra Gunpowder",
                    "cloudinaryImageId": "xnpuvvqfcxfttpwgvq6p",
                    "locality": "HAL 3rd stage",
                    "areaName": "Jeevanbhima Nagar",
                    "costForTwo": "₹350 for two",
                    "cuisines": [
                        "Andhra",
                        "Biryani",
                        "South Indian"
                    ],
                    "avgRating": 4.5,
                    "parentId": "10496",
                    "avgRatingString": "4.5",
                    "totalRatingsString": "16K+",
                    "sla": {
                        "deliveryTime": 34,
                        "lastMileTravel": 4.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "4.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-05-16 01:00:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "Ratnesh_Badges/Rx_Awards_2025/Andhra%20Food.png",
                                "description": "Delivery!"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "description": "Delivery!",
                                            "imageId": "Ratnesh_Badges/Rx_Awards_2025/Andhra%20Food.png"
                                        }
                                    }
                                ]
                            },
                            "textBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹125 OFF",
                        "subHeader": "ABOVE ₹499",
                        "discountTag": "FLAT DEAL"
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                    "context": "seo-data-03c0293c-91d6-4749-b6bd-0f8a7239b98b"
                },
                "cta": {
                    "link": "https://www.swiggy.com/city/bangalore/andhra-gunpowder-hal-3rd-stage-jeevanbhima-nagar-rest131114",
                    "type": "WEBLINK"
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
                    "sla": {
                        "deliveryTime": 26,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-05-15 22:45:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "Rxawards/_CATEGORY-Mithai.png",
                                "description": "Delivery!"
                            }
                        ]
                    },
                    "isOpen": true,
                    "aggregatedDiscountInfoV2": {},
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "description": "Delivery!",
                                            "imageId": "Rxawards/_CATEGORY-Mithai.png"
                                        }
                                    }
                                ]
                            },
                            "textBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                    "context": "seo-data-03c0293c-91d6-4749-b6bd-0f8a7239b98b"
                },
                "cta": {
                    "link": "https://www.swiggy.com/city/bangalore/kanti-sweets-murgeshpalya-old-aiport-road-rest69882",
                    "type": "WEBLINK"
                }
            },
            {
                "info": {
                    "id": "413468",
                    "name": "Big Bowl",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/deff0d02-ca1d-4ef9-9d62-b0cbeabf33d3_413468.JPG",
                    "locality": "2nd stage",
                    "areaName": "Indiranagar",
                    "costForTwo": "₹250 for two",
                    "cuisines": [
                        "North Indian",
                        "Chinese",
                        "Tibetan",
                        "Desserts"
                    ],
                    "avgRating": 4.3,
                    "parentId": "434792",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "3.6K+",
                    "sla": {
                        "deliveryTime": 41,
                        "lastMileTravel": 4.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-45 mins",
                        "lastMileTravelString": "4.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-05-16 02:00:00",
                        "opened": true
                    },
                    "badges": {},
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {},
                            "textBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "65% OFF",
                        "subHeader": "UPTO ₹125",
                        "headerTypeV2": 12
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                    "context": "seo-data-03c0293c-91d6-4749-b6bd-0f8a7239b98b"
                },
                "cta": {
                    "link": "https://www.swiggy.com/city/bangalore/big-bowl-2nd-stage-indiranagar-rest413468",
                    "type": "WEBLINK"
                }
            },
            {
                "info": {
                    "id": "537302",
                    "name": "Cheesecake & Co.",
                    "cloudinaryImageId": "b318c0b4bc2169550145ace1d6e791a2",
                    "locality": "Indiranagar",
                    "areaName": "Indiranagar",
                    "costForTwo": "₹250 for two",
                    "cuisines": [
                        "Bakery",
                        "Desserts"
                    ],
                    "avgRating": 4.7,
                    "parentId": "387417",
                    "avgRatingString": "4.7",
                    "totalRatingsString": "1.8K+",
                    "sla": {
                        "deliveryTime": 29,
                        "lastMileTravel": 3.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "3.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-05-16 00:00:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "newg.png",
                                "description": "Gourmet"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "description": "Gourmet",
                                            "imageId": "newg.png"
                                        }
                                    }
                                ]
                            },
                            "textBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹165 OFF",
                        "subHeader": "ABOVE ₹799",
                        "discountTag": "FLAT DEAL",
                        "headerTypeV2": 12
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "3.2",
                            "ratingCount": "128"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                    "context": "seo-data-03c0293c-91d6-4749-b6bd-0f8a7239b98b"
                },
                "cta": {
                    "link": "https://www.swiggy.com/city/bangalore/cheesecake-and-co-indiranagar-rest537302",
                    "type": "WEBLINK"
                }
            },
            {
                "info": {
                    "id": "609282",
                    "name": "ZAZA Mughal Biryani",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/66b0a7be-fefb-4456-af63-af6c5213e970_609282.jpg",
                    "locality": "Murgesh Pallya",
                    "areaName": "Indiranagar",
                    "costForTwo": "₹250 for two",
                    "cuisines": [
                        "Biryani",
                        "North Indian",
                        "Awadhi"
                    ],
                    "avgRating": 4.4,
                    "parentId": "22473",
                    "avgRatingString": "4.4",
                    "totalRatingsString": "524",
                    "sla": {
                        "deliveryTime": 20,
                        "lastMileTravel": 3.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "15-25 mins",
                        "lastMileTravelString": "3.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-05-15 23:00:00",
                        "opened": true
                    },
                    "badges": {
                        "textExtendedBadges": [
                            {
                                "iconId": "guiltfree/GF_Logo_android_3x",
                                "shortDescription": "options available",
                                "fontColor": "#7E808C"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {},
                            "textBased": {},
                            "textExtendedBadges": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "description": "",
                                            "fontColor": "#7E808C",
                                            "iconId": "guiltfree/GF_Logo_android_3x",
                                            "shortDescription": "options available"
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹165 OFF",
                        "subHeader": "ABOVE ₹549",
                        "discountTag": "FLAT DEAL",
                        "headerTypeV2": 12
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                    "context": "seo-data-03c0293c-91d6-4749-b6bd-0f8a7239b98b"
                },
                "cta": {
                    "link": "https://www.swiggy.com/city/bangalore/zaza-mughal-biryani-murgesh-pallya-indiranagar-rest609282",
                    "type": "WEBLINK"
                }
            },
            {
                "info": {
                    "id": "582304",
                    "name": "Cheesecakes By CakeZone",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/15/82853e82-3346-4def-aacc-e4f10dde9b37_582304.jpg",
                    "locality": "HAL 3RD STAGE",
                    "areaName": "JEEVAN BHEEMA NAGAR",
                    "costForTwo": "₹200 for two",
                    "cuisines": [
                        "Desserts",
                        "Bakery"
                    ],
                    "avgRating": 4.3,
                    "veg": true,
                    "parentId": "348057",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "144",
                    "sla": {
                        "deliveryTime": 40,
                        "lastMileTravel": 4.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "40-45 mins",
                        "lastMileTravelString": "4.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-05-16 02:00:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "newg.png",
                                "description": "Gourmet"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "description": "Gourmet",
                                            "imageId": "newg.png"
                                        }
                                    }
                                ]
                            },
                            "textBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹120"
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "--"
                        }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                    "context": "seo-data-03c0293c-91d6-4749-b6bd-0f8a7239b98b"
                },
                "cta": {
                    "link": "https://www.swiggy.com/city/bangalore/cheesecakes-by-cakezone-hal-3rd-stage-jeevan-bheema-nagar-rest582304",
                    "type": "WEBLINK"
                }
            },
            {
                "info": {
                    "id": "8241",
                    "name": "Paris Panini - Gourmet Sandwiches & Wraps",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/10/b4a0ba6f-6a48-4004-bd05-4074bf27fa9a_8241.jpg",
                    "locality": "Indiranagar",
                    "areaName": "Indiranagar",
                    "costForTwo": "₹500 for two",
                    "cuisines": [
                        "Continental",
                        "Pastas",
                        "Salads",
                        "Snacks",
                        "Desserts",
                        "Fast Food",
                        "French"
                    ],
                    "avgRating": 4.6,
                    "parentId": "21019",
                    "avgRatingString": "4.6",
                    "totalRatingsString": "33K+",
                    "sla": {
                        "deliveryTime": 34,
                        "lastMileTravel": 4.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "4.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                        "nextCloseTime": "2025-05-15 23:00:00",
                        "opened": true
                    },
                    "badges": {
                        "imageBadges": [
                            {
                                "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
                                "description": "Delivery!"
                            }
                        ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                        "entityBadges": {
                            "imageBased": {
                                "badgeObject": [
                                    {
                                        "attributes": {
                                            "description": "Delivery!",
                                            "imageId": "Rxawards/_CATEGORY-Sandwiches.png"
                                        }
                                    }
                                ]
                            },
                            "textBased": {},
                            "textExtendedBadges": {}
                        }
                    },
                    "aggregatedDiscountInfoV3": {
                        "header": "₹165 OFF",
                        "subHeader": "ABOVE ₹749",
                        "discountTag": "FLAT DEAL",
                        "headerTypeV2": 12
                    },
                    "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                            "lottie": {},
                            "video": {}
                        }
                    },
                    "reviewsSummary": {},
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {},
                    "externalRatings": {
                        "aggregatedRating": {
                            "rating": "4.2",
                            "ratingCount": "1.6K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                },
                "analytics": {
                    "context": "seo-data-03c0293c-91d6-4749-b6bd-0f8a7239b98b"
                },
                "cta": {
                    "link": "https://www.swiggy.com/city/bangalore/paris-panini-gourmet-sandwiches-and-wraps-indiranagar-rest8241",
                    "type": "WEBLINK"
                }
            }
        ];


    // Body component - Container for the main content
    // This component uses className for styling and demonstrates component composition
    // by including the RestaurantCard component
    const Body = () => {
        return (
            <div className="body">
                <div className="search">Search</div>
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
                        {resList.map((restaurant, index) => (
                            <RestaurantCard key={index} resData={restaurant} />
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

    // AppLayout component - The main application layout
    // This component demonstrates component composition by including Header and Body components
    const AppLayout = () => {
        return (
            <div className="app">
                {/*<h1>Hello World</h1>*/}
                <Header />
                <Body />
            </div>
        );
    }

    // Create a root using React 18's createRoot API
    // This is the modern way to render React components to the DOM
    const root = createRoot(document.getElementById("react-root"));

    // Render the AppLayout component to the DOM
    // This will trigger the rendering of all nested components (Header, Body, RestaurantCard)
    root.render(<AppLayout />);
});
