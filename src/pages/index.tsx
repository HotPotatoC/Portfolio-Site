import React from "react";
import {useInView} from "react-intersection-observer";
import "../styles/pages/home.scss";

import SEO from "../components/SEO";

import HeadlineSection from "../components/home/HeadlineSection";
import WorksSection from "../components/home/WorksSection";
import AboutSection from "../components/home/AboutSection";
import ContactSection from "../components/home/ContactSection";

export const IndexPage: React.FC = () => {
  const [workRef, inWorkView] = useInView({
    threshold: 0.4,
  });
  const [aboutRef, inAboutView] = useInView({
    threshold: 0.4,
  });
  const [contactRef, inContactView] = useInView({
    threshold: 0.4,
  });

  return (
    <>
      <SEO
        keywords={[
          `juan`,
          `juan christian`,
          `juan's portfolio`,
          `portfolio`,
          `web developer`,
          `web programmer`,
        ]}
        title='Home'
      />
      <div className='flex flex-wrap mt-56'>
        <HeadlineSection />
        <WorksSection inView={inWorkView} ref={workRef} />
        <AboutSection inView={inAboutView} ref={aboutRef} />
        <ContactSection inView={inContactView} ref={contactRef} />
      </div>
    </>
  );
};

export default IndexPage;
