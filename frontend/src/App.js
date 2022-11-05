
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

import Register from './components/Views/register';
import ForeignRegister from './components/Views/foreignRegister';
import ViewForeign from './components/Views/viewForeign';
import ViewLocal from './components/Views/viewLocal';
import Booking from './components/Views/booking';
import BusService from './components/Views/busService';
import Login from './components/Views/login';
import Home from './components/Views/Home';

function App() {
  return (
    <div className="App">
       <Router>
           <Switch> 
            
            <Route path="/main/register" exact component={Register} />
            <Route path="/main/foriegnregister" exact component={ForeignRegister} />
            <Route path="/main/viewforeign" exact component={ViewForeign} />
            <Route path="/main/viewlocal" exact component={ViewLocal} />
            <Route path="/main/booking" exact component={Booking} />
            <Route path="/main/busService" exact component={BusService} />
            <Route path="/main/login" exact component={Login}/>
            
            <Route path="/main" exact component={Home} />
           
          </Switch>
         
          
        </Router>
        
    </div>
  );
}

export default App;
