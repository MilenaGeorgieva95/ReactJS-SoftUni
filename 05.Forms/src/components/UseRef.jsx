import { useEffect, useRef, useState } from "react";

export default function UseRef() {
  const refMounted = useRef(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (refMounted.current) {
      console.log(count, " Updated");
    }

    refMounted.current = true;
  }, [count]);

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-96 mx-auto">
      <h2 className="text-2xl font-semibold text-center mb-6">Use Ref</h2>
      <button
        className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
      <div className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-center">
        {count}
      </div>
    </div>
  );
}
