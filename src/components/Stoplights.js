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
                  Context
                </b>
                <div className="content">
                  This was my final project for CSCI 1470: Deep Learning. My group member and I decided to explore object detection, as it was 
                  an area that we had not really touched on in class beyond a simple Convolutional Neural Network.
                </div>
                <b className="subheader">
                  Research
                </b>
                <div className="content">
                  We built our crosswalk detection model using an RCNN (Region Based Convolutional Neural Network) to identify regions of an image
                  that were a "crosswalk". We did this by using a synthetically created collection of images from an autonomous driving software Carla.
                  This dataset had images from different weather conditions, night, day, and different colored crosswalks. This data was in the form of
                  PNG images and an annotation JSON file written in COCO annotation style. We split our data into training, testing and validation sets, and then
                  trained it for 50k epochs with a batch size of 4. 
                  For our vehicle detection model, we used a YoloV5 framework using a Roboflow dataset, which worked really well. We did not build the model,
                  but we exported the PyTorch weights from a YoloV5 training Jupyter Notebook on our custom datset. To account for videos, we integrated a strongsort
                  model so that our model would recognize the vehicles between frames. 
                  Once we have the position of the crosswalk and vehicle, using the vehicle's location over time, we can determine whether it stops based off of
                  the distance from the crosswalk. Given a very slight margin of error, we check to make sure 1) that the vehicle remains in the same position for 60 frames
                  , which equates to about one second, and 2) the vehicle is close enough to the crosswalk, so as to not catch stops that happen much before the crosswalk.
                </div>
                <b className="subheader">
                  Results
                </b>
                <div className="content">
                  Our individual detection models worked very well. The crosswalk model had an IoU (Intersection over Union— a measure of how well the predicted
                  bounding box of the crosswalk matches up with the actual box of 0.75 with a very high average precision. Our Vehicle detection model had a mAP of 
                  0.97, indicating extremely high accuracy. We were not able to test our combined model with deepsort, but based on the eye test, it seemed to
                  catch stops accurately, and it could tell which vehicles rolled or blew through stop signs.
                </div>
              </div>
            </div>
          </div>
    )
}