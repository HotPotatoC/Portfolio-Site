import React from "react";
import {motion} from "framer-motion";
import {Link} from "gatsby";
import Container from "./Container";

export const Header: React.FC = () => {
  return (
    <motion.header
      initial={{width: 0}}
      animate={{width: "100%"}}
      transition={{
        duration: 3,
        ease: [0.19, 1.0, 0.22, 1.0],
      }}
      className='fixed top-0 z-30 py-6 bg-black bg-opacity-25 border-b border-white border-opacity-25'
    >
      <Container>
        <div className='flex flex-row-reverse flex-wrap items-center'>
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 3, delay: 1}}
          >
            <Link id='link' to='/'>
              <span className='font-bold text-lg text-white select-none'>
                juan.
              </span>
            </Link>
          </motion.div>
        </div>
      </Container>
    </motion.header>
  );
};

export default Header;
