import {useEffect, useState} from "react";

const useOnlineStatus = () => {
    //check if online

    // Initialize with the current online status instead of assuming true
    const initialOnlineStatus = navigator.onLine;
    console.log("Initial online status:", initialOnlineStatus);
    const [onlineStatus, setOnlineStatus] = useState(initialOnlineStatus);

    useEffect(() => {
        console.log("Setting up online/offline event listeners");
        // Event handler functions
        const handleOnline = () => {
            console.log("User is now ONLINE");
            setOnlineStatus(true);
        };

        const handleOffline = () => {
            console.log("User is now OFFLINE");
            setOnlineStatus(false);
        };

        // Add event listeners for both online and offline events
        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        // Clean up event listeners when component unmounts
        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        };
    }, []);

    //boolean value
    console.log("Returning online status:", onlineStatus);
    return onlineStatus;
}

export default useOnlineStatus;
