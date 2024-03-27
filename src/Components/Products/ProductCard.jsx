import React from 'react';
import { FaShoppingCart, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; 
import { addToCart } from './store/cartSlice'; 

// Component to display individual product cards
const ProductCard = ({ product }) => { 
  // Redux hooks for accessing cart state and dispatching actions
  const { cart } = useSelector(state => state);
  const dispatch = useDispatch();

  // If product is not available, return null
  if (!product) {
    return null;
  }

  // Destructure product properties
  const { title, image, description, ratings, price, id } = product;

  // Function to generate star rating icons based on given rating
  function starRating(stars) {
    const starIcons = [];

    for (let i = 0; i < 5; i++) {
      if (i < stars) {
        starIcons.push(<FaStar key={i} className="text-yellow-500" />);
      } else {
        starIcons.push(<FaStar key={i} className="text-gray-500" />);
      }
    }

    return starIcons;
  }

  // Function to handle adding item to cart
  const handleAddToCart = () => {
    dispatch(addToCart(product)); // Dispatch action to add item to cart
  };

  // JSX to render product card
  return (
    <div className="product-card my-8 relative cursor-pointer py-4 px-1 rounded-3xl shadow hover:shadow-slate-50">
      {/* Cart icon for adding item to cart */}
      <div className='cart-icon absolute right-2 bottom-2 hover:text-blue-700 hover:bg-slate-300 rounded-full p-2 text-4xl hidden' onClick={!cart.some(item => item.id === product.id) && handleAddToCart}>
        <FaShoppingCart size={22} />
      </div>
      {/* Product image with link to product details */}
      <div className="p-2">
        <Link to={`/products/${id}`}>
          <img src={image} alt={title} className="object-cover h-48 w-full rounded-3xl" />
        </Link>
      </div>
      {/* Product title */}
      <h2 className="font-bold my-2 px-4 text-3xl text-cyan-400">{title}</h2>
      {/* Product description */}
      <h3 className='text-2xl mb-3'>{description.length > 80 ? description.slice(0, 80).concat('...') : description}</h3>
      {/* Star ratings */}
      <div className="flex">{starRating(ratings)}</div>
      {/* Product price */}
      <p className="product-price text-2xl px-4">&#x20A6;{price}</p>
    </div>
  );
};

export default ProductCard;
