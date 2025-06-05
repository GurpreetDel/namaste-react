import {useEffect, useState} from "react";
import {MENU_URL} from "./constants";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, [resId]);

    const fetchData = async () => {
        const data = await fetch(MENU_URL + resId);
        const json = await data.json();
        console.log("API Response:", json);
        setResInfo(json);
    };

    return resInfo;
}

export default useRestaurantMenu;
