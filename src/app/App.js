import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import store from '../store/store'
import { Provider } from 'react-redux'
import { View as Home } from '../pages/home/'
import { View as Calendar } from '../pages/Calendar/'
import { View as CalendarList } from '../pages/CalendarList/'
import { View as Detail } from '../pages/Detail'
import { View as Hotel } from '../pages/Hotel'
import { View as HotelList } from '../pages/HotelList'
import '../assert/style/reset.css'
import '../assert/font/iconfont.css'

class App extends Component {
  render() {
    return (
    <Provider store={store}>
     <Router>
      <Switch>
        <Route exact path="/" component={ Home }/>
        <Route path="/calendar" component={ Calendar }/>
        <Route path="/calendarList" component={ CalendarList }/>
        <Route path="/detail" component={ Detail }/>
        <Route path="/hotel" component={ Hotel }/>
        <Route path="/hotelList" component={ HotelList }/>
      </Switch>
     </Router>
    </Provider>
    );
  }
}

export default App;
