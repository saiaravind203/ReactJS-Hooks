// import { useState } from 'react';
// import Example from './Example';
import Navbar from './Navbar';
import Home from './Home';
import CreateBlog from './CreateBlog';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import BlogDetails from './BlogDetails';

// Templates
function App() {
  
  // let [name, setName] = useState('John');
  // let [age, setAge] = useState(23);

  // // this.setState({ name: 'Jane, age: 26})
 
  // const handleClick = () => {
  //   setName('Jane');
  //   setAge(26);
  // }
  return (
    <div className="App">
      <Router>
          <Navbar />
          <div className="content">
            <Switch>
                <Route exact path='/'>
                  <Home />
                </Route>
                <Route path='/create'>
                  <CreateBlog></CreateBlog>
                </Route>
                <Route path='/blogs'>
                  <BlogDetails></BlogDetails>
                </Route>
            </Switch>
                {/* <Example/> */}
           </div>
      </Router>
    </div>
  );
}

export default App;