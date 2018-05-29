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
import { View as HotelDetail } from '../pages/HotelDetail'
import { View as Mine } from '../pages/Mine'
import { View as Strategy } from '../pages/Strategy'
import { View as Mate } from '../pages/Mate'
import { Login } from '../pages/User'
import { View as Share } from '../pages/Mine/dynamic/'
import { View as PlayDetail } from '../pages/Playing/'
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
        <Route path="/hotalList" component={ HotelList }/>
        <Route path="/hotelDetail" component={ HotelDetail }/>
        <Route path="/login" component={ Login }/>
        <Route path="/mine" component={ Mine }/>
        <Route path="/strategy" component={ Strategy }/>
        <Route path="/mate" component={ Mate }/>
        <Route path="/share" component={ Share }/>
        <Route path="/PlayDetail" component={ PlayDetail }/>
      </Switch>
     </Router>
    </Provider>
    );
  }
}

export default App;
