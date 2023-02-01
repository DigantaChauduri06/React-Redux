import { addToCart, removeFromCart } from "../Store/cartSlice";
import { useDispatch } from "react-redux";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="border-2 bg-gray-100 px-6 py-3 flex flex-col justify-around rounded-none">
      <img src={product.image} className="h-44" />
      <h3 className="font-bold">{product.title}</h3>
      <h3 className="font-semibold">$ {product.price}</h3>
      <button
        className="border-2 bg-purple-800 p-4 py-2 text-white rounded-xl"
        onClick={handleAdd}
      >
        Add to cart
      </button>
    </div>
  );
};
export default ProductCard;
