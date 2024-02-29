import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ProductData from './products.json';
import Rating from './Rating';
import ProductCard from './ProductCard';
import { FaArrowLeft } from 'react-icons/fa';

function ProductDetails() {
  const { productId } = useParams();
  const thisProduct = ProductData.find(product => product.id === parseInt(productId));

  if (!thisProduct) {
    return <div>Product not found</div>;
  }

    // Filter similar products by category
    const similarProducts = ProductData.filter(product => product.category === thisProduct.category && product.id !== thisProduct.id);

  return (
    <div className='detail-page text-white relative'>
    <div className="back-home absolute">
    <Link to="/" className='flex gap-2 items-center text-2xl underline hover:text-orange-500'>
      <FaArrowLeft /> Back To Home
    </Link>
    </div>
      <div className="product-details mt-8">
        <div className="product-image flex items-center justify-center">
          <img src={thisProduct.image} alt={thisProduct.title} className='w-full lg:w-3/4 object-cover rounded-3xl md:w-full'/>
        </div>
        <div className="product-info text-2xl">
          <h1 className='product-title text-4xl font-bold'>{thisProduct.title}</h1>
          
          <Rating rating={thisProduct.ratings}/>
          <p className="product-price">&#x20A6;{thisProduct.price}</p>
          <div className="cart-btn flex gap-14">
            <button className="bg-green-700 px-2 py-1 rounded-md hover:bg-slate-400">Add To Cart</button>
            <button className="bg-orange-500 px-2 py-1 rounded-md hover:bg-slate-400">View Cart</button>
          </div>
          <p className="description">{thisProduct.description}</p>
        </div>
      </div>
      <div className="similar-products">
              <h1 className="font-bold text-3xl text-center mt-14 mb-4">SIMILAR PRODUCTS</h1>
            <div className="similar-products-list">
            {similarProducts.map(product => (
            <div key={product.id}>
            <Link to={`/products/${product.id}`}><ProductCard product={product}/></Link>
          </div>
          ))}
              </div>
              </div>
    </div>
  );
}

export default ProductDetails;
