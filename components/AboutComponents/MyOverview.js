import React from 'react'

function MyOverview() {
  return (
    <section class="text-gray-400 body-font">
      <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <h2 class="sm:text-3xl text-2xl text-gray-300 font-medium title-font mb-2 md:w-2/5">
            As a Software Engineer and Web Developer, I am Vishnu Vardhan.
          </h2>
        <div class="md:w-3/5 md:pl-6">
          <p class="leading-relaxed text-base">
            As a freelancer based in India, I have been developing noteworthy websites for years that follow current trends. It is my job to turn ideas into solutions. Being able to see product evolution clearly helps me prioritize tasks, iterate promptly, and deliver projects faster.
          </p>
          <div class="flex md:mt-4 mt-6">
              <h4 className="text-gray-400 mr-8"><b className="text-gray-300">Name: </b> Vishnu Vardhan Reddy Rapuru</h4>
              <h4 className="text-gray-400"><b className="text-gray-300">Age: </b>23</h4>
          </div>
          <div class="flex md:mt-4 mt-6">
              <h4 className="text-Primary mr-10"><b className="text-gray-300 mr-2">Email: </b><a href="mailto:vishnurapuru@gmail.com">vishnurapuru10@gmail.com</a></h4>
              <h4 className="text-gray-400"><b className="text-gray-300">From: </b>Hyderabad, India</h4>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyOverview;
