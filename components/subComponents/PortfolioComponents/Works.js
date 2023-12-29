import React from 'react';
import Work from "./Work";
import { myWorks } from "../../../lib/Data";

function Works({ inView }) {
  return (
    <section className="w-full text-gray-400 body-font">
        <div className="relative z-20 flex w-full overflow-x-scroll overflow-y-hidden no-scrollbar snap-x snap-mandatory ">
            {myWorks.map((work, i) => (
                <Work
                    key={i}
                    count={i + 1}
                    name={work.name}
                    href={work.href}
                    content={work.content}
                    img={work.img}
                    length={myWorks.length}
                />
            ))}

        </div>
    </section>
  )
}

export default Works;
