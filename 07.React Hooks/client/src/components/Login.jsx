import useForm from "../hooks/useForm";

const url = "http://localhost:3030/jsonstore/users";

export default function Login({ userLogin }) {
  const formSubmit = async (values) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: values.username,
        password: values.password,
      }),
    };

    const res = await fetch(url, options);
    console.log(res);

    userLogin(values.username);
  };

  const { values, changeHandler, submitHandler } = useForm(
    { username: "", password: "" },
    formSubmit
  );
  return (
    <>
      <h1>Login</h1>
      <div style={{ maxWidth: "300px" }}>
        <form action={submitHandler}>
          <input
            onChange={changeHandler}
            value={values.username}
            type="text"
            name="username"
            placeholder="Basic usage"
          />
          <input
            onChange={changeHandler}
            value={values.password}
            type="text"
            name="password"
            placeholder="Basic usage"
          />
          <button>Send</button>
        </form>
      </div>
    </>
  );
}
