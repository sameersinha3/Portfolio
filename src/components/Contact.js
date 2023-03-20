import React from "react";

export default function Contact() {

  return (
    <section id="about" className="relative bg-gray-100">
      <div className="px-5 py-10 mx-auto text-gray-400 body-font">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-black mb-4">
            About Me
          </h1>
          
          <div className="about-me">
            <img src="headshot.png" alt="Headshot" className="headshot"></img>
            <p className="text-gray-600 leading-relaxed about-text text-left">
              I am a junior at Brown University curently seeking internship and summer opportunities for Summer of 2023. Last summer, I
              interned at <a href="https://www.korewireless.com/"> <u>KORE Wireless</u></a>, where I used Python and NODE-Red to write
              automatic test scripts to run on individual devices to measure their functionality and performance, including testing latency, 
              jitter, speed, SMS, etc. In fall of 2022, I was also a teaching assistant for Artificial Intelligence. I revised the Reinforcement Learning
              project, which included re-writing the assignment handout and holding a gearup session for students. Additionally, I answered 100+ student
              questions throughout the year on EdStem, and held office hours for two hours per week. I also helped construct the course website, which
              is viewable above in my portfolio. Finally, class projects have allowed me to build various applications. I have taken coursework in Artificial Intelligence,
              Deep Learning, Full-Stack Engineering, User Interfaces and User Experiences, which focused heavily on front-end work, as well as the basic major requirements.
              I can build aesthetic front ends, complex backends with AI, and I can use my full stack knowledge to combine the two. To read
              more about me, a copy of my resumé can be found <a href="https://drive.google.com/file/d/1h_GEi614MOAqNkIvORj_RWWIt0tzr1cJ/view?usp=sharing"><u>at this Google Drive Link.</u></a>
            </p>
            
          </div>
        </div>
      </div>
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="bg-gray-100 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold gray-600 tracking-widest text-xs">
                LinkedIn
              </h2>
              <p className="mt-1 text-gray-600">
                <a>https://www.linkedin.com/in/sameer-sinha-2002/</a>
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold gray-600 tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-gray-600 leading-relaxed">
                sameer_sinha@brown.edu
              </a>
            </div>
          </div>
       
      </div>
    </section>
  );
}
