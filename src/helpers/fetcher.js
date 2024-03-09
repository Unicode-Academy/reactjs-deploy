/**
 * This function used to call api with x-api-key header
 * @param {string} url is required
 */
const fetcher = async (url, options) => {
	const token = import.meta.env.VITE_API_TOKEN;

	if (!url.startsWith('http')) {
		url = import.meta.env.VITE_HOST + url;
	}
	return fetch(url, {
		...options,
		headers: {
			'x-api-key': token,
			...options?.headers,
		},
	})
		.then((res) => {
			let data = null;
			try {
				data = res?.json();
			} catch (e) {
				console.error(e);
				data = null;
			}
			return data;
		})
		.catch((err) => {
			console.error('Error: ', err);
			return {
				status: 500,
				error: err,
			};
		});
};

export default fetcher;
