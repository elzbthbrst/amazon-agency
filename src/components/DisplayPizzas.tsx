import { FC } from "react";
import TPizza from "../models/pizza";
import PizzaItem from "./PizzaItem";
interface DisplayPizzasProps {
    pizzaList : TPizza[];
}
const DisplayPizzas : FC<DisplayPizzasProps> = ({pizzaList}) => {
return (
    <div className="container">
        {pizzaList.map((pizza) => <PizzaItem key={pizza.id} pizza = {pizza}/>)}
    </div>
)
}

export default DisplayPizzas