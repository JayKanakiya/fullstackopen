const dummy = (blogs) => {
	return 1
}

const totalLikes = (blogs) => {
	let sum = 0
	for (var i = 0; i < blogs.length; i++) {
		sum += blogs[i].likes
	}
	return sum
}

const favoriteBlog = (blogs) => {
	var max_likes = 0
	var favorite_blog

	for (var i = 0; i < blogs.length; i++) {
		if (blogs[i].likes > max_likes) {
			max_likes = blogs[i].likes
			favorite_blog = blogs[i]
		}
	}

	return favorite_blog
}

module.exports = {
	dummy,
	totalLikes,
	favoriteBlog,
}
