import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import { Col, Container, Row, media } from "styled-bootstrap-grid";
import styled from "styled-components";
import colors from "utils/colors";

const CategoriesList = styled.ul`
  font-family: "Bebas Neue", sans-serif;
  padding: 1em 0;

  ${media.md`
    text-align: center;
    padding: 2em 0 3em;
  `}
`;

const CategoriesListItem = styled.li`
  display: inline-block;
  padding: 0 2em 1em 0;

  ${media.md`  
    padding: 0 0 0 2em;
  `};
`;

const CategoryLink = styled(Link)`
  color: ${colors.secondary};
  text-decoration: none;

  &:hover,
  &.is-active {
    text-decoration: underline;
  }
`;

const renderCategoriesListItems = categories =>
  categories.map(category => (
    <CategoriesListItem>
      <CategoryLink
        to={`/blog/${category.slug.current}`}
        activeClassName="is-active"
      >
        {category.title}
      </CategoryLink>
    </CategoriesListItem>
  ));

const CategoriesMenu = ({ className }) => {
  const {
    allSanityCategory: { nodes: categories },
  } = useStaticQuery(graphql`
    query CategoriesQuery {
      allSanityCategory {
        nodes {
          slug {
            current
          }
          title
        }
      }
    }
  `);

  return (
    <div className={className}>
      <Container>
        <Row>
          <Col>
            <CategoriesList>
              <CategoriesListItem>
                <CategoryLink to="/blog" activeClassName="is-active">
                  Wszystkie kategorie
                </CategoryLink>
              </CategoriesListItem>
              {renderCategoriesListItems(categories)}
            </CategoriesList>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CategoriesMenu;
