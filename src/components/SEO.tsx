import {useStaticQuery, graphql} from "gatsby";
import React from "react";
import {Helmet} from "react-helmet";

interface SEOProps {
  description?: string;
  keywords?: string[];
  lang?: string;
  meta?: [];
  title: string;
}

export const SEO: React.FC<SEOProps> = ({
  description,
  lang = "en",
  meta = [],
  keywords = [],
  title,
}) => {
  const {site} = useStaticQuery(query);

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
      title={title}
      titleTemplate={site.siteMetadata.titleTemplate}
    />
  );
};

export default SEO;

const query = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        titleTemplate
        description
        author
      }
    }
  }
`;
