import { useCartContext } from "../../../context/CartContext";
import emptyCartIcon from "../../../assets/cart.svg";
import { Container } from "./styles";

function CartIcon() {
  const { cartItems } = useCartContext();

  return (
    <>
      <img src={emptyCartIcon} alt="Cart Icon" />
      {cartItems && <div>{cartItems}</div>}
    </>
  );
}

export default CartIcon;
