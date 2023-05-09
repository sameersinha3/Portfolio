import React from "react";
import AIComponent from "./AIComponent";
import Vendor from "./Vendor";
import StopLights from "./Stoplights";
import RubbrbandComponent from "./RubbrbandComponent";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-100 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-slate-600 header-animated">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-slate-500">
            I have built apps using React, Boostrap, and Tailwind, and prototyped
            multiple apps using Figma. Please click on a project to view it, or view detailed descriptions below. 
          </p>
          <br></br>
        </div>
        <div className="flex flex-wrap -m-4">

          <AIComponent></AIComponent>
          <Vendor></Vendor>
          <StopLights></StopLights>
          <RubbrbandComponent></RubbrbandComponent>

        </div>
      </div>
    </section>
  );
}
