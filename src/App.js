import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import BookingStep from './pages/BookingStep'
import BookingProcess from './pages/BookingProcess'
import BookingConfirm from './pages/BookingConfirm'
import BookingSuccess from './pages/BookingSuccess'
import Header from './components/Header'
import Loginform from './components/Loginform'

const App = () => {
  return (
    <Router>
      {/* <Navbar/> */}
      <Header />
      <Switch>
        <Route path="/login" exact component={Loginform} />
        <Route path="/booking/steps" exact component={BookingStep} />
        <Route path="/booking" exact component={BookingProcess} />
        <Route path="/booking/confirm" exact component={BookingConfirm} />
        <Route path="/booking/success/:id" component={BookingSuccess} />
      </Switch>
      {/* <Footer/> */}
    </Router>
  )
}

export default App

// google oauth client id
// 1054065807793-5p0rkni1fj0ktvlp9l5e7ef3dp5pdon9.apps.googleusercontent.com
