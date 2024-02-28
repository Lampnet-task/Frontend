import { Outlet } from 'react-router-dom'
import './App.css'
import Header from "../src/components/Header"
import Footer from "../src/components/Footer"

function App() {

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default App
