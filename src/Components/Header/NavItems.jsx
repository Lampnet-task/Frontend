import React from 'react'
import { Link } from "react-router-dom"
import { CiSearch } from "react-icons/ci";

const NavItems = ({classname}) => {
    return (
        <div className={`md:flex items-center ${classname}`}>
            <span className="flex justify-between gap-4 border items-center p-4 rounded-3xl text-3xl backdrop-blur bg-gradient-to-r ">
                <input type="search" placeholder="Search here..." className="bg-transparent outline-0 text-white "/>
                <CiSearch className="h-8 w-8"/>
            </span>

            <ul className="flex flex-col gap-6 md:flex-row font-medium text-6xl">
                <li><Link to={"/"} className="hover:text-link focus-within:text-link focus-visible:text-link ">Home</Link></li>
                <li><Link to={"#"} className="hover:text-link focus-within:text-link focus-visible:text-link">Restaurants</Link></li>
                <li><Link to={"/aboutus"} className="hover:text-link focus-within:text-link focus-visible:text-link">About Us</Link></li>
            </ul>

        </div>
    )
}

export default NavItems