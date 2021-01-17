import React, { useState } from 'react'

const BlogForm = ({ createBlog }) => {
	const [newBlog, setNewBlog] = useState({
		title: '',
		author: '',
		url: '',
	})

	const addBlog = (event) => {
		event.preventDefault()
		createBlog(newBlog)
		setNewBlog({
			title: '',
			author: '',
			url: '',
		})
	}
	return (
		<form onSubmit={addBlog}>
			<h2 className='blog-heading'>create new blog</h2>
			<div>
				title
				<input
					type='text'
					id='title'
					value={newBlog.title}
					name='Title'
					onChange={({ target }) =>
						setNewBlog({ ...newBlog, title: target.value })
					}
				/>
			</div>
			<div>
				author
				<input
					type='text'
					id='author'
					value={newBlog.author}
					name='Author'
					onChange={({ target }) =>
						setNewBlog({ ...newBlog, author: target.value })
					}
				/>
			</div>
			<div>
				url
				<input
					type='text'
					id='url'
					value={newBlog.url}
					name='URL'
					onChange={({ target }) =>
						setNewBlog({ ...newBlog, url: target.value })
					}
				/>
			</div>
			<button type='submit' id='create-blog'>
				create
			</button>
		</form>
	)
}

export default BlogForm
