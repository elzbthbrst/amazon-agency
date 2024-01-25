import "./App.css";
import { FC } from "react";
import AddPizzaForm from "./components/Form";
import DisplayPizzas from "./components/DisplayPizzas";

const App: FC = () => {
  return (
    <div className="App">
      <div className="wrap">
        <div className="heading">Наша Піццерія</div>
        <AddPizzaForm />
        <DisplayPizzas />
      </div>
    </div>
  );
};

export default App;
