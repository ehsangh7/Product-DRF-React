
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from './components/Checkout';
import Login from './components/auth/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './components/StateProvider';

function App() {
  const [{}, dispatch] = useStateValue()

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log(authUser);

      if(authUser) {
        // the user just logged in / the user was logged in
        console.log("USer>>", authUser);
        dispatch({
          type:'SET_USER',
          user: authUser,
        })
      }else{
        // the user logged out 
        dispatch({
          type:'SET_USER',
          user: null,
        })
      }
    })
  }, [])

  return (
    <Router>
    	<div className="app">
        <Header />
    	  <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/login" component={Login} />
        </Switch>
    	</div>
    </Router>
  );
}

export default App;
