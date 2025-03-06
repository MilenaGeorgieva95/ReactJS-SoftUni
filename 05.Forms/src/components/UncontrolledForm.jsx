import { useState } from "react";

const wait = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Wait is over!");
    }, time);
  });
};

export default function UncontrolledForm() {
  const [pending, setPending] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setPending(true);
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username");
    const password = formData.get("password");

    await wait(1500);
    setPending(false);

    console.log(Object.fromEntries(formData));
  };
  return (
    <>
      <h2 className="text-2xl font-semibold text-center mb-6">
        Uncontrolled Form
      </h2>

      <form
        onSubmit={submitHandler}
        className="bg-white p-8 rounded-lg shadow-lg w-96 mx-auto"
      >
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password:
          </label>
          <input
            type="text"
            id="password"
            name="password"
            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <input
            type="submit"
            value="Login"
            disabled={pending}
            className={`w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              pending ? "opacity-50 cursor-not-allowed" : ""
            }`}
          />
        </div>
      </form>
    </>
  );
}

//! value, defaultValue, placeholder
