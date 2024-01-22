import { FC } from "react";
import TPizza from "../models/pizza";
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";
interface PizzaItemProps {
  pizza: TPizza;
}
const PizzaItem: FC<PizzaItemProps> = ({ pizza }) => {
  return (
    <div className="pizza">
      <img src={`/amazon-agency/images/${pizza.img}`} alt={pizza.title} />
      <h2>{pizza.title}</h2>
      <span>{pizza.price}₴ </span>

      <div className="pizza-controls">
        <AiFillEdit />
        <AiOutlineDelete />
      </div>
    </div>
  );
};

export default PizzaItem;
