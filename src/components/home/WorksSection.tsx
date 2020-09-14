import React, {useState} from "react";
import {motion} from "framer-motion";
import {graphql, useStaticQuery} from "gatsby";
import Img from "gatsby-image";
import {OutboundLink} from "gatsby-plugin-google-analytics";

interface WorksProps {
  inView: boolean;
}

interface WorkItem {
  title: string;
  url: string;
  graphqlImgKey: string;
  desc: string[];
}

export const WorksSection = React.forwardRef<any, WorksProps>(
  ({inView}, ref: React.RefObject<any>) => {
    const [showWorkImage, setShowWorkImage] = useState(false);
    const [currentWorkImage, setCurrentWorkImage] = useState("mindzzleImage");
    const data = useStaticQuery(query);

    const works: WorkItem[] = [
      {
        title: "Mindzzle",
        url: "https://user.mindzzle.com",
        graphqlImgKey: "mindzzleImage",
        desc: ["internship", "front-end"],
      },
      {
        title: "Covinfo",
        url: "https://covinfo.herokuapp.com",
        graphqlImgKey: "covinfoImage",
        desc: ["personal", "front-end"],
      },
      {
        title: "Instagram Clone",
        url: "https://github.com/HotPotatoC/instagram-clone",
        graphqlImgKey: "instagramCloneImage",
        desc: ["personal", "full-stack javascript"],
      },
      {
        title: "Mern Blog",
        url: "https://github.com/HotPotatoC/markdown-blog",
        graphqlImgKey: "mernblogImage",
        desc: ["personal", "full-stack", "mern stack"],
      },
    ];

    return (
      <div
        className='w-full relative overflow-hidden my-64 select-none'
        ref={ref}
      >
        <div
          className='hidden md:block fixed transform left-0 translate-x-1/2 translate-y-1/2'
          style={{
            opacity: showWorkImage ? 1 : 0,
            transition: "0.15s",
          }}
        >
          <Img
            key={data[currentWorkImage].id}
            fixed={data[currentWorkImage].childImageSharp.fixed}
            alt='...'
          />
        </div>
        <h1 className='mb-24 font-head text-white text-3xl md:text-4xl lg:text-6xl leading-tight'>
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
              <span>Works</span>
            </motion.div>
          </div>
        </h1>
        {works.map((work, index) => (
          <div key={index} className='mt-12'>
            <div className='headline-text-wrapper relative overflow-hidden'>
              <motion.div
                initial={{opacity: 0, y: "5em"}}
                animate={inView ? {opacity: 1, y: 0} : {}}
                transition={{
                  duration: 3,
                  ease: [0.19, 1.0, 0.22, 1.0],
                  delay: 1 + 0.2 * index,
                }}
              >
                <div className='flex space-x-2'>
                  <span className='font-bold text-xs text-gray-400'>{`0${
                    index + 1
                  }`}</span>
                  <OutboundLink
                    id={work.title.toLowerCase()}
                    target='_blank'
                    href={work.url}
                    className='font-head work--text-outline text-3xl md:text-4xl lg:text-7xl leading-tight'
                    onMouseEnter={() => {
                      setCurrentWorkImage(work.graphqlImgKey);
                      setShowWorkImage(true);
                    }}
                    onMouseLeave={() => {
                      setShowWorkImage(false);
                    }}
                  >
                    {work.title}
                  </OutboundLink>
                </div>
              </motion.div>
            </div>
            <div className='sub-text-wrapper relative overflow-hidden font-bold text-gray-400 text-lg'>
              <motion.div
                initial={{opacity: 0, y: "5em"}}
                animate={inView ? {opacity: 1, y: 0} : {}}
                transition={{
                  duration: 3,
                  ease: [0.19, 1.0, 0.22, 1.0],
                  delay: 1.05,
                }}
              >
                <span>{work.desc.join(" • ")}</span>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    );
  }
);

export default WorksSection;

const query = graphql`
  query WorkImages {
    mindzzleImage: file(relativePath: {eq: "mindzzlemockup.jpg"}) {
      id
      childImageSharp {
        fixed(height: 600) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    covinfoImage: file(relativePath: {eq: "covinfomockup.jpg"}) {
      id
      childImageSharp {
        fixed(height: 600) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    instagramCloneImage: file(relativePath: {eq: "instagramclonemockup.jpg"}) {
      id
      childImageSharp {
        fixed(height: 600) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    mernblogImage: file(relativePath: {eq: "mernblogmockup.jpg"}) {
      id
      childImageSharp {
        fixed(height: 600) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
