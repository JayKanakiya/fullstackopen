const listHelper = require('../utils/list_helper')

test('dummy returns one', () => {
    const blogs = []
    const res = listHelper.dummy(blogs)
    expect(res).toBe(1)
})