import React from "react"
import { StaticQuery, graphql } from "gatsby"
import PropTypes from 'prop-types';

const Pdf = ({ filename}) => (
    <StaticQuery
        query={graphql`
        query {
           pdf: allFile{
            edges {
                node {
                    publicURL
                    }
                }
           }
        }
    `}
        render={data => {
            const pdf = data.pdf.edges.find(n => {
                return n.node.publicURL.includes(filename);
            });
            if (!pdf) return null;
        }}
    />
);
Pdf.propTypes = {
    filename: PropTypes.string,
};

export default Pdf;