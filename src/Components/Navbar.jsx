import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="flex h-14 bg-purple-500 text-white">
      {/* LOGO */}
      <div className="flex-1 text-start flex items-center ml-6">
        <span className="font-bold text-xl">REDUX STORE</span>
      </div>
      {/* {Content} */}
      <div className="flex flex-1 justify-around text-center items-center">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/cart" className="hover:underline">
          Cart
        </Link>
        <span className="inline-block font-semibold">
          Cart item {cart?.length}
        </span>
      </div>
    </div>
  );
}
export default Navbar;
