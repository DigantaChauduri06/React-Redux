import { DeleteOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../Store/cartSlice";

const ProductList = ({ product }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(removeFromCart(product.id));
  };
  return (
    <div className="p-2 bg-gray-200 rounded-lg mt-4 flex flex-row justify-between w-3/4 align-middle items-center">
      <img src={product.image} className="h-10" />
      <p className="font-bold">{product.title}</p>
      <div className="flex gap-16">
        <p className="font-semibold">$ {product.price}</p>

        <DeleteOutlined style={{ fontSize: "30px" }} onClick={handleClick} />
      </div>
    </div>
  );
};
export default ProductList;
