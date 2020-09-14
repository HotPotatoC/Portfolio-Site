import React from "react";
import {motion} from "framer-motion";
import {OutboundLink} from "gatsby-plugin-google-analytics";

export const HeadlineSection: React.FC = () => {
  return (
    <div className='w-full select-none'>
      <h1 className='font-head text-white text-3xl md:text-6xl lg:text-7xl leading-tight'>
        <div className='headline-text-wrapper relative overflow-hidden'>
          <motion.div
            initial={{opacity: 0, y: "3em"}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 3, ease: [0.19, 1.0, 0.22, 1.0], delay: 1}}
          >
            Hello There,
          </motion.div>
        </div>
        <div className='headline-text-wrapper relative overflow-hidden'>
          <motion.div
            initial={{opacity: 0, y: "3em"}}
            animate={{opacity: 1, y: 0}}
            transition={{
              duration: 3,
              ease: [0.19, 1.0, 0.22, 1.0],
              delay: 1.25,
            }}
          >
            I'm Juan
          </motion.div>
        </div>
      </h1>
      <h2 className='mt-4 md:mt-6 font-bold text-gray-400 text-lg'>
        <div className='sub-text-wrapper relative overflow-hidden'>
          <motion.div
            initial={{opacity: 0, y: "5em"}}
            animate={{opacity: 1, y: 0}}
            transition={{
              duration: 3,
              ease: [0.19, 1.0, 0.22, 1.0],
              delay: 1.5,
            }}
          >
            Full Stack Capable Web developer based in Indonesia*
          </motion.div>
        </div>
      </h2>
      <div className='flex flex-col-reverse md:flex-row flex-wrap justify-between items-center mt-32'>
        <h2 className='font-bold text-gray-400 text-xl'>
          <div className='sub-text-wrapper relative overflow-hidden'>
            <motion.div
              initial={{opacity: 0, y: "5em"}}
              animate={{opacity: 1, y: 0}}
              transition={{
                duration: 3,
                ease: [0.19, 1.0, 0.22, 1.0],
                delay: 1.6,
              }}
            >
              <span>Scroll Down 👇😳</span>
            </motion.div>
          </div>
        </h2>
        <div className='flex flex-wrap space-x-4 md:space-x-8'>
          <div className='social-link-wrapper justify-end relative overflow-hidden'>
            <motion.div
              initial={{opacity: 0, y: "2em"}}
              animate={{opacity: 1, y: 0}}
              transition={{
                duration: 3,
                ease: [0.19, 1.0, 0.22, 1.0],
                delay: 1.75,
              }}
            >
              <OutboundLink href='mailto:juandotulung@gmail.com?subject=Hey juan 👋'>
                <span className='mt-4 md:mt-6 font-bold text-gray-400 text-base underline'>
                  email.
                </span>
              </OutboundLink>
            </motion.div>
          </div>
          <div className='social-link-wrapper justify-end relative overflow-hidden'>
            <motion.div
              initial={{opacity: 0, y: "2em"}}
              animate={{opacity: 1, y: 0}}
              transition={{
                duration: 3,
                ease: [0.19, 1.0, 0.22, 1.0],
                delay: 1.75,
              }}
            >
              <OutboundLink
                href='https://github.com/HotPotatoC/'
                target='_blank'
              >
                <span className='mt-4 md:mt-6 font-bold text-gray-400 text-base underline'>
                  github.
                </span>
              </OutboundLink>
            </motion.div>
          </div>
          <div className='social-link-wrapper relative overflow-hidden'>
            <motion.div
              initial={{opacity: 0, y: "2em"}}
              animate={{opacity: 1, y: 0}}
              transition={{
                duration: 3,
                ease: [0.19, 1.0, 0.22, 1.0],
                delay: 1.85,
              }}
            >
              <OutboundLink
                href='https://www.linkedin.com/in/juan-christian-6415aa1a4/'
                target='_blank'
              >
                <span className='mt-4 md:mt-6 font-bold text-gray-400 text-base underline'>
                  linkedin.
                </span>
              </OutboundLink>
            </motion.div>
          </div>
          <div className='social-link-wrapper relative overflow-hidden'>
            <motion.div
              initial={{opacity: 0, y: "2em"}}
              animate={{opacity: 1, y: 0}}
              transition={{
                duration: 3,
                ease: [0.19, 1.0, 0.22, 1.0],
                delay: 1.95,
              }}
            >
              <OutboundLink
                href='https://www.instagram.com/juanwmv/'
                target='_blank'
              >
                <span className='mt-4 md:mt-6 font-bold text-gray-400 text-base underline'>
                  instagram.
                </span>
              </OutboundLink>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadlineSection;
