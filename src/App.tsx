import {
  Registration,
  type FormDataStructure,
} from "./components/Registration";

export const App = () => {
  const handleFormSubmit = (registrationForm: FormDataStructure) => {
    console.log("Registred user:", registrationForm);
  };

  return (
    <div className="container">
      <Registration onFormSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;
