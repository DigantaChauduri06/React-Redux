import { useSelector } from "react-redux";
import ProductList from "../Components/ProductList";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div>
      <h3 className="font-bold text-3xl text-center my-4">Cart</h3>
      {/* List */}
      <div className="flex flex-col items-center">
        {cart?.map((item) => (
          <ProductList key={Math.random() * 30000} product={item} />
        ))}
      </div>
    </div>
  );
};
export default Cart;
