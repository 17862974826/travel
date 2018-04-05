import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import store from '../store/store'
import { Provider } from 'react-redux'
import { View as Home } from '../pages/home/'
import '../assert/style/reset.css'
import '../assert/font/iconfont.css'

class App extends Component {
  render() {
    return (
    <Provider store={store}>
     <Router>
      <Switch>
        <Route exact path="/" component={ Home }/>
      </Switch>
     </Router>
    </Provider>
    );
  }
}

export default App;
