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
import { View as Calendar } from '../pages/Calendar/'
import '../assert/style/reset.css'
import '../assert/font/iconfont.css'

class App extends Component {
  render() {
    return (
    <Provider store={store}>
     <Router>
      <Switch>
        <Route exact path="/" component={ Home }/>
        <Route exact path="/calendar" component={ Calendar }/>
      </Switch>
     </Router>
    </Provider>
    );
  }
}

export default App;
