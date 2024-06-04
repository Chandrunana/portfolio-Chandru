import aboutPic from "../assets/profilepic.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">About
      <span className="text-neutral-500"> Me</span> 
      </h1>
      <div className="flex flex-wrap">
        <motion.div 
        whileInView={{ opacity: 1, x: 0}}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
            <img className="h-96 w-96 sm:h-[30rem] sm:w-[30rem] md:h-[36rem] md:w-[36rem] lg:h-[40rem] lg:w-[40rem] rounded-lg shadow-lg" src={aboutPic} alt="about" />
            </div>  
        </motion.div>
        <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{duration: 0.5}}
        className="w-full lg:w-1/2">
            <div className="flex justify-center text-1xl lg-justify-start">
                <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
            </div>
           </motion.div>
      </div>
    </div>
  )
}

export default About
