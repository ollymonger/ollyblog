import React from 'react';
import { BlogPostRepository } from '../data/blog-post-repository';
import { BlogPostModel } from '../models/blog-post';
import { BlogPost } from './BlogPosts/BlogPost';

interface BlogPostProps {
    blogPostRepository: BlogPostRepository;
}

const blogPostRepository = new BlogPostRepository();

const AllBlogPosts: React.FunctionComponent<BlogPostProps> = props => {
    const [blogPosts, setBlogPosts] = React.useState<BlogPostModel[]>(null);

    React.useEffect(() => {
        const allPosts = blogPostRepository.getAll();
        setBlogPosts(allPosts);
        console.log(allPosts);

    }, [blogPostRepository]);

    if(blogPosts === null){
        return <p>Loading!</p>;
    }    
    if(blogPosts === undefined){
        return <p>Loading!</p>;
    }
    return (
        <div>
            {blogPosts.map((post: BlogPostModel) => (
                <BlogPost blogPost={post}/>
            ))}

            
        </div>
    );
}

export { AllBlogPosts }
