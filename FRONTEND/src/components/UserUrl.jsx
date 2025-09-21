import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllUserUrls } from "../apis/user.api";

const UserUrl = () => {
  const {
    data: urls,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["userUrls"],
    queryFn: getAllUserUrls,
    refetchInterval: 30000, // Refetch every 30 seconds to update click counts
    staleTime: 0, // Consider data stale immediately so it refetches when invalidated
  });
  const [copiedId, setCopiedId] = useState(null);
  const handleCopy = (url, id) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);

    // Reset the copied state after 2 seconds
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center my-8">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded my-4">
        Error loading your URLs: {error.message}
      </div>
    );
  }

  if (!urls.urls || urls.urls.length === 0) {
    return (
      <div className="text-center text-gray-500 my-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <svg
          className="w-12 h-12 mx-auto text-gray-400 mb-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          ></path>
        </svg>
        <p className="text-lg font-medium">No URLs found</p>
        <p className="mt-1">You haven't created any shortened URLs yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {urls.urls.reverse().map((url) => (
        <div
          key={url._id}
          className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-200"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            {/* URL Info */}
            <div className="flex-1 min-w-0">
              <div className="mb-3">
                <p className="text-sm font-medium text-gray-500 mb-1">
                  Original URL
                </p>
                <p className="text-gray-900 truncate text-sm lg:text-base">
                  {url.full_url}
                </p>
              </div>

              <div className="mb-3">
                <p className="text-sm font-medium text-gray-500 mb-1">
                  Short URL
                </p>
                <a
                  href={`http://localhost:3000/${url.short_url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline font-mono text-sm lg:text-base break-all"
                >
                  localhost:3000/{url.short_url}
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    ></path>
                  </svg>
                  <span className="text-sm text-gray-600">
                    {url.clicks} {url.clicks === 1 ? "click" : "clicks"}
                  </span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-3">
              <button
                onClick={() =>
                  handleCopy(`http://localhost:3000/${url.short_url}`, url._id)
                }
                className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm transition-all duration-200 ${
                  copiedId === url._id
                    ? "bg-green-600 text-white hover:bg-green-700 transform scale-105"
                    : "bg-blue-600 text-white hover:bg-blue-700 hover:scale-105"
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
              >
                {copiedId === url._id ? (
                  <>
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Copied!
                  </>
                ) : (
                  <>
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                      ></path>
                    </svg>
                    Copy
                  </>
                )}
              </button>

              <a
                href={`http://localhost:3000/${url.short_url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 hover:scale-105"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  ></path>
                </svg>
                Visit
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserUrl;
