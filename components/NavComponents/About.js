import React from "react";
import MyOverview from "../subComponents/AboutComponents/MyOverview";
import PageTitle from "../subComponents/ReusableComponents/PageTitle";
import { urlFor } from "../../sanity";

function About({about, titles}) {
  const { title, description, image, contact } = about[0];

  return (
    <div className="relative items-center justify-center w-full h-2/3">
          <PageTitle title={titles.title} sub={titles.sub} />
          <MyOverview 
            image={urlFor(image).url()}
            title={title}
            description={description}
            name={contact[0]?.name}
            email={contact[0]?.email}
            address={contact[0]?.address}
          />
    </div>
  )
}

export default About;
