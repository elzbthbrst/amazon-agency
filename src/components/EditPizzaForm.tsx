import { ChangeEvent, FC, FormEvent, useState } from "react";
import "./styles.css";
import TPizza from "../models/pizza";
import { useAppDispatch } from "../hooks";
import { updatePizza } from "../store/pizzaSlice";

interface EditPizzaFormProps {
  data: TPizza;
  handleToggleEdit: () => void;
}

const EditPizzaForm: FC<EditPizzaFormProps> = ({ data, handleToggleEdit }) => {
  const [editPizza, setEditPizza] = useState<TPizza>(data);
  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditPizza({ ...editPizza, [name]: value });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, price, img } = editPizza;
    if (title && price && img) {
      dispatch(updatePizza(editPizza));
      handleToggleEdit();
    }
  };
  return (
    <form onSubmit={handleSubmit} className="edit-form">
      <input
        name="title"
        type="text"
        placeholder="Назва"
        onChange={handleChange}
        value={editPizza.title}
      />
      <input
        name="price"
        type="text"
        placeholder="Вартість"
        onChange={handleChange}
        value={editPizza.price}
      />
      <input
        name="img"
        type="text"
        placeholder="Зображення"
        onChange={handleChange}
        value={editPizza.img}
      />
      <button type="submit">Підтвердити</button>
    </form>
  );
};

export default EditPizzaForm;
