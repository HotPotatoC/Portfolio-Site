import React from "react";
import {Link} from "gatsby";

import SEO from "../components/SEO";

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEO title='404: Not found' />
      <div className='flex flex-wrap mt-56'>
        <h1 className='font-head text-white text-3xl md:text-6xl lg:text-8xl leading-tight'>
          This page doesn't exists 😔
        </h1>
        <Link to='/'>
          <h1 className='font-head text-white text-xl md:text-4xl lg:text-6xl leading-tight'>
            Go back home
          </h1>
        </Link>
      </div>
    </>
  );
};

export default NotFoundPage;
