import styles from './App.module.css';
import Home from './components/Home/index';
import CreatePokemon from './components/CreatePokemon/index';
import DetailCard from './components/DetailCard';
import Landing from './components/Landing';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { useSelector } from 'react-redux';


function App(props) {
  
  const data = useSelector(state => {
  });

  return (
    <Router>
      <div className={styles.App}>
        <Route exact path='/' component={Landing}/>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/create' component={CreatePokemon}/>
        <Route exact path='/detail/:id' component={DetailCard }/>
      </div>
    </Router>
  );
}

export default App;
