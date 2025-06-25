import React from "react";

const Grocery = () => {
    const categories = [
        {
            id: 1,
            name: "Fresh Fruits",
            icon: "🍎",
            items: ["Apples", "Bananas", "Oranges", "Grapes"],
            color: "from-green-400 to-green-600"
        },
        {
            id: 2,
            name: "Vegetables",
            icon: "🥕",
            items: ["Carrots", "Broccoli", "Spinach", "Tomatoes"],
            color: "from-emerald-400 to-emerald-600"
        },
        {
            id: 3,
            name: "Dairy Products",
            icon: "🥛",
            items: ["Milk", "Cheese", "Yogurt", "Butter"],
            color: "from-blue-400 to-blue-600"
        },
        {
            id: 4,
            name: "Bakery",
            icon: "🍞",
            items: ["Bread", "Croissants", "Muffins", "Cookies"],
            color: "from-yellow-400 to-yellow-600"
        },
        {
            id: 5,
            name: "Meat & Seafood",
            icon: "🍖",
            items: ["Chicken", "Beef", "Fish", "Prawns"],
            color: "from-red-400 to-red-600"
        },
        {
            id: 6,
            name: "Pantry Essentials",
            icon: "🏺",
            items: ["Rice", "Pasta", "Oil", "Spices"],
            color: "from-purple-400 to-purple-600"
        }
    ];

    return (
        <div className="min-h-screen bg-background py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-orange-600 rounded-full mb-6">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m-2.4 0L5.4 5H19M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                        </svg>
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-bold text-textPrimary mb-4">
                        Grocery Online Store
                    </h1>
                    <p className="text-xl text-textSecondary max-w-2xl mx-auto">
                        Fresh groceries delivered to your doorstep. We have a wide variety of products
                        to fulfill all your household needs.
                    </p>
                </div>

                {/* Coming Soon Banner */}
                <div className="bg-gradient-to-r from-primary to-orange-600 rounded-2xl p-8 mb-12 text-white text-center">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold mb-4">🚀 Coming Soon!</h2>
                        <p className="text-lg mb-6">
                            We're working hard to bring you the best grocery shopping experience.
                            Our online store will feature hundreds of products across multiple categories.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <div className="bg-white/20 px-4 py-2 rounded-full">
                                <span className="text-sm font-semibold">✨ Fresh Products</span>
                            </div>
                            <div className="bg-white/20 px-4 py-2 rounded-full">
                                <span className="text-sm font-semibold">🚛 Fast Delivery</span>
                            </div>
                            <div className="bg-white/20 px-4 py-2 rounded-full">
                                <span className="text-sm font-semibold">💳 Easy Payment</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Categories Preview */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-textPrimary text-center mb-8">
                        Product Categories
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categories.map((category) => (
                            <div key={category.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className={`bg-gradient-to-br ${category.color} p-6 text-white`}>
                                    <div className="flex items-center space-x-3 mb-4">
                                        <span className="text-3xl">{category.icon}</span>
                                        <h3 className="text-xl font-bold">{category.name}</h3>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <p className="text-textSecondary mb-4">Popular items in this category:</p>
                                    <div className="space-y-2">
                                        {category.items.map((item, index) => (
                                            <div key={index} className="flex items-center space-x-2">
                                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                                <span className="text-sm text-textPrimary">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <button className="w-full mt-4 bg-gray-100 text-textSecondary py-2 rounded-lg text-sm font-medium cursor-not-allowed">
                                        Coming Soon
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Features Section */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
                    <h2 className="text-2xl font-bold text-textPrimary text-center mb-8">
                        Why Choose Our Grocery Store?
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-textPrimary mb-2">Quality Assured</h3>
                            <p className="text-textSecondary text-sm">
                                All our products are carefully selected and quality checked before delivery.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-textPrimary mb-2">Fast Delivery</h3>
                            <p className="text-textSecondary text-sm">
                                Get your groceries delivered within 2-4 hours of placing your order.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-textPrimary mb-2">Best Prices</h3>
                            <p className="text-textSecondary text-sm">
                                Competitive pricing with regular discounts and special offers.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Newsletter Signup */}
                <div className="text-center">
                    <div className="bg-gray-50 rounded-2xl p-8 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-textPrimary mb-4">
                            Get Notified When We Launch
                        </h3>
                        <p className="text-textSecondary mb-6">
                            Be the first to know when our grocery store goes live and get exclusive launch offers!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                            />
                            <button className="btn-primary px-6 py-3 whitespace-nowrap">
                                Notify Me
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Grocery;