import React from 'react'
import { FiSend, FiInstagram, FiYoutube, FiDribbble } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

const index = () => {
    return (
        <footer className="flex flex-col-reverse md:flex-row gap-8 md:gap-0 md:justify-between md:items-center text-white bg-gradient-to-b p-4 md:px-24 md:py-12">
            <div>
                <ul className="text-6xl flex gap-2 md:text-8xl md:gap-4 ">
                    <li className="hover:text-link"><FiInstagram /></li>
                    <li className="hover:text-link"><FaXTwitter /></li>
                    <li className="hover:text-link"><FiDribbble /></li>
                    <li className="hover:text-link"><FiYoutube /></li>
                </ul>

                <div className="mt-2 md:mt-4"><p className="text-xl md:text-2xl ">Copyright 2024. Wazobia-foods. All rights reserved</p></div>
            </div>

            <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-0 md:gap-20 md:w-[60%] ">
                <div className="flex flex-col md:flex-row gap-4 md:gap-20 ">
                    <div>
                        <h2 className="text-2xl font-semibold md:text-4xl ">Company</h2>
                        <ul className="text-2xl md:text-4xl mt-2 ">
                            <li className="hover:text-link">About Us</li>
                            <li className="hover:text-link">Blog</li>
                            <li className="hover:text-link">Contact Us</li>
                            <li className="hover:text-link">Pricing</li>
                            <li className="hover:text-link">Testimonials</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold md:text-4xl ">Support</h2>
                        <ul className="text-2xl md:text-4xl mt-2">
                            <li className="hover:text-link">Help center</li>
                            <li className="hover:text-link">Terms of service</li>
                            <li className="hover:text-link">Legal</li>
                            <li className="hover:text-link">Privacy Policy</li>
                            <li className="hover:text-link">Status</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold md:text-4xl ">Stay up to date</h2>
                    <form className="bg-gradient-to-b flex items-center justify-between border w-2/4 md:w-[30rem] p-2 md:p-4 rounded-lg mt-2 md:mt-4 ">
                        <input type="email" placeholder="Your email address" className="outline-0 bg-transparent text-sm md:text-lg text-white" />
                        <button type="submit"><FiSend className="text-white w-5 h-5"/></button>
                    </form>
                </div>
                
            </div>

            
            
        </footer>
    )
}

export default index