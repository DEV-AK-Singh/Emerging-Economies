import React from "react";

export default function Switch({ checked, onChange, className = "" }) {
  return (
    <div className="flex justify-center items-center relative z-50">
      <h1 className="text-center me-2 font-bold">
        Live Data : 
      </h1>
      <button
        type="button"
        className={`relative inline-flex h-6 w-14 items-center rounded-full transition-colors ${
          checked ? "bg-green-500" : "bg-gray-500"
        } ${className}`}
        onClick={() => onChange(!checked)}
      >
        <span
          className={`flex p-4 h-4 w-4 transform items-center justify-center rounded-full bg-white transition-transform ${
            checked ? "translate-x-6" : "translate-x-0"
          }`}
        >
          {checked ? "✓" : "✕"}
        </span>
      </button>
    </div>
  );
}
