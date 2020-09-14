import React from "react";
import {motion} from "framer-motion";
import {graphql, useStaticQuery} from "gatsby";
import Img from "gatsby-image";

interface AboutProps {
  inView: boolean;
}

const Line: React.FC<
  AboutProps & {children: React.ReactNode; delay: number}
> = ({inView, children, delay}) => (
  <div className='about-text-wrapper relative overflow-hidden mb-2'>
    <motion.div
      initial={{opacity: 0, y: "2em"}}
      animate={inView ? {opacity: 1, y: 0} : {}}
      transition={{
        duration: 3,
        ease: [0.19, 1.0, 0.22, 1.0],
        delay: delay,
      }}
    >
      <span>{children}</span>
    </motion.div>
  </div>
);

export const AboutSection = React.forwardRef<any, AboutProps>(
  ({inView}, ref: React.RefObject<any>) => {
    const {image} = useStaticQuery(query);

    return (
      <>
        <div
          className='w-full relative overflow-hidden mt-64 select-none'
          ref={ref}
        >
          <h1 className='mb-12 md:mb-24 font-head text-white text-3xl md:text-4xl lg:text-6xl leading-tight'>
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
                <span>About</span>
              </motion.div>
            </div>
          </h1>
        </div>
        <div className='w-full md:w-1/2 mb-10 md:mb-64 md:pb-32 relative overflow-hidden select-none'>
          <h2 className='font-bold text-white text-lg md:text-xl lg:text-2xl leading-tight'>
            <Line inView={inView} delay={0.25}>
              Hello — I'm Juan. 👋
            </Line>
            <Line inView={inView} delay={0.3}>
              I am 17 Years old and i live in Bekasi, Indonesia. I am currently
              a high school student.
            </Line>
            <Line inView={inView} delay={0.35}>
              I am experienced in developing Web Applications in both frontend
              and backend.
            </Line>
            <Line inView={inView} delay={0.4}>
              I am a fast-learner and collaborative during work
            </Line>
          </h2>
        </div>
        <div className='w-full md:w-1/2 mb-64 pb-32 pl-6'>
          <motion.div
            className='about-img-container relative overflow-hidden h-full'
            initial={{width: "0%"}}
            animate={inView ? {width: "100%"} : {}}
            exit={{width: "0%"}}
            transition={{
              duration: 3,
              ease: [0.19, 1.0, 0.22, 1.0],
              delay: 0.25,
            }}
          >
            <Img fixed={image.childImageSharp.fixed} alt="Juan Christian's Portrait" />
          </motion.div>
        </div>
      </>
    );
  }
);

export default AboutSection;

const query = graphql`
  query AboutImageQuery {
    image: file(relativePath: {eq: "me.jpg"}) {
      childImageSharp {
        fixed(height: 450, width: 500, grayscale: true, cropFocus: EAST) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
