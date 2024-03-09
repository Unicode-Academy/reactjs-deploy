import fetcher from './fetcher';

const LIMIT_PAGE = 6;
const getBlogs = async (
	options = {},
	page = '1',
	limit = LIMIT_PAGE.toString()
) => {
	const unlimited = !!options?.unlimited;
	const query = {};

	if (!unlimited) {
		query.limit = limit;
		query.page = page;
	}

	if (options) {
		const { search, tag } = options;
		if (search) {
			query.search = search;
		}
		if (tag) {
			query.tag = tag;
		}
	}

	const search = '?' + new URLSearchParams(query).toString();
	const data = await fetcher('/api/blogs' + search);
	return data;
};
export default getBlogs;

export const getBlog = async (id) => {
	const data = await fetcher('/api/blogs/' + id);
	return data;
};
