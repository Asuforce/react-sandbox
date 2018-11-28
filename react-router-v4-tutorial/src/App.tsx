import * as React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/friends">Friends</Link>
        </li>
      </ul>

      <Route exact={true} path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/friends" component={Friends} />
    </div>
  </BrowserRouter>
);

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>Welcome to ようこそ</p>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
    <p>フレンズに関するページです</p>
  </div>
);

const Friends = () => (
  <div>
    <h2>Friends</h2>
    <p>ここにフレンズのリストを書きます</p>
  </div>
);

export default App;
