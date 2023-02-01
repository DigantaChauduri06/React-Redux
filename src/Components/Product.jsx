import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

const Product = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const data = await axios.get("https://fakestoreapi.com/products");
    setProducts(data.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="grid grid-cols-4 gap-4 m-4 mx-5">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
export default Product;
