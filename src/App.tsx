import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { SingleBlog } from './pages/SingleBlog';
import { AllBlogPosts } from './pages/AllBlogPosts';


const App: React.FunctionComponent = props => {

  return (
    <Router>
    <div className="App">
      <header className="App-header">
      <Route path="/post/:id" component={SingleBlog}/>
      <Route path="/posts/" component={AllBlogPosts}/>
      </header>
    </div>
    </Router>
  );
}

export { App }