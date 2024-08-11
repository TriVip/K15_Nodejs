async function fetchPostAndUserPosts() {
    const userId = parseInt(prompt("Enter userId: "));
    const postId = parseInt(prompt("Enter postId: "));

    try {
        const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        const post = await postResponse.json();

        if (post.userId === userId) {
            console.log(`Post ID ${postId} by User ID ${userId}:`);
            console.log(post);
        } else {
            console.log(`No post found with postId ${postId} for userId ${userId}.`);
        }

        const userPostsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const userPosts = await userPostsResponse.json();

        console.log(`All posts by User ID ${userId}:`);
        userPosts.forEach(post => console.log(post));
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function prompt(question) {
    const readline = require('readline-sync');
    return readline.question(question);
}

fetchPostAndUserPosts();
