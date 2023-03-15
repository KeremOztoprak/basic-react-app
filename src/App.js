import Navbar from './Navbar';
import Anasayfa from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route rath="/">
              <Anasayfa />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
