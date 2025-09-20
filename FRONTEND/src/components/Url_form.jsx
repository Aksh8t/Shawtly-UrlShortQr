import React, { useState } from "react";
import axios from "axios";

const Url_form = () => {
  const [url, setUrl] = useState();
  const submithandle = async () => {
    const data = await axios.post("https://localhost:3000/api/create", { url });
  };

  return (
    <div className="space-y-4">
      <div>
        <label
          htmlFor="url"
          className="block text-sm font-medium text-gray-700"
        >
          Enter your URL
        </label>
        <input
          type="url"
          id="url"
          value={url}
          onInput={(e) => setUrl(e.target.value)}
          placeholder="https://example.com"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <button
        onClick={submithandle}
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Shorten URL
      </button>
    </div>
  );
};

export default Url_form;
