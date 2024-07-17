import { useEffect, useState } from "react";

import Cart from "./Cart";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../store/productsSlice";
import { api } from "../api";

const baseURL = import.meta.env.VITE_BASE_URL;

const Products = ({ cart, setCart }) => {
  const products = useSelector((store) => store.productsReducer.products);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const [brands, setBrands] = useState([]);
  const [colors, setColors] = useState([]);

  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  useEffect(() => {
    async function fetchingBrands() {
      const response = await api.get(`/brands`);
      setBrands(response.data);
    }

    fetchingBrands();
  }, []);

  useEffect(() => {
    async function fetchingColors() {
      const response = await api.get(`/colors`);
      setColors(response.data);
    }

    fetchingColors();
  }, []);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);

      let query = `${baseURL}/products`;

      const params = [];
      if (selectedColor) {
        params.push(`color_options_like=${encodeURIComponent(selectedColor)}`);
      }
      if (selectedBrand) {
        params.push(`brand_name=${encodeURIComponent(selectedBrand)}`);
      }

      if (params.length > 0) {
        query += `?${params.join("&")}`;
      }

      try {
        const response = await api.get(`${query}`);
        dispatch(addProducts(response.data));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [selectedBrand, selectedColor]);

  return (
    <div className=" container w-[1300px] h-[100vh] flex m-auto gap-4">
      <aside className="w-[300px]">
        <div>
          <h3>BRAND</h3>
          <ul className="">
            {brands.map((brand, index) => (
              <li key={index}>
                <input
                  type="radio"
                  value={brand}
                  name="brand"
                  id={brand}
                  checked={brand === selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                />
                <label htmlFor={brand}>{brand}</label>
              </li>
            ))}
            <button onClick={() => setSelectedBrand("")}>Reset</button>
          </ul>
        </div>
        <div>
          <h3>COLORS</h3>
          <ul className={" w-[200px] gap-1  flex flex-wrap"}>
            {colors.map((color, index) => (
              <li key={index}>
                <div
                  style={{
                    border: "1px solid black",
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    backgroundColor: color,
                    outline: selectedColor === color ? "3px solid red" : "",
                  }}
                  onClick={() => setSelectedColor(color)}
                />
              </li>
            ))}
            <button onClick={() => setSelectedColor("")}>Reset</button>
          </ul>
        </div>
      </aside>
      <main>
        {loading ? (
          <p>Loading...</p>
        ) : products.length ? (
          <div className="ul_container">
            {products.map((product) => (
              <Cart
                key={product.id}
                product={product}
                cart={cart}
                setCart={setCart}
              />
            ))}
          </div>
        ) : (
          <p>No products</p>
        )}
      </main>
    </div>
  );
};

export default Products;
