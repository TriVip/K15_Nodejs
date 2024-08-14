const Post = require('./Post');

class RequestHandler {
    async printTargetPost(userId, postId) {
        const allPosts = await this._getAllPosts(userId);
        const targetPost = allPosts.find(post => post.id === postId);
        return targetPost;
    }

    async printAllPosts(userId) {
        const allPosts = await this._getAllPosts(userId);
        return allPosts;
    }

    async _getAllPosts(userId) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const postsData = await response.json();
            return postsData.map(post => new Post(post.userId, post.id, post.title, post.body));
        } catch (error) {
            console.error('Error fetching posts:', error);
            return [];
        }
    }
}

module.exports = RequestHandler;
