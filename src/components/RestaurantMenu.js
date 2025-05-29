import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const fetchMenu = async () => {
        console.log("fetchMenu called");
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9269824&lng=77.6693608&restaurantId=263484&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        console.log(json);
        setResInfo(json);
    }

    useEffect(() => {
        console.log("useEffect called , RestaurantMenu Component renders and refreshes and calls every time");
        fetchMenu();
    }, []);

    //const { name , cuisines , costForTwoMessage } = resInfo?.data.cards[0].card.card.info;
    const costForTwoMessage = resInfo?.data?.cards[2]?.card?.card?.info?.costForTwoMessage;
    return resInfo ===null ? (<Shimmer/>) : (
        <div className="menu">
            <h1>Name of Restaurant</h1>
            <h2>{resInfo?.data?.cards[2]?.card?.card?.info?.name}</h2>
            <h2>{resInfo?.data?.cards[2]?.card?.card?.info?.cuisines}</h2>
            <h3>{costForTwoMessage}</h3>
            <ul>
                <li>Biryani</li>
                <li>Burgers</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    );

}

export default RestaurantMenu;
