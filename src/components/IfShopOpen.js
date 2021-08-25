import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const IfShopOpen = ({ children }) => {
  const data = useStaticQuery(graphql`
    query ShopOpenQuery {
      allSanitySiteMetadata {
        nodes {
          isShopOpen
        }
      }
    }
  `);

  return <>{data.allSanitySiteMetadata.nodes[0].isShopOpen && children}</>;
};

export default IfShopOpen;
