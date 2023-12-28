import React from 'react';
import {motion} from "framer-motion";

function Progress({ percent }) {
  return (
    <div>
        <div className={`h-3 bg-gray-500 rounded overflow-hidden mt-2 w-full`}>
            <motion.div
            initial={{width: 0}}
            whileInView={{ width: `${percent}`}}
            transition={{duration: 1.5}}
            style={{width: percent}} className={`h-full bg-Primary`}>
            </motion.div>
        </div>
    </div>
  )
}

export default Progress
