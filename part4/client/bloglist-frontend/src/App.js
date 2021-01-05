import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import LoginForm from './components/LoginForm'
import blogService from './services/blogs'
import loginService from './services/login'

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

	useEffect(() => {
		blogService.getAll().then((blogs) => setBlogs(blogs))
	}, [])

	return (
		<div>
			<h2>blogs</h2>
			<h1>{error}</h1>
			{user === null && (
				<LoginForm
					username={username}
					setUsername={setUsername}
					password={password}
					setPassword={setPassword}
					handleLogin={handleLogin}
				/>
			)}
			{user !== null && <h1>{user.name}</h1>}
			{user !== null && blogs.map((blog) => <Blog key={blog.id} blog={blog} />)}
		</div>
	)
}

export default App
