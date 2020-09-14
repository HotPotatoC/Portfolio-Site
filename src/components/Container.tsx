import React from "react";

export const Container: React.FC = ({children}) => (
  <div className='container mx-auto px-12 sm:px-16 md:px-20 lg:px-24'>
    {children}
  </div>
);

export default Container;
