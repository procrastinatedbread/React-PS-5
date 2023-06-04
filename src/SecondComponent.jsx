import { useState, useEffect } from "react";
import { fakeFetch } from "./utils";

const SecondComponent = () => {
  const [products, setProducts] = useState([]);
  const url = "https://example.com/api/products";
  useEffect(() => {
    const innerFunction = async () => {
      const { data } = await fakeFetch(url);
      setProducts(data.products);
    };
    innerFunction();
  }, []);
  return (
    <>
      <h1>Products</h1>
      <button
        onClick={() => {
          setProducts(products.filter(({ quantity }) => quantity > 20));
        }}
      >
        Show products with quantity more than 20
      </button>
      <button
        onClick={() => {
          setProducts(products.filter(({ quantity }) => quantity > 20));
        }}
      >
        Filter
      </button>

      <ul>
        {products.map(({ name, price, quantity }) => {
          return (
            <li>
              {name}-{price}-{quantity}
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default SecondComponent;
