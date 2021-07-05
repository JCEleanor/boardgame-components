import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import BookingStep from './pages/BookingStep';
import BookingProcess from './pages/BookingProcess';
import BookingConfirm from './pages/BookingConfirm';

const App = () => {


    return (
        <Router>
            {/* <Navbar/> */}
			<Switch>
				<Route path="/booking-steps" component={BookingStep} />
				<Route path="/booking" component={BookingProcess} />
				<Route path="/booking-confirm" component={BookingConfirm} />
            </Switch>
            {/* <Footer/> */}
		</Router>

    )
}

export default App
