import ControlledForm from "./components/ControlledForm";
import FormAction from "./components/FormAction";
import RefUncontrolledForm from "./components/RefUncontrolledForm";
import UncontrolledForm from "./components/uncontrolledForm";
import UnifiedControlledForm from "./components/UnifiedControlledForm";
import UseRef from "./components/UseRef";

function App() {
  return (
    <>
      <UncontrolledForm />
      <ControlledForm />
      <UnifiedControlledForm />
      <UseRef />
      <RefUncontrolledForm />
      <FormAction />
    </>
  );
}

export default App;
