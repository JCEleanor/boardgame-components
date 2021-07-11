import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import BookingStep from './pages/BookingStep'
import BookingProcess from './pages/BookingProcess'
import BookingConfirm from './pages/BookingConfirm'
import BookingSuccess from './pages/BookingSuccess'

const App = () => {
  return (
    <Router>
      {/* <Navbar/> */}
      <Switch>
        {/* routes: or '/booking/steps'. '/booking/confirm', '/booking/success/:id' */}
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
