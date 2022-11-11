
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

import Register from './components/Views/register';
import ForeignRegister from './components/Views/foreignRegister';
import ViewForeign from './components/Views/viewForeign';
import ViewLocal from './components/Views/viewLocal';
import Booking from './components/Views/booking';
import BusService from './components/Views/busService';
import AddBooking from './components/Views/addBooking';
import AddBusService from './components/Views/addBusService';
import Login from './components/Views/login';
import UpdateForeigner from './components/Views/updateForeigner';
import AdminLogin from './components/Views/adminLogin';
import Payments from './components/Views/payment';

import Home from './components/Views/Home';

function App() {
  return (
    <div className="App">
       <Router>
           <Switch> 
           <Route path="/" exact component={Home} />
           <Route path="/main/adminlog" exact component={AdminLogin}/>
            <Route path="/main/register" exact component={Register} />
            <Route path="/main/foriegnregister" exact component={ForeignRegister} />
            <Route path="/main/viewforeign" exact component={ViewForeign} />
            <Route path="/main/viewlocal" exact component={ViewLocal} />
            <Route path="/main/booking" exact component={Booking} />
            <Route path="/main/busService" exact component={BusService} />
            <Route path="/main/addBooking" exact component={AddBooking} />
            <Route path="/main/addBusService" exact component={AddBusService} />

            <Route path="/main/addPayment" exact component={Payments} />

            <Route path="/main/login" exact component={Login}/>
            <Route path="/main/updateForeigner" exact component={UpdateForeigner}/>

            
            
           
          </Switch>
         
          
        </Router>
        
    </div>
  );
}

export default App;
