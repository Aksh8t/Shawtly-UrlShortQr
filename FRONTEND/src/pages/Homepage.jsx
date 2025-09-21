import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "@tanstack/react-router";
import { login, logout } from "../store/slice/authSlice";
import { getCurrentUser, logoutUser } from "../apis/user.api";
import UrlForm from "../components/UrlForm";
import UserUrl from "../components/UserUrl";

const Homepage = () => {
  const [showAuth, setShowAuth] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  useEffect(() => {
    // Check if user is already authenticated
    const checkAuth = async () => {
      try {
        const userData = await getCurrentUser();
        if (userData) {
          dispatch(login(userData));
        }
      } catch (error) {
        console.log("User not authenticated");
      }
    };
    checkAuth();
  }, [dispatch]);

  const handleLogout = async () => {
    try {
      await logoutUser();
      dispatch(logout());
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Shorten URLs
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Instantly
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Create short, memorable links that are perfect for sharing. Track
            clicks, manage your links, and boost your online presence.
          </p>

          {/* Auth Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                <span className="text-gray-700">
                  Welcome, {user?.name || "User"}!
                </span>
                <Link
                  to="/dashboard"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Go to Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => {
                    setShowAuth(true);
                    setIsLogin(true);
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Sign In
                </button>
                <button
                  onClick={() => {
                    setShowAuth(true);
                    setIsLogin(false);
                  }}
                  className="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Sign Up
                </button>
              </div>
            )}
          </div>
        </div>

        {/* URL Shortener Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
              {isAuthenticated
                ? "Create Your Short URL"
                : "Try It Now - No Account Required"}
            </h2>
            <UrlForm />
          </div>

          {/* User URLs Section - Only show if authenticated */}
          {isAuthenticated && (
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
                Your Shortened URLs
              </h2>
              <UserUrl />
            </div>
          )}
        </div>

        {/* Features Section */}
        <div className="mt-20 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Why Choose Our URL Shortener?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Lightning Fast</h3>
              <p className="text-gray-600">
                Create short URLs instantly with our optimized service.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Analytics</h3>
              <p className="text-gray-600">
                Track clicks and monitor the performance of your links.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Secure</h3>
              <p className="text-gray-600">
                Your data is protected with enterprise-grade security.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Auth Modal */}
      {showAuth && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 w-full max-w-md relative">
            <button
              onClick={() => setShowAuth(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            {isLogin ? (
              <LoginForm
                state={setIsLogin}
                onSuccess={() => setShowAuth(false)}
              />
            ) : (
              <RegisterForm
                state={setIsLogin}
                onSuccess={() => setShowAuth(false)}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Homepage;
