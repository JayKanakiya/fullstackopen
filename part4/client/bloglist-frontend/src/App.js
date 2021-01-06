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
			window.localStorage.setItem('loggedinuser', JSON.stringify(user))
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
	useEffect(() => {
		blogService.getAll().then((blogs) => setBlogs(blogs))
	}, [])

	useEffect(() => {
		const loggedUser = window.localStorage.getItem('loggedinuser')
		if (loggedUser) {
			const user = JSON.parse(loggedUser)
			setUser(user)
		}
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
			{user !== null && (
				<p>
					{user.name} is logged in <button onClick={logout}>logout</button>
				</p>
			)}
			{user !== null && blogs.map((blog) => <Blog key={blog.id} blog={blog} />)}
		</div>
	)
}

export default App
