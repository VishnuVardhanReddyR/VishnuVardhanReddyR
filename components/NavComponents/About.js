import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { aboutState } from "../../Atoms/aboutAtom";
import MyOverview from "../subComponents/AboutComponents/MyOverview";
import PageTitle from "../subComponents/ReusableComponents/PageTitle";
import { urlFor } from "../../sanity";

function About({about, titles}) {
  const { title, description, image, contact } = about[0];
  const[ aboutOpen, setAboutOpen ] = useRecoilState(aboutState);

  return (
    <section id="About" className="items-center justify-center h-screen my-auto">
          {/* @ts-expect-error async server component */}
          <PageTitle title={titles.title} sub={titles.sub} />
          {/* @ts-expect-error async server component */}
          <MyOverview 
            image={urlFor(image).url()}
            title={title}
            description={description}
            name={contact[0]?.name}
            email={contact[0]?.email}
            address={contact[0]?.address}
          />
    </section>
  )
}

export default About;
