
import Header from './componets/Header';
import Footer from './componets/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,

}
  from 'react-router-dom'
import Bodypart from './componets/Bodypart';
import Login from './componets/headers/Login';
import Signup from './componets/headers/Signup';
import NewArrivals from './componets/headers/NewArrivals';
import BestSellers from './componets/headers/BestSellers';
import AwarWinners from './componets/headers/AwarWinners';
import About from './componets/About';
import PrivacyPolicy from './componets/footer/PrivacyPolicy';

function App() {


  return (
    <div className="App">
      <Router>
        <Header />
        <br></br>
        <Switch>
          <Route exact path='/Login' >
            <Login />
          </Route>
          <Route exact path='/Signup' >
            <Signup />
          </Route>
          <Route exact path='/newArrivals' >
            <NewArrivals />
          </Route>
          <Route exact path="/awardWinners" >
            <AwarWinners />

          </Route>
          <Route exact path='/BestSellers' >
            <BestSellers />
          </Route>
          <Route exact path='/PrivacyPolicy' >
            <div className='container-fluid py-5 my-5'>
              <PrivacyPolicy />
              </div>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Bodypart />
        </Switch>
      </Router >

      <div>

        <Footer />
      </div>
    </div >
  );
}

export default App;
