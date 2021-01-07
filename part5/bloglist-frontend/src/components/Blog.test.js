import React from 'react'
import { render } from '@testing-library/react'
import Blog from './Blog'

describe('blog component', () => {
	const blog = {
		title: 'react test',
		author: 'Jay Kanakiya',
		url: 'reacttestblog.com',
		likes: 0,
	}

	test('renders the blog title and author name and does not render likes and url', () => {
		const component = render(<Blog blog={blog} />)

		expect(component.container).toHaveTextContent(blog.title)
		expect(component.container).toHaveTextContent(blog.author)
		expect(component.container).not.toHaveTextContent(blog.url)
		expect(component.container).not.toHaveTextContent(blog.likes)
	})
})
