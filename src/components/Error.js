import React from "react";
import { useRouteError, Link } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.log("Route Error:", error);

    return (
        <div className="min-h-screen bg-background flex items-center justify-center px-4">
            <div className="max-w-md w-full text-center">
                {/* Error Illustration */}
                <div className="mb-8">
                    <div className="w-32 h-32 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-6">
                        <svg className="w-16 h-16 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                    </div>

                    <div className="space-y-2">
                        <h1 className="text-6xl font-bold text-red-500">
                            {error?.status || "404"}
                        </h1>
                        <h2 className="text-2xl font-semibold text-textPrimary">
                            {error?.status === 404 ? "Page Not Found" : "Something Went Wrong"}
                        </h2>
                    </div>
                </div>

                {/* Error Message */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                    <h3 className="text-lg font-semibold text-textPrimary mb-3">
                        {error?.statusText || "Oops! An unexpected error occurred"}
                    </h3>

                    {error?.data && (
                        <p className="text-textSecondary mb-4 text-sm">
                            {error.data}
                        </p>
                    )}

                    {error?.status === 404 ? (
                        <p className="text-textSecondary text-sm">
                            The page you're looking for doesn't exist or has been moved.
                        </p>
                    ) : (
                        <p className="text-textSecondary text-sm">
                            We apologize for the inconvenience. Please try again or contact support if the problem persists.
                        </p>
                    )}
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                    <Link
                        to="/"
                        className="block w-full btn-primary py-3 text-center font-semibold"
                    >
                        Back to Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="block w-full btn-secondary py-3 text-center font-medium"
                    >
                        Go Back
                    </button>
                </div>

                {/* Additional Help */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                    <p className="text-sm text-textSecondary mb-3">
                        Need help? Contact our support team
                    </p>
                    <div className="flex justify-center space-x-4">
                        <Link
                            to="/contact"
                            className="text-primary hover:text-orange-600 text-sm font-medium transition-colors"
                        >
                            Contact Support
                        </Link>
                        <a
                            href="mailto:support@fooddelivery.com"
                            className="text-primary hover:text-orange-600 text-sm font-medium transition-colors"
                        >
                            Email Us
                        </a>
                    </div>
                </div>

                {/* Debug Info (Development Only) */}
                {process.env.NODE_ENV === 'development' && error && (
                    <div className="mt-8 p-4 bg-gray-100 rounded-lg text-left">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Debug Information:</h4>
                        <pre className="text-xs text-gray-600 overflow-auto">
                            {JSON.stringify(
                                {
                                    status: error.status,
                                    statusText: error.statusText,
                                    data: error.data,
                                    message: error.message
                                },
                                null,
                                2
                            )}
                        </pre>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Error;