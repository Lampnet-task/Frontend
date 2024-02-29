
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import ProductList from './Components/Products/ProductList';
import ProductDetails from './Components/Products/ProductDetails';
import OrderCart from './Components/Products/OrderCart';
import { Outlet } from 'react-router-dom'
import Header from "../src/components/Header"
import Footer from "../src/components/Footer"

function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/products/:productId' element={<ProductDetails />} />
//         <Route path='/orders' element={<OrderCart />} />
//       <Route path='*' element={<h1 className='h-screen flex justify-center items-center text-white text-6xl'>PAGE NOT FOUND</h1>} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// function Home() {
//   return (
//     <>
//       <div className='bg-blue-950'>
//         <ProductList className='products' />
//       </div>
//     </>
//   );
// =======
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}


export default App;
