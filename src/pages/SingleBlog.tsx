import React from 'react';
import { BlogPostModel } from '../models/blog-post';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { BlogPost } from './BlogPosts/BlogPost';
import { RouteComponentProps } from 'react-router';
import { BlogPostRepository } from '../data/blog-post-repository';

interface RouteParams {
    id: number;
}

const blogPostRepository = new BlogPostRepository();

const SingleBlog: React.FunctionComponent<RouteComponentProps<RouteParams>> = ({ match }) => {
    const [blogPosts, setBlogPosts] = React.useState<BlogPostModel>(null);


    React.useEffect(() => {
        const singlePost = blogPostRepository.getById(parseInt(match.params.id));
        setBlogPosts(singlePost);
    }, [match]);

    if(blogPosts === null){
        return <p>Loading!</p>;
    }

    
    if(blogPosts === undefined){
        return <p>This does not exist</p>;
    }
    return (
        <div>
                <BlogPost blogPost={blogPosts}/>
                <Link to={"/post/"+match.params.id++}><button>Next post</button></Link>            
        </div>
    );
}

export { SingleBlog }
