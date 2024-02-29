import './App.css';
import { Outlet } from 'react-router-dom'
import Header from "../src/Components/Header"
import Footer from "../src/Components/Footer"

function App() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}


export default App;
