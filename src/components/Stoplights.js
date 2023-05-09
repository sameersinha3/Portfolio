import React from "react";
import useCollapse from 'react-collapsed';

export default function StopLights() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    
    return(
        <div className="sm:w-1/2 w-100 p-4">
            <a
              href="https://github.com/funnybear681/ProjectStopLights">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center galleryImage"
                  src="./trackers.gif"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100 gallerycover">
                  <h2 className="tracking-widest text-sm title-font font-medium text-gray-400 mb-1">
                    Python, TensorFlow and PyTorch
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    Project Stoplights
                  </h1>
                  <p className="leading-relaxed">
                    My final project for CSCI 1470: Deep Learning combines two object detection models, one which we built from scratch, to accurately predict if a vehicle stops at a crosswalk
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
                  - Final Project for Deep Learning class
                  - Trained crosswalk detection model using RCNN using synthetically created, annotated images
                  - YoloV5 framework using Roboflow dataset trained using Jupyter notebook to detect cars
                  - Combined models algorithmically to detect relative positions of cars and crosswalks over time to determine stops.
                </div>
              </div>
            </div>
          </div>
    )
}