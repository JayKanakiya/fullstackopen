import React from 'react'

const LoginForm = ({
	username,
	setUsername,
	password,
	setPassword,
	handleLogin,
}) => {
	return (
		<form onSubmit={handleLogin}>
			<div>
				username
				<input
					type='text'
					id='username'
					value={username}
					name='Username'
					onChange={({ target }) => setUsername(target.value)}
				/>
			</div>
			<div>
				password
				<input
					type='password'
					id='password'
					value={password}
					name='Password'
					onChange={({ target }) => setPassword(target.value)}
				/>
			</div>
			<button type='submit' id='login-button'>
				login
			</button>
		</form>
	)
}

export default LoginForm
