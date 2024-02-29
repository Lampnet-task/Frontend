import React from 'react'
import photo1 from "../../assets/userdp1.png"
import photo2 from "../../assets/userdp2.png"
import photo3 from "../../assets/userdp3.png"

const index = () => {
    return (
        <section className="text-white relative py-12 px-4 md:px-24 md:py-16">
            <div className="absolute bg-primary rounded-full w-[15rem] h-[15rem] md:w-[20rem] md:h-[20rem] right-2 top-[5rem] md:right-[20rem] md:top-[5rem] "></div>
            <div className="absolute bg-primary rounded-full w-[10rem] h-[10rem] md:w-[15rem] md:h-[15rem] left-10 bottom-10 md:left-[20rem] md:bottom-[3rem] "></div>
            

            <h2 className="text-2xl md:text-5xl font-semibold md:text-center ">What our customers say about us</h2>

            <div className="p-4 mt-12 md:mt-24 flex flex-col md:items-center md:flex-row gap-24 ">
                <div className="relative bg-gradient-to-b backdrop-blur rounded-2xl h-fit md:h-[22rem] ">
                    <div className="absolute -top-12 left-10 rounded-full w-[5rem] h-[5-rem] ">
                        <img src={photo2} alt="photo" />
                    </div>
                    <div className="px-4 md:px-6 md:py-12 py-10 ">
                        <p className="text-xl md:text-2xl ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum assumenda, 
                            fugit labore earum eum nisi suscipit eos, ipsum veniam, aliquid vero. 
                            Vitae nesciunt repellendus accusantium error aut corporis laboriosam. Accusantium!
                        </p>
                        <p className="text-2xl font-semibold mt-8">Joseph Harllow</p>
                    </div>
                </div>

                <div className="relative bg-gradient-to-b backdrop-blur rounded-2xl md:h-[26rem] ">
                    <div className="absolute -top-12 md:-top-20 left-10 rounded-full w-[5rem] h-[5-rem] md:w-[7rem] md:h-[7rem] ">
                        <img src={photo1} alt="photo" />
                    </div>
                    <div className="px-4 md:px-6 md:py-20 py-10  ">
                        <p className="text-xl md:text-2xl ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum assumenda, 
                            fugit labore earum eum nisi suscipit eos, ipsum veniam, aliquid vero. 
                            Vitae nesciunt repellendus accusantium error aut corporis laboriosam. Accusantium!
                        </p>
                        <p className="text-2xl font-semibold mt-8">Anna Doe</p>
                    </div>
                </div>

                <div className="relative bg-gradient-to-b backdrop-blur rounded-2xl h-fit md:h-[22rem] ">
                    <div className="absolute -top-12 left-10 rounded-full w-[5rem] h-[5-rem] ">
                        <img src={photo3} alt="photo" />
                    </div>
                    <div className="px-4 md:px-6 md:py-12 py-10 ">
                        <p className="text-xl md:text-2xl ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum assumenda, 
                            fugit labore earum eum nisi suscipit eos, ipsum veniam, aliquid vero. 
                            Vitae nesciunt repellendus accusantium error aut corporis laboriosam. Accusantium!
                        </p>
                        <p className="text-2xl font-semibold mt-8">Jamal Harris</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default index