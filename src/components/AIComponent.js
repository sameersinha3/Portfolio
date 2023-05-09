import React from "react";
import useCollapse from 'react-collapsed';

export default function AIComponent() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    
    return(
        <div className="sm:w-1/2 w-100 p-4">
            <a
              href="https://csci1410-2022.vercel.app/">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center galleryImage"
                  src="./cs1410.gif"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-gray-400 mb-1">
                    React and Bootstrap CSS
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    CSCI 1410 Course Website
                  </h1>
                  <p className="leading-relaxed">
                    I helped design the website for CSCI 1410: Artificial Intelligence, a course I TAed in Fall 2022. This project was done after voting as a class on a Game of Thrones theme.
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
                  - Helped create the course website using React and Boostrap CSS <br>
                  - "Game of Thrones" theme voted on by class <br>
                </div>
              </div>
            </div>
          </div>
    )
}
