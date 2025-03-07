import ControlledForm from "./components/ControlledForm";
import FormAction from "./components/FormAction";
import RefUncontrolledForm from "./components/RefUncontrolledForm";
import UncontrolledForm from "./components/uncontrolledForm";
import UnifiedControlledForm from "./components/UnifiedControlledForm";
import UseRef from "./components/UseRef";
import UseTransition from "./components/UseTransition";

function App() {
  return (
    <>
      <UncontrolledForm />
      <ControlledForm />
      <UnifiedControlledForm />
      <UseRef />
      <RefUncontrolledForm />
      <FormAction />
      <UseTransition />
    </>
  );
}

export default App;
