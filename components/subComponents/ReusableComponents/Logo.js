import React from 'react'
import { motion } from 'framer-motion';

const Logo = ({ firstName, lastName }) => {
  return (
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      className="ml-3 text-xs font-bold text-gray-300 md:text-lg xl:text-xl">
        <span className="border-y-[1px] border-gray-400 px-[0.5px]">{firstName}</span>
        <span className="bg-gray-400 ml-2 px-[3px] font-bold text-black">{lastName}</span>
      </motion.div>
  )
}

export default Logo;
