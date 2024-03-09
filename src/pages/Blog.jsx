import React, { useLayoutEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getBlog } from '../helpers/getBlogs';
import mdToHtml from '../helpers/mdToHtml.js';
export default function Blog() {
	const { id } = useParams();
	const [blog, setBlog] = useState({});
	useLayoutEffect(() => {
		getBlog(id).then((data) => setBlog(data));
	}, []);
	if (!blog.blog_id) return <span>Loading...</span>;
	const content = mdToHtml(blog.content);
	return (
		<>
			<Link to={'/'}>Back Home</Link>
			<div className='flex'>
				<h1>{blog.title}</h1>
				<img src={blog.image_url} width={200} />
			</div>
			<div className='content' dangerouslySetInnerHTML={{ __html: content }} />
			<Link to={'/'}>Back Home</Link>
		</>
	);
}
