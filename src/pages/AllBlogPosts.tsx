import React from 'react';
import { BlogPostRepository } from '../data/blog-post-repository';
import { Card, makeStyles, createStyles, Theme, CardContent } from "@material-ui/core"
import { BlogPostModel } from '../models/blog-post';
import { BlogPost } from './BlogPosts/BlogPost';

interface BlogPostProps {
    blogPostRepository: BlogPostRepository;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            fontFamily: 'Roboto',
        },
        cards:{
            width:'300px',
            color:'gray',
            position:'relative',
            textAlign:'center'
        }
    })
);
const blogPostRepository = new BlogPostRepository();

const AllBlogPosts: React.FunctionComponent<BlogPostProps> = props => {

    const classes = useStyles(1);
    const [blogPosts, setBlogPosts] = React.useState<BlogPostModel[]>(null);

    React.useEffect(() => {
        const allPosts = blogPostRepository.getAll();
        setBlogPosts(allPosts);
        console.log(allPosts);

    }, [blogPostRepository]);

    if (blogPosts === null || blogPosts === undefined) {
        return <p>Loading!</p>;
    }
    return (
        <div>
            <Card className={classes.root}>
                <CardContent className={classes.cards}>
                    {blogPosts.map((post: BlogPostModel) => (
                        <BlogPost blogPost={post} />
                    ))}
                </CardContent>
            </Card>
        </div>
    );
}

export { AllBlogPosts }
