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
                  The Project
                </b>
                <div className="content">
                  - Created Hi-Fi prototype for RubbrBand, a startup dedicated to easily resolving dependencies for training ML models.
                  - Went through multiple rounds of peer feedback to create simpler design
                  - Tested on UserTesting.com and received positive feedback
                </div>
              </div>
            </div>
          </div>
    )
}