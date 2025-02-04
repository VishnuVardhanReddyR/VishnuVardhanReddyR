import React from "react";
import MyOverview from "../subComponents/AboutComponents/MyOverview";
import PageTitle from "../subComponents/ReusableComponents/PageTitle";
import { urlFor } from "../../sanity";

function About({ about, titles }) {
  const { title, description, image, contact } = about[0];
  const { name, email, address, nameLabel, emailLabel, addressLabel } = contact[0];

  return (
    <div className="relative items-center justify-center w-full h-screen p-4 lg:p-1 overflow-y-scroll scrollbar-hide scroll-smooth">
      <PageTitle title={titles.title} sub={titles.sub} />
      <MyOverview
        image={urlFor(image).url()}
        title={title}
        description={description}
        name={name}
        email={email}
        address={address}
        nameLabel={nameLabel}
        emailLabel={emailLabel}
        addressLabel={addressLabel}
      />
    </div>
  )
}

export default About;