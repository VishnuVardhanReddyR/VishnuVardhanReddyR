import Image from "next/image";
import React from "react";
import MyOverview from "./AboutComponents/MyOverview";
import MyServices from "./AboutComponents/MyServices";

function About() {
  return (
    <div className="bg-black">
        <div className="h-screen px-4 pt-12">
            <div className="space-y-4 text-center justify-center mt-2">
                <p className="text-sm text-gray-500 pt-10">Get to know me</p>
                <p className="text-xl text-white font-semibold">About Me</p>
            </div>
            <div>
              <main className="text-white mt-10 grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-2 xl:max-w-6xl mx-auto">
                <section className="col-span-1">
                    
                </section>
                <section className="col-span-1 xl:inline-grid">
                  <MyOverview />
                </section>
              </main>
            </div>
            <div className="mt-10">
              <MyServices />
            </div>
        </div>
    </div>
  )
}

export default About;
