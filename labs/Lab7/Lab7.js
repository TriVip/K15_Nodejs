const Post = require("./Post");
const RequestHandler = require("./RequestHandler");

async function Lab7() {
    // Given params
    const userId = 1;
    const postId = 5;

    // Create RequestHandler object
    const requestHandler = new RequestHandler();

    // Fetch and print the target post
    const post = await requestHandler.printTargetPost(userId, postId);
    console.log('Target Post:', post);

    // Fetch and print all posts for the user
    const allPosts = await requestHandler.printAllPosts(userId);
    console.log('All Posts:', allPosts);
}

Lab7();