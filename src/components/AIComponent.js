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
                  Context
                </b>
                <div className="content">
                  At Brown, most CS courses have a course website. Wanting to gain experience in frontend development and React, I volunteered
                  to help build the course website for the course I was TAing: Artificial Intelligence. 
                  
                </div>
                <b className="subheader">
                  Research
                </b>
                <div className="content">
                  Having the Game of Thrones theme to work off of presented a streamlined flow of design choices in terms of background imagery
                  and font choices. However, it also presented a series of new challenges. How would we show the theme in different places, while
                  still getting across all of the necessary information, such as hours, assignments and lectures? Our students had pre-defined needs,
                  and while the theme was of course a fun one, we did not want it to overpower the content of the website.
                </div>
                <b className="subheader">
                  Design Iterations
                </b>
                <div className="content">
                  Specific design choices we had to resolve included background imagery; we wanted it to be cohesive enough that the images blended
                  together, but different enough that the different sections of the website were distinguishable. We ended up achieving a nice balance
                  of this. We also used various Game of Thrones fonts we found on the web, as well as decorating each staff card with a Game of
                  Thrones house as an easter egg!
                </div>
                <b className="subheader">
                  Conclusion
                </b>
                <div className="content">
                  This is one of the first web apps I have built; however, I think that it is a good display of my frontend abilities with React and 
                  Bootstrap, the component library I am probably most familiar with. Since then, I have gotten much more experience with creating
                  more reactive apps, as well as new libraries such as Tailwind (which this portfolio was designed with).
                </div>
              </div>
            </div>
          </div>
    )
}