import React, { useState, useEffect, useRef } from 'react'
import Blog from './components/Blog'
import LoginForm from './components/LoginForm'
import BlogForm from './components/BlogForm'
import Togglable from './components/Togglable'
import blogService from './services/blogs'
import loginService from './services/login'
import './App.css'

const App = () => {
	const [blogs, setBlogs] = useState([])
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [user, setUser] = useState(null)
	const [error, setError] = useState(null)

	const handleLogin = async (event) => {
		event.preventDefault()

		try {
			const user = await loginService.login({ username, password })
			window.localStorage.setItem('loggedinuser', JSON.stringify(user))
			blogService.setToken(user.token)
			setUser(user)
			setUsername('')
			setPassword('')
		} catch (exception) {
			setError('Wrong Credentials')
			setTimeout(() => {
				setError(null)
			}, 5000)
		}
	}

	const logout = () => {
		window.localStorage.removeItem('loggedinuser')
	}

	const createBlog = async (newObj) => {
		console.log('in')
		const res = await blogService.createBlog(newObj)
		setBlogs(blogs.concat(res))
		blogFormRef.current.toggleVisibility()
	}

	useEffect(() => {
		blogService.getAll().then((blogs) => setBlogs(blogs))
	}, [])

	useEffect(() => {
		const loggedUser = window.localStorage.getItem('loggedinuser')
		if (loggedUser) {
			const user = JSON.parse(loggedUser)
			blogService.setToken(user.token)
			setUser(user)
		}
	}, [])

	const blogFormRef = useRef()
	return (
		<div>
			<h2>blogs</h2>
			<h1>{error}</h1>
			{user === null ? (
				<LoginForm
					username={username}
					setUsername={setUsername}
					password={password}
					setPassword={setPassword}
					handleLogin={handleLogin}
				/>
			) : (
				<div>
					<div>
						{user.name} is logged in <button onClick={logout}>logout</button>
					</div>
					<Togglable label='add new blog' ref={blogFormRef}>
						<BlogForm createBlog={createBlog} />
					</Togglable>
					<div className='bloglist'>
						{blogs.map((blog) => (
							<Blog key={blog.id} blog={blog} />
						))}
					</div>
				</div>
			)}
		</div>
	)
}

export default App
