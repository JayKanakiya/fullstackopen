describe('blog app', function () {
	beforeEach(function () {
		cy.request('POST', 'http://localhost:3003/api/testing/reset')
		const user = {
			name: 'Jay Kanakiya',
			username: 'jacknex',
			password: 'test',
		}
		cy.request('POST', 'http://localhost:3003/api/users', user)
		cy.visit('http://localhost:3000')
	})

	it('login from is shown', function () {
		cy.contains('login').click()
	})

	describe('login', function () {
		it('succeeds with correct credentials', function () {
			cy.contains('login').click()
			cy.get('#username').type('jacknex')
			cy.get('#password').type('test')
			cy.get('#login-button').click()
			cy.contains('Jay Kanakiya is logged in')
		})
		it('login fails with wrong password', function () {
			cy.contains('login').click()
			cy.get('#username').type('jacknex')
			cy.get('#password').type('wrongpassword')
			cy.get('#login-button').click()
			cy.contains('Wrong Credentials')
		})
	})
})
