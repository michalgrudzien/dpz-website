import get from "lodash.get";
import getFirstPostCategory from 'helpers/getFirstPostCategory';

export const getPostUrl = post => {
  const categorySlug = get(getFirstPostCategory(post), "slug.current", "");
  const postSlug = get(post, "slug.current", "");

  return `/blog/${categorySlug}/${postSlug}`;
};

export const getCategoryUrl = category => {
  const categorySlug = get(category, "slug.current", "");

  return `/blog/${categorySlug}`;
};
