import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center mt-5 text-gray-800">Shopping Cart</h1>
      <div className="w-full md:w-8/12 lg:w-6/12 flex flex-col items-center mx-auto bg-white p-8 rounded-lg shadow-md mt-8">
        <ItemList items={cartItems} />
        {cartItems.length === 0 && (
          <p className="text-center text-lg pt-10 text-gray-600">Your cart is empty</p>
        )}
      </div>
      <div className="flex justify-center gap-5 mt-8">
        <button
          onClick={handleClearCart}
          className="bg-red-600 text-white px-4 py-2 rounded-lg text-lg hover:bg-red-700 transition duration-300"
        >
          Clear Cart
        </button>
        <Link
          to="/checkout"
          className="p-2 md:px-4 group hover:bg-gray-50 rounded-md flex items-center gap-2"
        >
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-lg hover:bg-orange-700 transition duration-300">
            Proceed to checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;