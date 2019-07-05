import {BlogPostModel} from '../models/blog-post';


export class BlogPostRepository {
    private blogPosts: BlogPostModel[] = [
        {
            id: 0,
            title: "First update",
            author:"by Olly",
            blurb:"blog text"
        },
        {
            id: 1,
            title: "Second update",
            author:"by Olly",
            blurb:"blog text"
        },
        {
            id: 2,
            title: "Longer than before update",
            author:"by Olly",
            blurb:"173423491273b4 8y a8a8s ud8as 8dunasndhasdhas8d as8d asud mas9d masd as90d n8as9d 89as8d 9as8d9 0n8as09dn 8as908d"
        },
        {
            id: 3,
            title: "Hi there",
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