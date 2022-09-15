import { createContext } from "react";
import INITIAL_CART_CONTENT from "../../mockData/InitialCartContent";

const CartContext = createContext(INITIAL_CART_CONTENT);

export default CartContext;