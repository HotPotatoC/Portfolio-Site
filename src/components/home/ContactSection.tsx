import React from "react";
import {motion} from "framer-motion";

interface ContactProps {
  inView: boolean;
}

export const ContactSection = React.forwardRef<any, ContactProps>(
  ({inView}, ref: React.RefObject<any>) => {
    return (
      <>
        <div
          className='w-full relative overflow-hidden mt-32 mb-64 py-64 md:py-32 select-none md:border md:border-white'
          ref={ref}
        >
          <h1 className='font-head text-center text-white text-3xl md:text-6xl lg:text-7xl leading-tight'>
            <div className='headline-text-wrapper relative overflow-hidden'>
              <motion.div
                initial={{opacity: 0, y: "2em"}}
                animate={inView ? {opacity: 1, y: 0} : {}}
                transition={{
                  duration: 3,
                  ease: [0.19, 1.0, 0.22, 1.0],
                  delay: 0.25,
                }}
              >
                <span>Let's Talk!</span>
              </motion.div>
            </div>
          </h1>
          <div className='flex items-center justify-center mt-12'>
            <form
              method='post'
              netlify-honeypot='bot-field'
              data-netlify='true'
              name='contact'
            >
              <input type='hidden' name='bot-field' />
              <input type='hidden' name='form-name' value='contact' />
              <div className='flex flex-wrap items-center'>
                <motion.input
                  initial={{height: 0}}
                  animate={inView ? {height: "auto"} : {}}
                  transition={{
                    duration: 3,
                    ease: [0.19, 1.0, 0.22, 1.0],
                    delay: 0.25,
                  }}
                  className='w-full md:w-1/2 p-4 bg-black text-white border border-white'
                  type='text'
                  name='email'
                  placeholder='Your Email'
                />
                <motion.input
                  initial={{height: 0}}
                  animate={inView ? {height: "auto"} : {}}
                  transition={{
                    duration: 3,
                    ease: [0.19, 1.0, 0.22, 1.0],
                    delay: 0.25,
                  }}
                  className='w-full md:w-1/2 p-4 bg-black text-white border border-white'
                  type='text'
                  name='name'
                  placeholder='Your Name'
                />
              </div>
              <motion.textarea
                initial={{height: 0}}
                animate={inView ? {height: "16rem"} : {}}
                transition={{
                  duration: 3,
                  ease: [0.19, 1.0, 0.22, 1.0],
                  delay: 0.25,
                }}
                className='w-full p-4 bg-black text-white border border-white'
                name='message'
                placeholder='Message'
              ></motion.textarea>
              <button
                className='w-full p-6 bg-white font-head text-black'
                type='submit'
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
);

export default ContactSection;
