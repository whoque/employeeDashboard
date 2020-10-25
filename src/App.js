import './App.css';
import Login from './components/login';
import { Router, Route, Switch } from 'react-router-dom';
import Employee from './components/employee';
import history from './history';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/" component={Employee} exact />
          <Route path="/employee" component={Employee} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
