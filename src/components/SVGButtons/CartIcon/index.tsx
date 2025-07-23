import { useCartContext } from "../../../context/CartContext";
import emptyCartIcon from "../../../assets/cart.svg";
import { ItemsCount, Image } from "./style";

function CartIcon() {
  const { cartItems } = useCartContext();

  return (
    <>
      <Image src={emptyCartIcon} alt="Cart Icon" />
      {cartItems > 0 && <ItemsCount>{cartItems}</ItemsCount>}
    </>
  );
}

export default CartIcon;
