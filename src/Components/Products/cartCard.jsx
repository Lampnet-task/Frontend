import { useDispatch } from "react-redux";
import { removeFromCart, incrementQuantity, decrementQuantity } from "./store/cartSlice";

// Component to display individual items in the cart
function CartCard({ item }) {
    const dispatch = useDispatch();

    // Function to handle removing item from cart
    function handleRemoveCart() {
        dispatch(removeFromCart(item.id));
    }

    // Function to handle incrementing item quantity
    function handleIncrement() {
        dispatch(incrementQuantity(item.id));
    }

    // Function to handle decrementing item quantity
    function handleDecrement() {
        dispatch(decrementQuantity(item.id));
    }

    // JSX to render cart item card
    return (
        <div>
            <div className="flex gap-6 lg:gap-8 items-center p-5 justify-between bg-gray-500 my-2 rounded-xl text-white">
                {/* Item image */}
                <div>
                    <img src={item?.image} alt={item?.title} className="h-28 rounded-lg object-cover w-28" />
                </div>
                <div className="flex gap-6 items-center">
                    {/* Item title */}
                    <div className=" text-wrap w1/3">
                        <h2 className="text-3xl font-bold">{item?.title}</h2>
                    </div>

                    {/* Item price */}
                    <div>
                        <p className="font-extrabold text-2xl">&#8358;{item?.price}</p>
                    </div>

                    {/* Quantity adjustment buttons */}
                    <div className="flex items-center">
                        {/* Decrement button */}
                        <button className="uppercase bg-green-700 hover:bg-[#ff6347] text-2xl py-2 px-4"
                            onClick={handleDecrement}>-</button>
                        {/* Quantity display */}
                        <span className="text-2xl py-2 px-4 bg-white/75 text-black">{item.quantity}</span>
                        {/* Increment button */}
                        <button className="uppercase bg-green-700 hover:bg-[#ff6347] text-2xl py-2 px-4"
                            onClick={handleIncrement}>+</button>
                    </div>

                    {/* Remove item button */}
                    <div>
                        <button className="uppercase bg-orange-600 rounded-lg text-xl p-2"
                            onClick={handleRemoveCart}>Remove</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartCard;
