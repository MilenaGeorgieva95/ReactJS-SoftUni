import { useState } from "react";

const wait = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Wait is over!");
    }, time);
  });
};

export default function ControlledForm() {
  const [pending, setPending] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    setPending(true);
    await wait(1500);
    setPending(false);
    //! username and password are kept in the state
    console.log(username, password);
  };

  const userNameChangeHandler = (e) => {
    //executes on every change
    const username = e.target.value;
    console.log(username);
    setUsername(username);
  };

  const userPasswordChangehandler = (e) => {
    const password = e.target.value;
    console.log(password);
    setPassword(password);
  };
  return (
    <>
      <h2 className="text-2xl font-semibold text-center mb-6">
        Controlled Form
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
            onChange={userNameChangeHandler}
            value={username}
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
            onChange={userPasswordChangehandler}
            value={password}
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

//! value use onChange
//! defaultValue, placeholder
