import React from "react";
import useCollapse from 'react-collapsed';

export default function BerkshireComponent() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    
    return(
        <div className="sm:w-1/2 w-100 p-4">
            <a
              href="https://www.figma.com/proto/dbbXlaR3RR1W9X6vhx5iUa/Rubbrband?node-id=20%3A66&scaling=contain&page-id=1%3A2&starting-point-node-id=20%3A66">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center galleryImage"
                  src="./rubbrband.gif"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-gray-400 mb-1">
                    Figma
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    Prorotype for Rubbrband
                  </h1>
                  <p className="leading-relaxed">
                    A group of students and I created a prototype for a startup, Rubbrband. This concept easily allows users to upload a dataset and choose an ML model, while all dependencies are handled for them.
                  </p>
                </div>
              </div>
            </a>
            <p className="heading" {...getToggleProps()}>
              {isExpanded ? 'More Info (Collapse)' : 'More Info (Expand)'} 
            </p>
            <div className="collapsible">
              <div {...getCollapseProps()}>
                <b className="subheader">
                  Context
                </b>
                <div className="content">
                  A group of three other students and I created a hi-fi prototype for a startup called Rubbrband. The goal of the startup
                  is to provide an easy way to train ML models given a dataset, and Rubbrband will handle all dependencies for the user.
                </div>
                <b className="subheader">
                  Research
                </b>
                <div className="content">
                  Rubbrband allows users to select a machine learning model, usually from GitHub and upload their dataset to train said 
                  model on. Rubbrband then trains the model by resolving all dependencies for the model, allowing the user to train machine
                  learning models quite easily, and it allows for a wide range of model types.
                </div>
                <b className="subheader">
                  Design Iterations
                </b>
                <div className="content">
                  Rubbrband's user portal has a few main functionalities. Choosing an ML model, uploading a dataset, and training the model.
                  Dependencies are handled by the user, and thus, for simplicity's sake, should not be inlcuded in the user portal. The user
                  only needs to see their active models and potentially see their current subscription with an upgrade option. Thus, this
                  is all that was included to prevent an over-complicated interface. We also received peer feedback to add more contrast, which
                  made the logo and GitHub logo more visible. We also stripped away many elements from the FAQ section specifically, since 
                  many peers commented that it looked too cluttered.
                </div>
                <b className="subheader">
                  Conclusion
                </b>
                <div className="content">
                  This became a simple user interface. We tested this website on UserTesting and all of the users commented that the Design
                  was simple, intuitive and easy to learn. While there were some critiques of the users, all of them agreed that the core 
                  functionality was very easy.
                </div>
              </div>
            </div>
          </div>
    )
}