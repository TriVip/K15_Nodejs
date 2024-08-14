const Post = require("./Post");
const RequestHandler = require("./RequestHandler");

async function Lab7() {
    
    const userId = 1;
    const postId = 5;

    
    const requestHandler = new RequestHandler();

    
    const post = await requestHandler.printTargetPost(userId, postId);
    console.log('Target Post:', post);

    
    const allPosts = await requestHandler.printAllPosts(userId);
    console.log('All Posts:', allPosts);
}

Lab7();