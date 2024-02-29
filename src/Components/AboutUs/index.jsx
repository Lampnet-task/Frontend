import React from 'react'
import kitchen from "../../assets/firewood.jpg"
import foods from "../../assets/foods.jpg"

const index = () => {
    return (
        <section className="px-4 pt-[8rem] pb-12 text-white md:px-24 md:py-[15rem] relative overflow-x-hidden ">
            <div className="absolute rounded-full w-32 h-32 md:w-[15rem] md:h-[15rem] bg-primary -top-10 right-0 md:-right-20"></div>
            <div className="absolute rounded-full w-32 h-32 md:w-[15rem] md:h-[15rem] bg-primary bottom-[40rem] left-0 md:-left-20 -z-40 "></div>
            <div className="absolute rounded-full w-32 h-32 md:w-[15rem] md:h-[15rem] bg-primary bottom-10 right-5 md:right-[40rem] -z-20 "></div>

            <div className="text-center mb-8 md:mb-24 ">
                <h1 className="text-4xl font-semibold md:text-6xl ">About us</h1>
                <p className="text-xl font-medium text-primary md:text-3xl ">Our History in brief</p>
            </div>

            <section className="flex flex-col gap-10 md:gap-20">
                <article className="flex flex-col md:flex-row gap-10 ">
                    <div className="md:w-3/5 ">
                        <h3 className="text-3xl font-medium md:text-5xl ">Welcome to Wazobia Foods!</h3>
                        <p className="text-xl mt-2 md:text-3xl md:mt-4 ">
                            We are a leading multichannel retailer and operators of the third largest supermarket chain brand in Nigeria. 
                            For four decades, we have continued to serve families in South-west Nigeria with top quality products at affordable prices. It’s become our legacy!
                            Whether you want to shop in our fully-stocked walk-in stores or the online supermarket, enjoy mouth-watering local and international dishes, 
                            or simply chill with family and friends, you’re guaranteed an unparalleled customer service experience at FoodCo.
                            And, while at it, don’t forget to order our award-winning Sunfresh bread for a wholesome breakfast delight for the entire family.
                        </p>
                    </div>
                    
                    <aside className="flex flex-col gap-5 relative">
                        <div className="absolute backdrop-blur bg-gradient-to-b rounded-3xl w-[20rem] h-[20rem] md:w-[45rem] md:h-[45rem] -top-10 right-10 md:top-10 md:-right-[7rem] -z-30 "></div>
                        <img src={kitchen} alt="kitchen" className="rounded-2xl w-[20rem] h-[20rem] md:w-[40rem] md:h-[40rem] mx-auto " />
                    </aside>
                </article>

                <article className="flex flex-col md:flex-row gap-10">
                    <div className="md:w-3/5 ">
                        <h3 className="text-3xl font-medium md:text-5xl ">Wazobia Fast Foods!</h3>
                        <p className="text-xl mt-2 md:text-3xl md:mt-4 ">
                            Hungry? Or do you just need a serene environment to chill with friends over drinks and snacks? Walk into any of our restaurants 
                            located right within FoodCo outlets for delicious local and international dishes. 
                            Our drinks are also chilled to perfection to ensure you have a satisfying experience, the first time and every time.
                        </p>
                    </div>

                    <aside className="flex flex-col gap-5 relative">
                        <div className="absolute backdrop-blur bg-gradient-to-b rounded-3xl w-[20rem] h-[20rem] md:w-[45rem] md:h-[35rem] -top-10 right-10 md:top-10 -z-10 "></div>
                        <img src={foods} alt="foods" className="rounded-2xl w-[20rem] h-[20rem] md:w-[40rem] md:h-[30rem] mx-auto " />
                    </aside>
                </article>
            </section>
        </section>
    )
}

export default index