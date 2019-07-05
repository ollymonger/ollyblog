import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { SingleBlog } from './pages/SingleBlog';


const App: React.FunctionComponent = props => {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
      <Link to="/post/"><button>Click to see all my blogs</button></Link>
      <Route path="/post/:id" component={SingleBlog}/>
      </header>
    </div>
    </Router>
  );
}

export { App }