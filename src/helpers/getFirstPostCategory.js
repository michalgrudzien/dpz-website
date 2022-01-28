import get from "lodash.get"

export default (post) => get(post, 'category[0]', null);
