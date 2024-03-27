import { useDispatch } from "react-redux";
import { removeFromCart, incrementQuantity, decrementQuantity } from "./store/cartSlice";

function CartCard({ item }) {
    const dispatch = useDispatch();

    function handleRemoveCart() {
        dispatch(removeFromCart(item.id));
    }

    function handleIncrement() {
        dispatch(incrementQuantity(item.id));
    }

    function handleDecrement() {
        dispatch(decrementQuantity(item.id));
    }

    return (
        <div>
            <div className="flex gap-6 lg:gap-8 items-center p-5 justify-between bg-gray-500 my-2 rounded-xl text-white">
                <div>
                    <img src={item?.image} alt={item?.title} className="h-28 rounded-lg object-cover w-28" />
                </div>
                <div className="flex gap-6 items-center">
                    <div className=" text-wrap w1/3">
                        <h2 className="text-3xl font-bold">{item?.title}</h2>
                    </div>

                    <div>
                        <p className="font-extrabold text-2xl">&#8358;{item?.price}</p>
                    </div>

                    <div className="flex items-center">
                        <button className="uppercase bg-green-700 hover:bg-[#ff6347] text-2xl py-2 px-4"
                            onClick={handleDecrement}>-</button>
                        <span className="text-2xl py-2 px-4 bg-white/75 text-black">{item.quantity}</span>
                        <button className="uppercase bg-green-700 hover:bg-[#ff6347] text-2xl py-2 px-4"
                            onClick={handleIncrement}>+</button>
                    </div>

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