import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Pdf from "gatsby-transformer-pdf";

const ResumePdf = ({ filename, alt }) => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { extension: { eq: "pdf" } }) {
          edges {
            node {
              relativePath
              name
            }
          }
        }
    `}
    render={data => {
      const pdf = data.allFile.edges.find(n => {
        return n.node.relativePath.includes(filename);
      });

      if (!pdf) return null;

      return <Pdf alt={alt} />;
    }}
  />
);

ResumePdf.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default ResumePdf;
