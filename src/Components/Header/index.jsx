import React, { useState, useEffect } from 'react'
import { CiShoppingCart } from "react-icons/ci";
import logo from "../../assets/ep_food.png"
import photo from "../../assets/userdp5.png"
import NavItems from './NavItems';
import styles from "./styles.module.css";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const index = () => {
    const [show, setShow] = useState(false);
    const [background, setBackground] = useState(false)

    const { cart } = useSelector(state => state)

    // show dropdown
    const showNavBar = () => {
        setShow(!show)
    }

    useEffect(() => {

        const scrollFunction = () => {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            setBackground(true)
        } else {
            setBackground(false)
        }
        };

        window.addEventListener('scroll', scrollFunction);

        // Cleanup function to remove the event listener when the component unmounts
        return () => window.removeEventListener('scroll', scrollFunction);
    }, []); 

    
    return (
        <nav className={`flex justify-between items-center px-4 md:px-0 py-6 text-white z-50 fixed w-full ${background ? "bg-background" : "backdrop-blur"} `}>
            <div>
                <img src={logo} alt="logo" />
            </div>

            <div className="flex flex-row-reverse md:flex-row items-center md:w-3/4 justify-between mr-3 ml-auto md:mr-0 md:ml-0">
                {
                    <NavItems 
                        classname={
                            show 
                            ? `absolute w-full p-4 backdrop-blur bg-primary rounded-2xl z-50 left-0 top-32 ${styles.navitem} ${styles.expanded} `
                            : styles.navitem
                        } 
                    />
                }

                <div className="flex gap-2 md:gap-6 items-center">
                    <Link to='/cart'><CiShoppingCart className="h-12 w-12 hover:text-link focus-within:text-link relative" />
                    {
                            cart.length ?
                                <span className="absolute top-[1.4rem] lg:right-[4rem] md:right-[4rem] right-[7.5rem] h-4 w-4 bg-red-700 rounded-full flex justify-center items-center p-[10px] text-xl">{cart.length}</span>
                                : null
                        }
                    </Link>
                    <img src={photo} alt="photo" className="rounded-full w-[3rem] h-[3rem] " />
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