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
      <h2>Uncontrolled Form</h2>

      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="username">Username: </label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input type="text" id="password" name="password" />
        </div>
        <div>
          <input type="submit" value="Login" disabled={pending} />
        </div>
      </form>
    </>
  );
}

//! value, defaultValue, placeholder
