import React from 'react'
import SLider1 from "../assets/images/Slider1.png";
import { motion, stagger } from "framer-motion"
import HomepageSliderData from "../assets/Json/HomepageSlider.json"
const Homepage = () => {
    console.log(HomepageSliderData)
    const Template =()=>{}
    return (
        <section className="container h-full mx-auto flex flex-col sm:flex-row-reverse sm:px-12 ">
            <div className="img-container relative w-3/5 h-full flex items-center justify-center bg-gradient-to-r from-transparent to-orange-500 -skew-x-12 translate-x-20 drop-shadow-xl">
                <motion.img
                    alt="Woman doing meditation"
                    className="absolute skew-x-0 "
                    src={SLider1}
                    initial={{ transform: "translateX(300px) skewX(12deg)", opacity: 0 }}
                    whileInView={{ transform: "translateX(0px) skewX(12deg)", opacity: 1 }}
                    transition={{
                        type: "spring",
                        damping: 5,
                        mass: 0.75,
                        stiffness: 100,
                    }}
                />
            </div>

            <div className="mr-4 text-center w-2/5 sm:text-left h-full flex items-center justify-center">
                <div>
                    <motion.h1
                        initial={{ transform: "translateY(10px)", opacity: 0 }}
                        whileInView={{ transform: "translateY(0px)", opacity: 1 }}
                        transition={{
                            delay: 0.5,
                            type: "spring",
                            damping: 5,
                            mass: 0.75,
                            stiffness: 100
                        }}
                        className="mb-4 text-3xl font-bold leading-tight dark:text-dark-50 md:text-4xl dark:text-white">
                        <b className=' text-orange-400'>Burger Hub</b>: Where Taste Meets Perfection!
                    </motion.h1>
                    <motion.p
                        initial={{ transform: "translateY(10px)", opacity: 0 }}
                        whileInView={{ transform: "translateY(0px)", opacity: 1 }}
                        transition={{
                            delay: 1,
                            type: "spring",
                            damping: 5,
                            mass: 0.75,
                            stiffness: 100
                        }}
                        className="mb-8 leading-relaxed text-slate-700 dark:text-slate-400">
                        Welcome to a heaven of culinary delight – the Burger Hub! Dive into a world of sensational flavors and unparalleled quality.
                        Our signature burgers are crafted with precision and passion, using only the finest ingredients to guarantee a taste experience like no other.
                        Your search for the perfect burger ends here – discover a symphony of taste at Burger Hub!
                    </motion.p>
                    <motion.button
                        initial={{ transform: "translateY(10px)", opacity: 0 }}
                        whileInView={{ transform: "translateY(0px)", opacity: 1 }}
                        transition={{
                            delay: 1.5,
                            type: "spring",
                            damping: 5,
                            mass: 0.75,
                            stiffness: 100
                        }}
                        className="rounded-full border-0 bg-orange-400 px-12 py-2 text-base text-white shadow-lg shadow-orange-300 transition hover:bg-orange-500 hover:shadow-orange-400 dark:shadow-orange-900">
                        Order now
                    </motion.button>
                </div>
            </div>
        </section>
    )
}

export default Homepage