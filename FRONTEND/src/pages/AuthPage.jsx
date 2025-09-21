import React, { useState } from "react";
import { Link } from "@tanstack/react-router";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

const AuthPage = () => {
  const [login, setLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link
            to="/"
            className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            URL Shortener
          </Link>
          <p className="text-gray-600 mt-2">
            {login
              ? "Welcome back! Sign in to your account"
              : "Create your account to get started"}
          </p>
        </div>

        {/* Auth Form */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {login ? (
            <LoginForm state={setLogin} />
          ) : (
            <RegisterForm state={setLogin} />
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <Link
            to="/"
            className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
