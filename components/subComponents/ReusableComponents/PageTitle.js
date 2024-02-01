import React from 'react';
import Loader from "../../loaders/Loader";
import { motion } from 'framer-motion';

function PageTitle({ sub, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="mt-8 space-y-6 text-center">
      <p className="hidden pt-10 text-xl text-gray-500 lg:block">{sub}</p>
      <p className="text-md lg:text-xl uppercase text-gray-300 tracking-[8px]">{title}</p>
      <Loader />
    </motion.div>
  )
}

export default PageTitle;
