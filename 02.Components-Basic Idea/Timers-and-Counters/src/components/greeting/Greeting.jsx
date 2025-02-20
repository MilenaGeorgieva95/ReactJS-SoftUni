import GuestGreeting from "./GuestGreeting";
import UserGreeting from "./UserGreeting";

export default function Greeting(props) {
  return (
    <div>
      {props.isLoggedIn ? (
        <UserGreeting name={props.name} />
      ) : (
        <GuestGreeting />
      )}
    </div>
  );
}
