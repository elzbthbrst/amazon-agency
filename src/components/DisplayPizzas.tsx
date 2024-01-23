import { FC } from "react";
import TPizza from "../models/pizza";
import PizzaItem from "./PizzaItem";
interface DisplayPizzasProps {
  pizzaList: TPizza[];
  updatePizza: (newPizza: TPizza) => void;
  deletePizza: (id: number) => void;
}
const DisplayPizzas: FC<DisplayPizzasProps> = ({ pizzaList, updatePizza, deletePizza }) => {
  return (
    <div className="container">
      {pizzaList.map((pizza) => (
        <PizzaItem 
        key={pizza.id} 
        pizza={pizza} 
        updatePizza={updatePizza} 
        deletePizza= {deletePizza}/>
      ))}
    </div>
  );
};

export default DisplayPizzas;
