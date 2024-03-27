import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartCard from "./cartCard";

// Component to display the shopping cart
function Cart() {
    const [totalCart, setTotalCart] = useState(0);
    const { cart } = useSelector(state => state);

    // Calculate total cart amount
    useEffect(() => {
        if (cart && cart.length > 0) {
            const totalPrice = cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0); 
            setTotalCart(totalPrice);
        } else {
            setTotalCart(0);
        }
    }, [cart]);

    // JSX to render the shopping cart
    return (
        <div className='pt-[150px] px-3 pb-3 min-h-[80vh] lg:w-3/4 mx-auto'>
          <div className={`${cart && cart.length > 0 ? 'bg-[#161c3b]' : ''} flex flex-col md:flex-row lg:flex-row lg:justify-between px-8 py-24 rounded-2xl text-white`}>
            {/* If cart is not empty, render cart items and summary */}
            {cart && cart.length > 0 ? (
                <>
                    <div className="">
                        <div className="w-full">
                            {cart.map((item, index) => <CartCard key={index} item={item} />)}
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col justify-center items-end p-5">
                            <h2 className="font-bold text-4xl text-cyan-400">Cart Summary</h2>
                            <p>
                                <span className="font-bold text-2xl">Total Item: </span>
                                <span className="text-2xl">{cart.length}</span>
                            </p>
                            <p>
                                <span className="font-bold text-2xl">Total Amount: </span>
                                <span className="text-2xl">&#8358;{totalCart}</span>
                            </p>
                        </div>
                    </div>
                </>
            ) : (
                // If cart is empty, display a message with a link to shop
                <div className="flex flex-col gap-4 absolute right-1/2 transform translate-x-1/2 h-screen">
                    <h2 className="font-bold text-4xl text-center">Your cart is empty!</h2>
                    <div className="text-center">
                        <Link to='/'>
                            <button className="uppercase bg-green-600 hover:bg-[#ff6347] rounded-lg text-2xl p-2 text-white">Shop now</button>
                        </Link>
                    </div>
                </div>
            )}
          </div>
        </div>
    );
}

export default Cart;
