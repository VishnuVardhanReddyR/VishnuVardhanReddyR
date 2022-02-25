import React from 'react';
import Work from "./Work";
import { myWorks } from "../../../lib/Data";

function Works({ inView }) {
  return (
    <section className="text-gray-400 body-font">
        <div className="container px-5 py-24 mx-auto">
            {myWorks.map((work, i) => (
                <Work
                    key={i}
                    count={i}
                    name={work.name}
                    href={work.href}
                    content={work.content}
                    img={work.img}
                    swap={work.swap}
                    inView={inView} 
                    length={myWorks.length-1}
                />
            ))}
        </div>
    </section>
  )
}

export default Works;
