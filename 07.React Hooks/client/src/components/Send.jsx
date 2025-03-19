import { useContext, use } from "react";
import { UserContext } from "../contexts/UserContext";
import useForm from "../hooks/useForm";

const url = "http://localhost:3030/jsonstore/messages";

export default function Send() {
  const { user } = useContext(UserContext);

  // if(true){
  //   const {user} = use(UserContext)
  // }

  const formSubmit = async (values) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        author: values.author,
        content: values.message,
        username: user,
      }),
    };

    const res = await fetch(url, options);
    console.log(res);
  };

  const { values, changeHandler, submitHandler } = useForm(
    {
      message: "",
      author: "",
    },
    formSubmit
  );

  return (
    <>
      <h1>Send</h1>
      <div style={{ maxWidth: "300px" }}>
        <form action={submitHandler}>
          <input
            onChange={changeHandler}
            value={values.author}
            type="text"
            name="author"
            placeholder="Basic usage"
          />
          <input
            onChange={changeHandler}
            value={values.message}
            type="text"
            name="message"
            placeholder="Basic usage"
          />
          <button>Send</button>
        </form>
      </div>
    </>
  );
}
