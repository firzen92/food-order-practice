import { createContext, useState } from "react";

const MealContext = createContext({
  addedToCart: [],
  updateCart: (item) => {},
});

export const MealContextProvider = (props) => {
  const [addedToCart, setAddedToCart] = useState([
    { id: "m1", name: "Sushi", amount: 2, price: 22.99 },
    { id: "m2", name: "Green Bowl", amount: 1, price: 18.99 },
  ]);

  const updateCart = (item) => {
    let newCart = addedToCart.map((val) => {
      if (val.name == item.name) {
        val = item;
      }
      return val;
    });
    setAddedToCart(newCart);
  };

  return (
    <MealContext.Provider value={{
        addedToCart: addedToCart,
        updateCart: updateCart
    }}>{props.children}</MealContext.Provider>
  );
};

export default MealContext;
