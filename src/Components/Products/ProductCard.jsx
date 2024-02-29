import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Rating from './Rating'; // Import the Ratings component

const ProductCard = ({ product }) => {
  if (!product) {
    return null;
  }

  const { title, image, ratings, price } = product;

  return (
    <div className="product-card my-4 relative cursor-pointer pb-3 pt-4 px-2 rounded-lg shadow hover:shadow-slate-50">
      <div className='cart-icon absolute right-3 bottom-4 hover:text-blue-700 hover:bg-slate-300 rounded-full p-2 text-3xl hidden'>
        <FaShoppingCart />
      </div>
      <div className="p-2">
        <img src={image} alt={title} className="object-cover h-48 w-full rounded-3xl" />
      </div>
      <h2 className="font-bold my-1">{title}</h2>


      <Rating rating={ratings} />
      <p className="product-price">&#x20A6;{price}</p>
    </div>
  );
};

export default ProductCard;
