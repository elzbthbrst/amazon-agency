import { ChangeEvent, FC, FormEvent, useState } from "react";
import "./styles.css";
import { useAppDispatch } from "../hooks";
import { addPizza } from "../store/pizzaSlice";

const initialState = {
  title: "",
  price: "",
  img: "",
};

const AddPizzaForm: FC = () => {
  const [newPizza, setNewPizza] = useState<{
    title: string;
    price: string;
    img: string;
  }>(initialState);
  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewPizza({ ...newPizza, [name]: value });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, price, img } = newPizza;
    if (title && price && img) {
      dispatch(addPizza({ title, img, price: Number(price), id: Date.now() }));
    }
    setNewPizza(initialState);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="Назва"
        onChange={handleChange}
        value={newPizza.title}
      />
      <input
        name="price"
        type="text"
        placeholder="Вартість"
        onChange={handleChange}
        value={newPizza.price}
      />
      <input
        name="img"
        type="text"
        placeholder="Зображення"
        onChange={handleChange}
        value={newPizza.img}
      />
      <button type="submit"> + Додати у меню</button>
    </form>
  );
};

export default AddPizzaForm;
