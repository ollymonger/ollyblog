import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Card, makeStyles, createStyles, Theme, CardContent } from "@material-ui/core"
import { SingleBlog } from './pages/SingleBlog';
import { AllBlogPosts } from './pages/AllBlogPosts';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    }
  })
);



const App: React.FunctionComponent = props => {
  const classes = useStyles(1);
  return (
    <Router>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <Card className={classes.root}>
        <div className="App">
          <header className="App-header">
            <Route path="/post/:id" component={SingleBlog} />
            <Route exact path="/" component={AllBlogPosts} />
          </header>
        </div>
      </Card>
    </Router>
  );
}

export { App }