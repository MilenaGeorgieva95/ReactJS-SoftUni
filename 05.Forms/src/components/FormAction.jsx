import { useFormStatus } from "react-dom";

const wait = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Wait is over!");
    }, time);
  });
};

export default function FormAction() {
  const formActionHandler = async (formData) => {
    await wait(1500);
    console.log(formData.get("username"));
    const formObjData = Object.fromEntries(formData);
  };

  return (
    <>
      <h2 className="text-2xl font-semibold text-center mb-6">Form Action</h2>

      <form
        action={formActionHandler}
        className="bg-white p-8 rounded-lg shadow-lg w-96 mx-auto"
      >
        <div className="mb-4">
          <label
            htmlFor="username4"
            className="block text-sm font-medium text-gray-700"
          >
            Username:
          </label>
          <input
            type="text"
            id="username4"
            name="username"
            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password4"
            className="block text-sm font-medium text-gray-700"
          >
            Password:
          </label>
          <input
            type="text"
            id="password4"
            name="password"
            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <Submit />
      </form>
    </>
  );
}

function Submit() {
  const { pending, data: formData, method, action } = useFormStatus();
  console.log(formData?.get("username"));

  return (
    <div>
      <input
        //! formAction={formActionHandler}
        type="submit"
        value="Login"
        disabled={pending}
        className={`w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          pending ? "opacity-50 cursor-not-allowed" : ""
        }`}
      />
    </div>
  );
}

//! value, defaultValue, placeholder
