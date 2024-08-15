const Post = require("./Post");

class PostController {

    //https://jsonplaceholder.typicode.com, /post
    constructor(baseUrl, slug){
        this.url = `${baseUrl}${slug}`;
    }


    //service method
    async getAllPostsByUserId(userId){
        //Details implementation
        const allPosts = await this._getAllPosts();
        return allPosts.filter(function (post){
            return (post._userId === userId)
        });
    }

    //service method
    async getPostByUserIdAndPostId(userId, postId){
        const allPostByUserId = await this.getAllPostByUserId(userId);
        return allPostByUserId.find(function(post){
            return (post._id === postId);
        });
    }

    
    //support method
    async _getAllPosts(){
        const response = await fetch(this.url);
        const jsonRespone = await response.json();
        return jsonRespone.map(function(postContent){
            const {userId, id, title, body} = postContent;
            return new Post(userId, id, title, body)
        });
    }


}

module.exports = PostController;