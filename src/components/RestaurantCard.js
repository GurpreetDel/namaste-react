import React from "react";
import {CDN_URL} from "../utils/constants";
import {LOGO_URL} from "../utils/constants";

const styleCard =
    {
        // Removed background color to use the white background from CSS
    };

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
                    height: "280px",
                    objectFit: "cover",
                    display: "block",
                    margin: 0,
                    padding: 0,
                    borderRadius: "16px 16px 0 0"
                }}
                alt={resData && resData.info ? resData.info.name : "Restaurant image"}
            />
            {/* Using props.resName instead of hardcoded value */}
            <div style={{
                height: "54px", // Fixed height for name and cuisine container (24px + 20px + margins)
                padding: "0",
                margin: "0",
                overflow: "hidden" // Ensure nothing overflows
            }}>
                <h3 style={{
                    margin: "6px 12px 2px 12px",
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#3e4152",
                    lineHeight: "24px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap", // Changed from "normal" to "nowrap" to prevent wrapping
                    height: "24px", // Changed from minHeight to fixed height
                    /*}}>{props.resName || "Restaurant Name"}</h3>*/
                }}>{resData && resData.info ? resData.info.name : "Restaurant Name"}</h3>
                {/* Using props.cuisine instead of hardcoded value */}
                <h4 style={{
                    fontSize: "14px",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    margin: "0 12px 4px 12px",
                    color: "#686b78",
                    fontWeight: "400",
                    height: "20px",
                    lineHeight: "20px"
                }}>{resData && resData.info && resData.info.cuisines ? resData.info.cuisines.join(", ") : props.cuisine || "Various Cuisines"}</h4>
            </div>
            <div style={{
                borderTop: "1px solid #e9e9eb",
                paddingTop: "8px",
                margin: "8px 12px 0 12px",
                height: "70px", // Further increased fixed height for the metadata section
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
            }}>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "8px", // Increased from 6px to 8px
                    height: "24px", // Increased from 20px to 24px for better visibility
                    width: "100%" // Ensure full width
                }}>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        maxWidth: "60%" // Limit width to prevent overlap
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
                                alignItems: "center",
                                flexShrink: 0 // Prevent shrinking
                            }}>{resData && resData.info ? resData.info.avgRatingString : props.rating || "4.4"} ★</span>
                        <h4 style={{
                            fontSize: "12px",
                            margin: "0",
                            color: "#686b78",
                            fontWeight: "400",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            maxWidth: "100%" // Use maximum available width
                        }}>{resData && resData.info && resData.info.sla ? resData.info.sla.slaString : props.deliveryTime || "38 minutes"}</h4>
                    </div>
                    <h4 style={{
                        fontSize: "12px",
                        margin: "0",
                        color: "#686b78",
                        fontWeight: "600", // Increased from 400 to 600 for better visibility
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "40%", // Limit width to prevent overlap
                        textAlign: "right" // Align to the right
                    }}>{resData && resData.info ? resData.info.costForTwo : props.price || "₹200 for two"}</h4>
                </div>
                <div style={{
                    color: "#8a584b",
                    fontSize: "11px",
                    fontWeight: "600",
                    display: "flex",
                    alignItems: "center",
                    height: "24px", // Increased from 20px to 24px for better visibility
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    width: "100%", // Ensure full width
                    marginTop: "4px" // Add some space from the elements above
                }}>
                    <img
                        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/v1634558776/swiggy_one/OneIcon_3x.png"
                        alt="Swiggy One"
                        style={{ width: "18px", height: "18px", marginRight: "4px", flexShrink: 0 }}
                    />
                    <span style={{ 
                        overflow: "hidden", 
                        textOverflow: "ellipsis", 
                        whiteSpace: "nowrap",
                        width: "100%" // Use full available width
                    }}>
                        {resData && resData.info && resData.info.aggregatedDiscountInfoV3 
                            ? `${resData.info.aggregatedDiscountInfoV3.header} ${resData.info.aggregatedDiscountInfoV3.subHeader}`
                            : "50% off up to ₹100"}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default RestaurantCard;
