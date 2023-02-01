import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { fetchProducts, STATUS } from "../Store/ProductSlice";
import { useDispatch, useSelector } from "react-redux";

const Product = () => {
  // const [products, setProducts] = useState([]);
  const { data, status } = useSelector((state) => state.product);
  // console.log(products);
  const dispatch = useDispatch();
  // const fetchProducts = async () => {
  //   const data = await axios.get("https://fakestoreapi.com/products");
  //   setProducts(data.data);
  // };

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <>
      {status === STATUS.LOADING && (
        <div className="text-center text-2xl font-bold">Loading...</div>
      )}
      {status === STATUS.ERROR && (
        <div className="text-center text-2xl font-bold">Error...</div>
      )}
      <div className="grid grid-cols-4 gap-4 m-4 mx-5">
        {data?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
export default Product;
