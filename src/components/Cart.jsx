import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

const Cart = ({ product, cart, setCart }) => {
  return (
    <main>
      <div className="w-[220px] h-[400px] border-[1px solid to-black]">
        <img
          className="w-full h-[55%]"
          src={product.image_url}
          alt={product.name}
        />
        <div>
          <button
            className="w-[180px] h-[40px] flex justify-center items-center gap-2 bg-gray-400 text-white rounded-lg"
            onClick={() => setCart([...cart, product.id])}
          >
            <FaCartShopping />
            Add To Cart
          </button>
        </div>
        <h4 className="m-1 text-[20px] font-bold">
          <Link to={`/products/${product.id}`}>{product.name}</Link>
        </h4>
        <p>{product.description}</p>
        <div className="">
          {product.color_options.map((color, index) => (
            <div
              key={index}
              style={{
                background: color,
              }}
              className=""
            />
          ))}
        </div>
        <strong>{product.price}</strong>
      </div>
    </main>
  );
};

export default Cart;
