import { FC, useState } from "react";
import TPizza from "../models/pizza";
import EditPizzaForm from "./EditPizzaForm";
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";
interface PizzaItemProps {
  pizza: TPizza;
  updatePizza: (newPizza: TPizza) => void;
  deletePizza: (id: number) => void;
}
const PizzaItem: FC<PizzaItemProps> = ({ pizza, updatePizza, deletePizza }) => {
  const [edit, setEdit] = useState<boolean>(false);

  const handleToggleEdit = () => {
    setEdit(!edit);
  };
  const handleDeletePizza = () => {
    deletePizza(pizza.id)
  };
  return (
    <div className="pizza">
      <img src={`/amazon-agency/images/${pizza.img}`} alt={pizza.title} />
      <h2>{pizza.title}</h2>
      <span>{pizza.price}₴ </span>

      <div className="pizza-controls">
        <AiFillEdit onClick={handleToggleEdit} />
        <AiOutlineDelete onClick={handleDeletePizza}/>
      </div>
      {edit ? <EditPizzaForm 
      data={pizza} 
      updatePizza = {updatePizza}
      handleToggleEdit = {handleToggleEdit}/> : null}
    </div>
  );
};

export default PizzaItem;
