import React from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div className="min-h-screen bg-background py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl lg:text-5xl font-bold text-textPrimary mb-6">
                        About Our Platform
                    </h1>
                    <p className="text-xl text-textSecondary max-w-2xl mx-auto leading-relaxed">
                        We are a passionate team of food lovers dedicated to bringing the best culinary experiences
                        directly to your doorstep.
                    </p>
                </div>

                {/* Mission Section */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-textPrimary mb-4">Our Mission</h2>
                            <p className="text-textSecondary leading-relaxed mb-6">
                                To revolutionize food delivery by connecting food enthusiasts with the finest restaurants
                                in their area. We believe everyone deserves access to delicious, quality meals delivered
                                with speed and care.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3">
                                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                                        </svg>
                                    </div>
                                    <span className="text-textPrimary">Fast & Reliable Delivery</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                                        </svg>
                                    </div>
                                    <span className="text-textPrimary">Quality Food Partners</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                                        </svg>
                                    </div>
                                    <span className="text-textPrimary">Exceptional Customer Service</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="w-64 h-64 bg-gradient-to-br from-primary to-orange-600 rounded-full flex items-center justify-center">
                                <svg className="w-32 h-32 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4m-2.4 0L5.4 5H19m-7 8v8a2 2 0 01-2 2H8a2 2 0 01-2-2v-8m8 0V9a2 2 0 00-2-2H8a2 2 0 00-2 2v4.01" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                        <div className="text-3xl font-bold text-primary mb-2">500+</div>
                        <div className="text-textSecondary">Restaurant Partners</div>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                        <div className="text-3xl font-bold text-primary mb-2">50K+</div>
                        <div className="text-textSecondary">Happy Customers</div>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                        <div className="text-3xl font-bold text-primary mb-2">100K+</div>
                        <div className="text-textSecondary">Orders Delivered</div>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                        <div className="text-3xl font-bold text-primary mb-2">25+</div>
                        <div className="text-textSecondary">Cities Served</div>
                    </div>
                </div>

                {/* Team Section */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-textPrimary text-center mb-8">Meet Our Team</h2>
                    <div className="grid lg:grid-cols-2 gap-8">
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                            <User
                                name="Akshay Saini (Functional Component)"
                                location="Lucknow"
                                contact="@akshay"
                            />
                        </div>
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                            <UserClass
                                name="Gurpreet (Class Component)"
                                location="Lucknow"
                                contact="@gurpreet"
                            />
                        </div>
                    </div>
                </div>

                {/* Values Section */}
                <div className="bg-gradient-to-r from-primary to-orange-600 rounded-2xl p-8 text-white">
                    <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Customer First</h3>
                            <p className="text-white/90">Every decision we make is centered around delivering the best experience for our customers.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                            <p className="text-white/90">We maintain the highest standards of food quality and delivery service excellence.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                            <p className="text-white/90">We continuously innovate to improve our platform and enhance user experience.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;