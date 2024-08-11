function getPostContent(userId, postId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}&id=${postId}`)
        .then(response => response.json())
        .then(posts => {
            if (posts.length > 0) {
                console.log("Post content:", posts[0]);
            } else {
                console.log("No post found with the given userId and postId.");
            }
        })
        .catch(error => console.error('Error:', error));
}

function getAllPostsForUser(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(response => response.json())
        .then(posts => {
            console.log(`All posts for userId ${userId}:`, posts);
        })
        .catch(error => console.error('Error:', error));
}

const userId = 1; 
const postId = 1; 

getPostContent(userId, postId)
    .then(() => getAllPostsForUser(userId))
    .catch(error => console.error('Error in promise chain:', error));