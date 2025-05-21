const Shimmer = () => {
    return (
        <div className="shimmer-container">
            {Array(15).fill("").map((_, index) => (
                <div key={index} className="shimmer-card">
                    <div className="shimmer-img shimmer-animation"></div>
                    <div className="shimmer-details">
                        <div className="shimmer-name shimmer-animation"></div>
                        <div className="shimmer-cuisine shimmer-animation"></div>
                        <div className="shimmer-meta">
                            <div className="shimmer-rating-container">
                                <div className="shimmer-rating shimmer-animation"></div>
                                <div className="shimmer-delivery-time shimmer-animation"></div>
                            </div>
                            <div className="shimmer-price shimmer-animation"></div>
                        </div>
                        <div className="shimmer-offer shimmer-animation"></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Shimmer;
