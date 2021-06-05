import logo from './logo.svg';
import './App.css';
import Homepage from './pages/homepage'
import AboutMe from './pages/aboutme'
import {HashRouter as Router,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/'>
        <Homepage/>
        </Route>
        <Route exact path='/aboutme'> 
          <AboutMe/>
          
        
        </Route>
      </Router>
     
    </div>
  );
}

export default App;