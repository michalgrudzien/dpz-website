import get from "lodash.get";

export const getPostUrl = post => {
  const categorySlug = get(post, "category.slug.current", "");
  const postSlug = get(post, "slug.current", "");

  return `/blog/${categorySlug}/${postSlug}`;
};

export const getPostCategoryUrl = post => {
  const categorySlug = get(post, "category.slug.current", "");

  return `/blog/${categorySlug}`;
};
