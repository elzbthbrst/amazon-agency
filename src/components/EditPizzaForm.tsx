import { ChangeEvent, FC, FormEvent, useState } from "react";
import "./styles.css";
import TPizza from "../models/pizza";

interface EditPizzaFormProps {
  data: TPizza;
  updatePizza: (newPizza: TPizza) => void;
  handleToggleEdit: () => void;
}

const EditPizzaForm: FC<EditPizzaFormProps> = ({ data, updatePizza, handleToggleEdit }) => {
  const [editPizza, setEditPizza] = useState<TPizza>(data);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditPizza({ ...editPizza, [name]: value });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, price, img } = editPizza;
    if (title && price && img) {
      updatePizza(editPizza);
      handleToggleEdit()
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
