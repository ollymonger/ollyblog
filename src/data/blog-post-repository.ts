import {BlogPostModel} from '../models/blog-post';


export class BlogPostRepository {
    private blogPosts: BlogPostModel[] = [
        {
            id: 0,
            title: "First blog",
            author:"by Olly",
            blurb:"blog text"
        },
        {
            id: 1,
            title: "second",
            author:"by Olly",
            blurb:"blog text"
        },
        {
            id: 2,
            title: "3rd",
            author:"by Olly",
            blurb:"blog text"
        },
        {
            id: 3,
            title: "4th",
            author:"by Olly",
            blurb:"blog text"
        }
    ];

    getAll(){

        return this.blogPosts;
    }

    getById(id: number){
        const blogPost = this.blogPosts.find(function(blogID){
            return blogID.id === id;
        });
        return blogPost;
    }
}