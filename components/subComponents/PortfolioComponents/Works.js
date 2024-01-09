import React from 'react';
import Work from "./Work";
import { urlFor } from '../../../sanity';

function Works({ myWorks }) {
  return (
    <section className="w-full mt-48 text-gray-400 md:-mt-24 body-font">
        <div className="relative z-20 flex w-full overflow-x-scroll overflow-y-hidden no-scrollbar snap-x snap-mandatory ">
            {myWorks.map((work, i) => (
                <Work
                    key={work._id}
                    count={i + 1}
                    name={work.title}
                    href={work.linkToProject}
                    content={work.description}
                    img={urlFor(work?.image).url()}
                    length={myWorks.length}
                />
            ))}

        </div>
    </section>
  )
}

export default Works;
