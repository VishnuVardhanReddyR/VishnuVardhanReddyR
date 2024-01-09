import React from 'react';
import {SocialIcon} from "react-social-icons";
import { motion } from 'framer-motion';

function SocialIcons({socials}) {  
        console.log(socials);
        return (
        <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
         className="flex flex-row items-center">
                {socials.map((icon) => (
                        <SocialIcon url={icon.url} className='w-2 h-2 mr-[1px] md:mr-4' fgColor='gray' bgColor='transparent' />
                ))}
        </motion.div>
  );
}

export default SocialIcons
