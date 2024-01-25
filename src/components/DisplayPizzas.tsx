import { FC } from "react";
import PizzaItem from "./PizzaItem";
import { useAppSelector } from "../hooks";

const DisplayPizzas: FC = () => {
  const list = useAppSelector((state) => state.list);
  return (
    <div className="container">
      {list.map((pizza) => (
        <PizzaItem key={pizza.id} pizza={pizza} />
      ))}
    </div>
  );
};

export default DisplayPizzas;
