import React from "react";
import useCollapse from 'react-collapsed';

export default function Vendor() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    
    return(
        <div className="sm:w-1/2 w-100 p-4">
            <a
              href="https://github.com/sameersinha3/vendor-app">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center galleryImage"
                  src="./vendor.gif"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-gray-400 mb-1">
                    PHP, SQL, jQuery, HTML/CSS
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    Vendor Application
                  </h1>
                  <p className="leading-relaxed">
                    This is a simple code feature where users can apply to be a vendor at an event, and admins can create, read, update and delete applications.
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
                  - Users can apply to be a vendor at an event after receiving approval from admin <br>
                  - Admins can create, read, update, delete applications using jQuery and MySQL <br>
                  - Frontend and backend both built in PHP executing MySQL commands <br>
                </div>
              </div>
            </div>
          </div>
    )
}
