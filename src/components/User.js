import React, { useState } from "react";

const User = ({ name, location, contact }) => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    return (
        <div className="p-6 bg-white rounded-2xl shadow-lg">
            <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </div>
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">
                    Functional Component
                </span>
            </div>

            <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-semibold text-textPrimary">Counter Demo</h3>
                        <div className="flex items-center space-x-2">
                            <span className="text-2xl font-bold text-primary">{count}</span>
                            <button
                                onClick={handleIncrement}
                                className="btn-primary text-sm"
                            >
                                +1
                            </button>
                        </div>
                    </div>
                    <p className="text-sm text-textSecondary">
                        This demonstrates React functional component state management using useState hook.
                    </p>
                </div>

                <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-sm text-textSecondary">Name</p>
                            <p className="font-semibold text-textPrimary">{name}</p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-sm text-textSecondary">Location</p>
                            <p className="font-semibold text-textPrimary">{location}</p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-sm text-textSecondary">Contact</p>
                            <p className="font-semibold text-textPrimary">{contact}</p>
                        </div>
                    </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                        <span className="text-xs text-textSecondary">Component Type</span>
                        <span className="text-xs font-medium text-blue-600">React Functional</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;