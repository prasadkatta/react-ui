import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/js/bootstrap.js'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/pages/About';
import Trips from './components/pages/Trips';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home'

function App() {
  return (
    <div className="App">

      <Router>
        <NavBar />
       
          <Switch>
            <Route exact path="/react-ui" component={Home} />
            <Route path="/react-ui/about" component={About} />
            <Route path="/react-ui/Trips" component={Trips} />
            <Route path="/react-ui/Contact" component={Contact} />
          </Switch>
           
        <Footer />
      </Router>

    </div>
  );
}

export default App;
