
import React, { Component } from 'react';
import { BlogPostModel } from '../../models/blog-post';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



export interface BlogPostProps {
    blogPost: BlogPostModel;
}

const BlogPost: React.FunctionComponent<BlogPostProps> = ({ blogPost }) => {
    return (
        <>
            <Link to={"/post/" + blogPost.id} style={{textDecoration: 'none'}}><h2>{blogPost.title}</h2></Link>
            <p >{blogPost.blurb}</p>
            <p >{blogPost.author}</p>
        </>
    );
};

export { BlogPost }