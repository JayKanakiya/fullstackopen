const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    total = 0
    for(var i=0; i<blogs.length; i++){
        total = total + blogs[i]['likes']
    }
    return total
}

const favoriteBlog = (blogs) => {
    max_likes = -1
    for(var i=0;i<blogs.length;i++){
        if(blogs[i]['likes'] > max_likes){
            max_likes = blogs[i]['likes']
        }
    }

    for(var i=0;i<blogs.length;i++){
        if(blogs[i]['likes'] === max_likes){
            return blogs[i]
        }
    }
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
}
