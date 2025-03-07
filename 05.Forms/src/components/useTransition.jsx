import { useState, useTransition } from "react";

const wait = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Wait is over!");
    }, time);
  });
};

export default function UseTransition() {
  const [pending, startTransition] = useTransition();
  const [name, setName] = useState("");

  const submitClientAction = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const character = formData.get("character");

    startTransition(async () => {
      const res = await fetch("https://swapi.dev/api/people/" + character);
      const result = await res.json();

      startTransition(() => setName(result.name));
    });
  };

  return (
    <>
      <h2 className="text-2xl font-semibold text-center mb-6">
        Use Transition
      </h2>
      <p>
        Every function which starts transition is called client action.
        Transition is low priority render.
      </p>

      <form
        onSubmit={submitClientAction}
        className="bg-white p-8 rounded-lg shadow-lg w-96 mx-auto"
      >
        <div className="mb-4">
          <label
            htmlFor="character"
            className="block text-sm font-medium text-gray-700"
          >
            Character: {name}
          </label>
          <input
            type="text"
            id="character"
            name="character"
            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <input
            type="submit"
            value="Get"
            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </form>
    </>
  );
}

//! value, defaultValue, placeholder
