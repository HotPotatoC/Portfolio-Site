import React, {useRef, useEffect} from "react";
import {PageProps} from "gatsby";

import useWindowSize from "../hooks/useWindowSize";
import Header from "./Header";
import Container from "./Container";
import Cursor from "./Cursor";
import isBrowser from "../utils/isBrowser";

export const Layout: React.FC<PageProps & {children: React.ReactNode}> = ({
  children,
  location,
}) => {
  const size = useWindowSize();

  const appRef = useRef<HTMLDivElement>();
  const scrollContainerRef = useRef<HTMLDivElement>();

  useEffect(() => {
    document.body.style.height = `${
      scrollContainerRef.current.getBoundingClientRect().height
    }px`;
  }, [size.height]);

  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, []);

  const skewConfig = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  const skewScrolling = () => {
    skewConfig.current = isBrowser ? window.scrollY : 0;
    skewConfig.previous +=
      (skewConfig.current - skewConfig.previous) * skewConfig.ease;
    skewConfig.rounded = Math.round(skewConfig.previous * 100) / 100;

    const difference = skewConfig.current - skewConfig.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * 7.5;

    if (scrollContainerRef && scrollContainerRef.current) {
      scrollContainerRef.current.style.transform = `translateY(-${skewConfig.rounded}px) skewY(${skew}deg)`;
    }

    requestAnimationFrame(() => skewScrolling());
  };

  return (
    <>
      <Cursor location={location} />
      <Header />

      <div className='fixed top-0 left-0 w-full h-full overflow-hidden'>
        <div ref={appRef}>
          <div ref={scrollContainerRef} className='scroll-container'>
            <Container>{children}</Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
