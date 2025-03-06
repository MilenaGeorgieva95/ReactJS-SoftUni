import { useState } from "react";

const wait = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Wait is over!");
    }, time);
  });
};

export default function UnifiedControlledForm() {
  const [pending, setPending] = useState(false);
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    setPending(true);
    await wait(1500);
    setPending(false);
    //! username and password are kept in the state
    console.log(formValues.username, formValues.password);
  };

  const changeHandler = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
    console.log(e.target.checked);
    console.log(e.target.type);

    setFormValues((state) => ({
      ...state,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    }));
  };

  return (
    <>
      <h2 className="text-2xl font-semibold text-center mb-6">
        Unified Controlled Form
      </h2>

      <form
        onSubmit={submitHandler}
        className="bg-white p-8 rounded-lg shadow-lg w-96 mx-auto"
      >
        <div className="mb-4">
          <label
            htmlFor="username2"
            className="block text-sm font-medium text-gray-700"
          >
            Username:
          </label>
          <input
            onChange={changeHandler}
            value={formValues.username}
            type="text"
            id="username2"
            name="username"
            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password2"
            className="block text-sm font-medium text-gray-700"
          >
            Password:
          </label>
          <input
            onChange={changeHandler}
            value={formValues.password}
            type="text"
            id2="password"
            name="password"
            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="rememberMe"
            className=" text-sm font-medium text-gray-700"
          >
            Remember me?
          </label>
          <input
            onChange={changeHandler}
            checked={formValues.rememberMe}
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
            className="mt-2 ml-3 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
