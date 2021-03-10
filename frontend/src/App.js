import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/home' component={Home}/>
        <Route path='/register' component={Register} />
        <Route exact path='/' component={Login} />
      </Switch>
    </div>
  );
}

export default App;
