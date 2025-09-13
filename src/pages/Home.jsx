import React from "react";
import { useAppContext } from "../context/AppContext";

export default function Home() {
  const { count, setCount } = useAppContext();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      <p className="mb-4">Counter: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Increment
      </button>
    </div>
  );
}
