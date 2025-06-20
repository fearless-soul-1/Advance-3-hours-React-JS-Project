import React, { createContext, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Blogdetails from './screens/BlogDetails';
import CreateBlog from './screens/CreateBlog';
import HomeScreen from './screens/HomeScreen';

export const BlogContext = createContext();

const App = () => {
  const [blogs,setBlogs] = useState([
    {
      title:'Inspiring Minds',
      image:'https://resources.finalsite.net/images/f_auto,q_auto/v1678799339/finalsite/o2vshzhctrp1a95twmds/colored_pencils_blue.jpg',
      description: " Inspiring Minds is more than just a blog—it's a space for reflection, growth, and connection. My goal is to create content that sparks curiosity ,    uplifts your spirit, and challenges you to think deeper. Whether it's through personal stories, lessons learned, thought-provoking ideas, or inspiring conversations, I hope to offer something meaningful in every post."
    }
  ])
  return (
    <BlogContext.Provider value={[blogs,setBlogs]}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/create-blog" component={CreateBlog} />
        <Route exact path="/:title" component={Blogdetails} />
      </Switch>
    </BlogContext.Provider>
  )
}

export default App
