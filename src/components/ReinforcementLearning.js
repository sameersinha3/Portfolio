import React from "react";
import useCollapse from 'react-collapsed';

export default function ReinforcementLearning() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    
    return(
        <div className="sm:w-1/2 w-100 p-4">
            <a
              href="https://github.com/funnybear681/ReinforcmentLearning">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center galleryImage"
                  src="./rl.gif"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-gray-400 mb-1">
                    Python
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    Reinforcement Learning
                  </h1>
                  <p className="leading-relaxed">
                    I created a Reinforcement Learner in the Gym environment with 3 methods. Sarsa, Sarsa-lambda, and, an area under active research by the professor of CSCI 1410: Sarsa-lambda with a fourier basis
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
                  This was one of the projects for CSCI 1410: Artificial Intelligence. The goal was to create three reinforcment learning models. I 
                  enjoyed this project so much that, when I TAed this course, this is the project for which I created the gear-up (link can be found)
                  on the course website to the left.
                </div>
                <b className="subheader">
                  Designing
                </b>
                <div className="content">
                  The first algorithm was the basic SARSA algorithm. At each state, we record the state and corresponding action, then calculate
                  reward and move on to the next state-action pair. Given these 5 components, we can calculate TD error and update the qtable at
                  the correct state-action pair, then update our state-action pair and move on to the next step. We repeat this until we reach the
                  end, and repeat for N episodes. Sarsa-lambda is quite different, because instead of updating the qtable at only the current state-action
                  pair, we update the eligibility trace each cell by TD error times the value in the eligibility trace: thus, we also update past states
                  at a discounted rate. In the continuous case, we do not have a discrete grid of state-action pairs, so we will need to adjust our model.
                  We use fourier basis functions, multipliers and state vectors to find the optimal linear combination of 16 basis functions. We still use
                  an eligibility trace, but we update an entire column of our basis functions.
                </div>
                <b className="subheader">
                  Conclusion
                </b>
                <div className="content">
                  In this project, I learned a lot about designing reinforcment learning algorithms, and in fact, I gave a presentation on
                  the gear-up for this project the next year. I learned about the SARSA algorithm, TD-error, q tables, and eligibilty traces.
                  For the continuous mountain car problem, I gained experience with fourier bases and state vectors.
                </div>
              </div>
            </div>
          </div>
    )
}