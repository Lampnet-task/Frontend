import React, { useState } from 'react'
import { CiShoppingCart } from "react-icons/ci";
import logo from "../../assets/ep_food.png"
import NavItems from './NavItems';
import styles from "./styles.module.css";

const index = () => {
    const [show, setShow] = useState(false);

    // show dropdown
    const showNavBar = () => {
        setShow(!show)
    }


    return (
        <nav className="flex justify-between items-center px-4 md:px-24 py-6 border-b text-white">
            <div>
                <img src={logo} alt="logo" />
            </div>

            <div className="flex flex-row-reverse md:flex-row items-center md:w-3/4 justify-between mr-3 ml-auto md:mr-0 md:ml-0">
                {
                    <NavItems 
                        classname={
                            show 
                            ? `absolute w-full p-4 backdrop-blur-0 bg-primary rounded z-50 left-0 top-32 ${styles.navitem} ${styles.expanded} `
                            : styles.navitem
                        } 
                    />
                }

                <div className="flex gap-2 md:gap-6 items-center">
                    <CiShoppingCart className="h-12 w-12" />
                    {/* <img src={logo} alt="" /> */}
                </div>

            </div> 
            
            <div className={`${styles.hamburger} ${show ? styles.active : ''}`} onClick={showNavBar}>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
            </div>
 
        </nav>
    )
}

export default index