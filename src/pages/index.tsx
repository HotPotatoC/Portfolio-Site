import React from "react";
import {useInView} from "react-intersection-observer";
import "../styles/pages/home.scss";

import SEO from "../components/SEO";

import HeadlineSection from "../components/home/HeadlineSection";
import WorksSection from "../components/home/WorksSection";
import AboutSection from "../components/home/AboutSection";
import ContactSection from "../components/home/ContactSection";
import {graphql, useStaticQuery} from "gatsby";

export const IndexPage: React.FC = () => {
  const {image} = useStaticQuery(query);
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
        image={image.childImageSharp.fixed}
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

const query = graphql`
  query SEOImageQuery {
    image: file(relativePath: {eq: "me.jpg"}) {
      childImageSharp {
        fixed(height: 450, width: 500, grayscale: true, cropFocus: EAST) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
