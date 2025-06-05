import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import {MENU_URL} from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const { resId } = useParams();
    console.log(resId);

    const resInfo = useRestaurantMenu(resId);
    if (resInfo === null) return <Shimmer />;

    const fetchMenu = async () => {
        console.log("fetchMenu called");
        const data = await fetch(MENU_URL + resId);
        const json = await data.json();
        console.log(json);
        setResInfo(json);
    }

    useEffect(() => {
        console.log("useEffect called , RestaurantMenu Component renders and refreshes and calls every time");
        fetchMenu();
    }, []);

    //const { name , cuisines , costForTwoMessage } = resInfo?.data.cards[0].card.card.info;

    // Properly destructuring the required properties from the info object
    const { name, cuisines, costForTwoMessage } = resInfo?.data?.cards[2]?.card?.card?.info || {};
    // Correctly accessing the menu items data
    const itemCards = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || [];
    // Now we can map through menuItems to get each item's name
    // const itemNames = menuItems.map(item => item?.card?.info?.name || "");
    console.log(itemCards);
    const itemNames = itemCards.map(item => <li>item?.card?.info?.name || "" </li>);
    console.log(itemNames);
    return resInfo ===null ? (<Shimmer/>) : (
        <div className="menu">
            <h1>Name of Restaurant</h1>
            <h2>{name}</h2>
            <p>{cuisines.join(",")} - {   costForTwoMessage}</p>
            <h3>{costForTwoMessage}</h3>
            <ul>
                {itemCards.map((item,index) => (
                        <li key={item?.card?.info?.id}>{item?.card?.info?.name || "" } - Rs. { item?.card?.info?.price / 100 }</li>
                    ))}
            </ul>
        </div>
    );

}

export default RestaurantMenu;
