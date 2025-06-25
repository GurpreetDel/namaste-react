import React from "react";

// Higher Order Component for Promoted Label
const withPromotedLabel = (WrappedComponent) => {
    return (props) => {
        return (
            <div className="relative">
                <label className="absolute top-2 left-2 bg-black text-pink-50 px-3 py-1 rounded-lg text-xs font-medium z-10 shadow-md">
                    Opened
                </label>
                <WrappedComponent {...props} />
            </div>
        );
    };
};

export default withPromotedLabel;