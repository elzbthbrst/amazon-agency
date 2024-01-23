import "./App.css";
import { FC, useState } from "react";
import AddPizzaForm from "./components/Form";
import TPizza from "./models/pizza";
import DisplayPizzas from "./components/DisplayPizzas";

const App: FC = () => {
  const [pizzaList, setPizzaList] = useState<TPizza[]>([]);

  const addPizza = (newPizza: TPizza) => {
    setPizzaList([...pizzaList, newPizza]);
  };
  const updatePizza = (newPizza: TPizza) => {
    setPizzaList(
      pizzaList.map((pizza) => (pizza.id === newPizza.id ? newPizza : pizza))
    );
  };

  const deletePizza = (id: number) => {
    const newPizzasList = pizzaList.filter(pizza => pizza.id !== id)
    setPizzaList(newPizzasList);
  }
  console.log(pizzaList);

  return (
    <div className="App">
      <div className="wrap">
        <div className="heading">Наша Піццерія</div>
        <AddPizzaForm addPizza={addPizza} />
        <DisplayPizzas 
        pizzaList={pizzaList} 
        updatePizza ={updatePizza}
        deletePizza = {deletePizza}/>
      </div>
    </div>
  );
};

export default App;
