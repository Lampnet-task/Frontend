import React, { useState, useEffect } from 'react';
import './Product.css';
import ProductCard from './ProductCard';
import productsData from './products.json';
import { Link } from 'react-router-dom';

// Component for displaying a list of products with filtering and pagination
const ProductList = () => {
  // State variables
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Track window width for responsive behavior
  const [visibleProducts, setVisibleProducts] = useState(window.innerWidth > 768 ? 10 : 6); // Number of initially visible products
  const [selectedCategory, setSelectedCategory] = useState('All'); // Currently selected category for filtering
  const [activeButton, setActiveButton] = useState('All'); // Currently active button for category selection
  const [shuffledProducts, setShuffledProducts] = useState([]); // Shuffled list of products

  // Effect to shuffle products whenever the selected category changes
  useEffect(() => {
    const shuffleProducts = () => {
      const shuffled = [...productsData].sort(() => Math.random() - 0.5);
      setShuffledProducts(shuffled);
    };

    shuffleProducts();
  }, [selectedCategory]);

  // Function to load more products on button click
  const loadMoreProducts = () => {
    setVisibleProducts(prevVisibleProducts => prevVisibleProducts + getVisibleIncrement());
  };

  // Function to reset the number of visible products
  const resetProducts = () => {
    setVisibleProducts(getVisibleIncrement());
  };

  // Function to determine the number of visible products based on window width
  const getVisibleIncrement = () => {
    return windowWidth > 768 ? 10 : 6;
  };

  // Event handler for window resize
  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  // Effect to update window width on resize and clean up event listener
  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  // Event handler for category selection
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setActiveButton(category);
    resetProducts(); // Reset visible products when category changes
  };

  // Filter and slice products to display based on selected category and visibility
  const productsToShow = selectedCategory === 'All'
    ? shuffledProducts.slice(0, visibleProducts)
    : shuffledProducts.filter(product => product.category === selectedCategory).slice(0, visibleProducts);

  // JSX to render product list
  return (
    <div className="product-list text-white">
      <h1 className='font-bold text-3xl mb-5 md:text-4xl md:mb-12'>Choose from your favorite category</h1>
      {/* Category buttons */}
      <div className="category-btn flex justify-around items-center text-lg lg:text-2xl md:text-xl md:my-4 ">
        <button className={activeButton === 'All' ? 'active' : ''} onClick={() => handleCategoryClick('All')}>All</button>
        <button className={activeButton === 'soup' ? 'active' : ''} onClick={() => handleCategoryClick('soup')}>Soups</button>
        <button className={activeButton === 'rice' ? 'active' : ''} onClick={() => handleCategoryClick('rice')}>Rice</button>
        <button className={activeButton === 'pepper soup' ? 'active' : ''} onClick={() => handleCategoryClick('pepper soup')}>Pepper Soup</button>
        <button className={activeButton === 'snacks' ? 'active' : ''} onClick={() => handleCategoryClick('snacks')}>Snacks</button>
        <button className={activeButton === 'others' ? 'active' : ''} onClick={() => handleCategoryClick('others')}>Others</button>
      </div>
      {/* Product cards */}
      <div className="products">
        {productsToShow.map(product => {
          return (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          )
        })}
      </div>
      {/* Load more button or Show less button based on visibility */}
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
