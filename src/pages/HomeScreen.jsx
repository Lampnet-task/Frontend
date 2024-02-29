import React from 'react'
import HeroSection from "../Components/HeroSection"
import Testimonials from "../Components/Testimonials"
import ProductList from '../Components/Products/ProductList'

const HomeScreen = () => {
    return (
        <>
            <HeroSection />
            <ProductList />
            <Testimonials />
        </>
    )
}

export default HomeScreen