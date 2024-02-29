import React, { useState, useEffect } from 'react';
import './Product.css';
import ProductCard from './ProductCard';
import productsData from './products.json';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [visibleProducts, setVisibleProducts] = useState(window.innerWidth > 768 ? 10 : 6);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeButton, setActiveButton] = useState('All'); // New state to track active button
  const [shuffledProducts, setShuffledProducts] = useState([]);

  useEffect(() => {
    const shuffleProducts = () => {
      const shuffled = [...productsData].sort(() => Math.random() - 0.5);
      setShuffledProducts(shuffled);
    };

    shuffleProducts();
  }, [selectedCategory]); 

  const loadMoreProducts = () => {
    setVisibleProducts(prevVisibleProducts => prevVisibleProducts + getVisibleIncrement());
  };

  const resetProducts = () => {
    setVisibleProducts(getVisibleIncrement());
  };
  
  const getVisibleIncrement = () => {
    return windowWidth > 768 ? 10 : 6; 
  };
  
  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setActiveButton(category); // Update active button when category is clicked
    resetProducts();
  };

  const productsToShow = selectedCategory === 'All'
    ? shuffledProducts.slice(0, visibleProducts)
    : shuffledProducts.filter(product => product.category === selectedCategory).slice(0, visibleProducts);

  return (
    <div className="product-list text-white">
      <h1 className='font-bold text-3xl mb-5 md:text-4xl md:mb-12'>Choose from your favorite category</h1>
      <div className="category-btn flex justify-around items-center text-lg lg:text-2xl md:text-xl md:my-4 ">
        <button className={activeButton === 'All' ? 'active' : ''} onClick={() => handleCategoryClick('All')}>All</button>
        <button className={activeButton === 'soup' ? 'active' : ''} onClick={() => handleCategoryClick('soup')}>Soups</button>
        <button className={activeButton === 'rice' ? 'active' : ''} onClick={() => handleCategoryClick('rice')}>Rice</button>
        <button className={activeButton === 'pepper soup' ? 'active' : ''} onClick={() => handleCategoryClick('pepper soup')}>Pepper Soup</button>
        <button className={activeButton === 'snacks' ? 'active' : ''} onClick={() => handleCategoryClick('snacks')}>Snacks</button>
        <button className={activeButton === 'others' ? 'active' : ''} onClick={() => handleCategoryClick('others')}>Others</button>
      </div>
      <div className="products">
        {productsToShow.map(product => {
          return (
            <div key={product.id}>
              <Link to={`/products/${product.id}`}><ProductCard product={product}/></Link>
            </div>
          )
        })}
      </div>
      {visibleProducts < shuffledProducts.length ?
        <div className='flex justify-center'>
          <button className="load-more-button mb-3 py-2 px-4 bg-primary rounded-lg text-xl " onClick={loadMoreProducts}>Load More</button>
        </div> :
        <div className='flex justify-center'>
          <button className="reset-button load-more-button mb-3 py-2 px-4 bg-primary rounded-lg text-xl " onClick={resetProducts}>Show Less</button>
        </div>
      }
    </div>
  );
};

export default ProductList;
