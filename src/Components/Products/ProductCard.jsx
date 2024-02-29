import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Rating from "./Rating"; // Import the Ratings component

const ProductCard = ({ product }) => {
  if (!product) {
    return null;
  }

  const { title, image, ratings, price } = product;

  return (
    <div className="product-card my-8 relative cursor-pointer py-4 px-1 rounded-3xl shadow hover:shadow-slate-50">
      <div className='cart-icon absolute right-2 bottom-2 hover:text-blue-700 hover:bg-slate-300 rounded-full p-4 text-4xl hidden'>
        <FaShoppingCart />
      </div>
      <div className="p-2">
        <img src={image} alt={title} className="object-cover h-48 w-full rounded-3xl" />
      </div>
      <h2 className="font-bold my-2 px-4 text-xl">{title}</h2>


      <Rating rating={ratings} />
      <p className="product-price text-xl px-4">&#x20A6;{price}</p>
    </div>
  );
};

export default ProductCard;
