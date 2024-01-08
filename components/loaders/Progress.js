import React from 'react';
import {motion} from "framer-motion";

function Progress({ percent }) {
  return (
    <div>
        <div className={`h-[2px] md:h-3 md:bg-gray-700 rounded overflow-hidden mt-2 w-full`}>
            <motion.div
            initial={{width: 0}}
            whileInView={{ width: `${percent}`}}
            transition={{duration: 1.5}}
            style={{width: percent}} className={`h-full bg-gray-300`}>
            </motion.div>
        </div>
    </div>
  )
}

export default Progress
