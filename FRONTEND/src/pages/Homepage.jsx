import React from "react";
import Url_form from "../components/UrlForm";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">URL Shortener</h1>
        <Url_form />
      </div>
    </div>
  );
};

export default Homepage;
