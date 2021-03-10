import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <Switch>
        {/* <Route path='/home' />
        <Route path='/register' /> */}
        <Route exact path='/' component={Login} />
      </Switch>
    </div>
  );
}

export default App;
