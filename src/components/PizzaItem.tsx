import { FC, useState } from "react";
import TPizza from "../models/pizza";
import EditPizzaForm from "./EditPizzaForm";
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";
import { useAppDispatch } from "../hooks";
import { deletePizza } from "../store/pizzaSlice";
interface PizzaItemProps {
  pizza: TPizza;
}
const PizzaItem: FC<PizzaItemProps> = ({ pizza }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const handleToggleEdit = () => {
    setEdit(!edit);
  };
  return (
    <div className="pizza">
      <img src={`/amazon-agency/images/${pizza.img}`} alt={pizza.title} />
      <h2>{pizza.title}</h2>
      <span>{pizza.price}₴ </span>

      <div className="pizza-controls">
        <AiFillEdit onClick={handleToggleEdit} />
        <AiOutlineDelete onClick={() => dispatch(deletePizza(pizza.id))} />
      </div>
      {edit ? (
        <EditPizzaForm data={pizza} handleToggleEdit={handleToggleEdit} />
      ) : null}
    </div>
  );
};

export default PizzaItem;
