import {HERO_CONTENT} from "../constants/index.js";
import profilePic from "../assets/shivamPandeyProfile.jpeg";
import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: { x:-100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: delay,
        },
    },
})

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1 variants={container(0)}
                                   initial="hidden"
                                   animate="visible"
                                   className="pb-16 text-6xl font-thin tracking-tight lg:mt-16
                        lg:text-8xl">Shivam Pandey
                        </motion.h1>
                        <motion.span variants={container(0.5)}
                              initial="hidden"
                              animate="visible"
                            className="bg-gradient-to-r from-pink-300 via-slate-500
                        to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                            Data Scientist
                        </motion.span>
                        <motion.p variants={container(1)}
                           initial="hidden"
                           animate="visible"
                            className="my-2 max-w-wl py-6 font-light tracking-tight">
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <motion.div variants={container(0)}
                         initial={{x: 100, opacity: 0}}
                         animate={{x: 0, opacity: 1}}
                         transition={{duration: 1, delay: 1.2}}
                        className="flex justify-center">
                        <img src={profilePic} alt="Shivam Pandey" />
                    </motion.div>
                </div>
            </div>
        </div>

    )
}

export default Hero;