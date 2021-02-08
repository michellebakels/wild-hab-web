import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import WildHabEventForm from "./CreateEventForm/WildHabEventForm";
import ListEvents from "./ListEvents";

function App() {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/create-event">Create Event</Link>
              </li>
              <li>
                <Link to="/list-events">List Events</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/create-event">
              <WildHabEventForm />
            </Route>
            <Route path="/list-events">
              <ListEvents />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

export default App;
