import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import Posts from './components/Posts';
import PostForm from './components/Postform';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
           <div className="App">
       <Router>
       
          {/* <PostForm />
          <hr /> */}
            <Route path='/' exact strict component={Posts} />
            <Route path='/Edit/:title/:body' exact strict component={PostForm} />
       
      </Router>
      </div>
      </Provider>
    );
  }
}

export default App;
