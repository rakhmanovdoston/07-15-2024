import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../api";

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    async function fetchProductId() {
      const response = await api.get(`/products/${productId}`);
      setProduct(response.data);
    }

    fetchProductId();
  }, [productId]);

  return (
    <div>
      {product && (
        <>
          <img src={product.image_url} alt="" />
          <h2>{product.name}</h2>
        </>
      )}
    </div>
  );
};

export default Product;
