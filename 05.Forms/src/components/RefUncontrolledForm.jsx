import { useRef, useState } from "react";
import "./RefUncontrolledForm.css";

const wait = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Wait is over!");
    }, time);
  });
};

export default function RefUncontrolledForm() {
  const submitRef = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    submitRef.current.disabled = true;
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username");
    const password = formData.get("password");

    await wait(1500);
    submitRef.current.disabled = false;
    console.log(Object.fromEntries(formData));
  };
  return (
    <>
      <h2 className="text-2xl font-semibold text-center mb-6">
        Ref Uncontrolled Form
      </h2>

      <form
        onSubmit={submitHandler}
        className="bg-white p-8 rounded-lg shadow-lg w-96 mx-auto"
      >
        <div className="mb-4">
          <label
            htmlFor="username3"
            className="block text-sm font-medium text-gray-700"
          >
            Username:
          </label>
          <input
            type="text"
            id="username3"
            name="username"
            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password3"
            className="block text-sm font-medium text-gray-700"
          >
            Password:
          </label>
          <input
            type="text"
            id="password3"
            name="password"
            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <Submit ref={submitRef} />
      </form>
    </>
  );
}

function Submit({ ref }) {
  return (
    <div>
      <input
        ref={ref}
        type="submit"
        value="Login"
        className="submitBtn w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

// npm i react@latest react-dom@latest
// npm i -D @types/react@latest @types/react-dom@latest
// npm create vite@latest . -- --template react
