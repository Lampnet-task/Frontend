import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ProductData from './products.json';
import ProductCard from './ProductCard';
import { FaStar } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addToCart } from './store/cartSlice';

// Component to display details of a specific product
function ProductDetails() {
  const dispatch = useDispatch();

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
    dispatch(addToCart(thisProduct)); // Dispatch action to add item to cart
  };

  // Get productId from URL params
  const { productId } = useParams();
  // Find the product with the matching productId
  const thisProduct = ProductData.find(product => product.id === parseInt(productId));

  // If product is not found, display a message
  if (!thisProduct) {
    return <div>Product not found</div>;
  }

  // Filter similar products by category
  const similarProducts = ProductData.filter(product => product.category === thisProduct.category && product.id !== thisProduct.id);

  // JSX to render product details page
  return (
    <div className='detail-page text-white relative'>
      <div className="back-home mb-2"></div>
      {/* Product details */}
      <div className="product-details mt-8">
        {/* Product image */}
        <div className="product-image flex items-center justify-center">
          <img src={thisProduct.image} alt={thisProduct.title} className='w-full lg:w-3/4 object-cover rounded-3xl md:w-full'/>
        </div>
        {/* Product information */}
        <div className="product-info text-2xl">
          <h1 className='product-title text-4xl lg:text-6xl font-bold'>{thisProduct.title}</h1>
          <div className="flex text-5xl">{starRating(thisProduct.ratings)}</div>
          <p className="product-price text-4xl">&#x20A6;{thisProduct.price}</p>
          {/* Add to cart button */}
          <div className="cart-btn flex gap-14">
            <button className="bg-green-700 px-4 py-2 text-3xl lg:text-4xl rounded-md hover:bg-slate-400" onClick={handleAddToCart}>Add To Cart</button>
            {/* Link to view cart */}
            <Link to='/cart'><button className="bg-orange-500 px-4 py-2 text-3xl lg:text-4xl rounded-md hover:bg-slate-400">View Cart</button></Link>
          </div>
          <p className="description text-2xl lg:text-3xl">{thisProduct.description}</p>
        </div>
      </div>
      {/* Similar products */}
      <div className="similar-products">
        <h1 className="font-bold text-3xl text-center mt-14 mb-4">SIMILAR PRODUCTS</h1>
        <div className="similar-products-list">
          {/* Map through similar products and render ProductCard for each */}
          {similarProducts.map(product => (
            <div key={product.id}>
              <ProductCard product={product}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
