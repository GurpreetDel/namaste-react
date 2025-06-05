import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const { resId } = useParams();
    console.log(resId);

    // Using the custom hook to fetch restaurant menu data
    const resInfo = useRestaurantMenu(resId);

    // Show shimmer UI while data is loading
    if (resInfo === null) return <Shimmer />;

    //const { name , cuisines , costForTwoMessage } = resInfo?.data.cards[0].card.card.info;

    // Log the entire resInfo object to debug
    console.log("Restaurant Info:", resInfo);

    // Check different possible paths for restaurant info
    const restaurantInfo = 
        resInfo?.data?.cards[0]?.card?.card?.info || 
        resInfo?.data?.cards[2]?.card?.card?.info || 
        {};

    // Check for restaurant name in the new API structure
    const restaurantName = 
        resInfo?.cards?.[0]?.card?.card?.text || 
        restaurantInfo?.name || 
        "Restaurant Name Not Available";

    // Check for restaurant details in the new API structure
    const restaurantDetails = resInfo?.cards?.find(card => 
        card?.card?.card?.["@type"]?.includes("RestaurantInfo")
    )?.card?.card || {};

    console.log("Restaurant Name:", restaurantName);
    console.log("Restaurant Details:", restaurantDetails);

    // Properly destructuring the required properties
    const { name = restaurantName, cuisines = [], costForTwoMessage } = restaurantInfo;

    // Check different possible paths for menu items in both old and new API structures
    const menuItemsPath1 = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const menuItemsPath2 = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const menuItemsPath3 = resInfo?.cards?.find(card => 
        card?.groupedCard?.cardGroupMap?.REGULAR?.cards
    )?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    console.log("Menu Items Path 1:", menuItemsPath1);
    console.log("Menu Items Path 2:", menuItemsPath2);
    console.log("Menu Items Path 3:", menuItemsPath3);

    // Find the menu items card by looking for a card with itemCards
    const menuCards = menuItemsPath3 || menuItemsPath1 || menuItemsPath2 || [];
    const menuCard = menuCards.find(card => 
        card?.card?.card?.itemCards || 
        card?.card?.card?.categories?.[0]?.itemCards ||
        card?.card?.card?.carousel
    );

    console.log("Menu Card:", menuCard);

    // Get item cards from the menu card
    let itemCards = [];

    if (menuCard?.card?.card?.itemCards) {
        itemCards = menuCard.card.card.itemCards;
    } else if (menuCard?.card?.card?.categories?.[0]?.itemCards) {
        itemCards = menuCard.card.card.categories[0].itemCards;
    } else if (menuCard?.card?.card?.carousel) {
        itemCards = menuCard.card.card.carousel;
    }

    console.log("Item Cards:", itemCards);

    // We don't need to check for null again since we have an early return above
    return (
        <div className="menu">
            <h1>Restaurant Details</h1>
            <h2>{restaurantName}</h2>

            {/* Display restaurant details from either structure */}
            {cuisines.length > 0 && <p>Cuisines: {cuisines.join(", ")}</p>}
            {costForTwoMessage && <h3>{costForTwoMessage}</h3>}
            {restaurantDetails.avgRating && <p>Rating: {restaurantDetails.avgRating}⭐</p>}
            {restaurantDetails.areaName && <p>Area: {restaurantDetails.areaName}</p>}
            {restaurantDetails.sla?.deliveryTime && <p>Delivery Time: {restaurantDetails.sla.deliveryTime} minutes</p>}

            <h2>Menu</h2>
            {itemCards.length > 0 ? (
                <ul className="menu-list">
                    {itemCards.map((item, index) => {
                        // Handle different item structures
                        const itemInfo = item?.card?.info || item?.dish?.info || item;
                        return (
                            <li key={itemInfo?.id || index} className="menu-item">
                                <div className="item-details">
                                    <h3>{itemInfo?.name || "Item Name Not Available"}</h3>
                                    <p className="item-price">
                                        ₹{itemInfo?.price ? itemInfo.price / 100 : 
                                           itemInfo?.defaultPrice ? itemInfo.defaultPrice / 100 : 
                                           "Price Not Available"}
                                    </p>
                                    {itemInfo?.description && <p className="item-desc">{itemInfo.description}</p>}
                                </div>
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <p>No menu items available for this restaurant.</p>
            )}
        </div>
    );

}

export default RestaurantMenu;
