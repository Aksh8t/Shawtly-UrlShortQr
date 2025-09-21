import React, { useState } from "react";
import { createShortUrl } from "../apis/shortUrl.api";
import { useSelector } from "react-redux";
import { queryClient } from "../main";

const UrlForm = () => {
  const [url, setUrl] = useState("https://www.google.com");
  const [shortUrl, setShortUrl] = useState();
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(null);
  const [customSlug, setCustomSlug] = useState("");
  const { isAuthenticated } = useSelector((state) => state.auth);

  const handleSubmit = async () => {
    try {
      const shortUrl = await createShortUrl(url, customSlug);
      setShortUrl(shortUrl);
      queryClient.invalidateQueries({ queryKey: ["userUrls"] });
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);

    // Reset the copied state after 2 seconds
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div>
        <label
          htmlFor="url"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Enter your URL
        </label>
        <input
          type="url"
          id="url"
          value={url}
          onInput={(event) => setUrl(event.target.value)}
          placeholder="https://example.com"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
        />
      </div>

      {isAuthenticated && (
        <div>
          <label
            htmlFor="customSlug"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Custom URL (optional)
          </label>
          <input
            type="text"
            id="customSlug"
            value={customSlug}
            onChange={(event) => setCustomSlug(event.target.value)}
            placeholder="Enter custom slug"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          />
          <p className="text-xs text-gray-500 mt-1">
            Leave empty for auto-generated short URL
          </p>
        </div>
      )}

      <button
        onClick={handleSubmit}
        type="submit"
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 transition-all duration-200 transform hover:scale-[1.02]"
      >
        Shorten URL
      </button>

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg flex items-center">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
          {error}
        </div>
      )}

      {shortUrl && (
        <div className="mt-6 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <svg
              className="w-5 h-5 mr-2 text-green-600"
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
            Your shortened URL is ready!
          </h3>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              readOnly
              value={shortUrl}
              className="flex-1 p-3 border border-gray-300 rounded-l-lg bg-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleCopy}
              className={`px-6 py-3 rounded-r-lg font-semibold transition-all duration-200 flex items-center space-x-2 ${
                copied
                  ? "bg-green-500 text-white hover:bg-green-600"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              {copied ? (
                <>
                  <svg
                    className="w-4 h-4"
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
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <svg
                    className="w-4 h-4"
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
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Click the copy button to share your shortened URL
          </p>
        </div>
      )}
    </div>
  );
};

export default UrlForm;
