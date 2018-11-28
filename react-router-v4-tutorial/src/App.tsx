import * as React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

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

const FRIENDS = [
  {
    id: 'serval',
    nameEn: 'Serval Cat',
    nameJa: 'サーバル',
    family: 'ネコ目ネコ科ネコ属',
  },
  {
    id: 'raccoon',
    nameJa: 'アライグマ',
    nameEn: 'Common raccoon',
    family: 'ネコ目アライグマ科アライグマ属',
  },
  {
    id: 'fennec',
    nameJa: 'フェネック',
    nameEn: 'Fennec',
    family: 'ネコ目イヌ科キツネ属',
  },
];

const friendById = (id: string) => FRIENDS.find(friend => friend.id === id);

const FriendList = () => (
  <div>
    {FRIENDS.map(friend => (
      <li key={friend.id}>
        <Link to={`/friends/${friend.id}`}>{friend.nameJa}</Link>
      </li>
    ))}
  </div>
);

const Friend = (props: any) => {
  const { id } = props.match.params;
  const friend = friendById(id);

  const containerStyle = {
    border: '1px gray solid',
    display: 'inline-block',
    padding: 10,
  };

  const contentsStyle = {
    margin: 0,
  };

  return friend === undefined ? (
    <div>
      <p>Friends with id '{id}' does not exist.</p>
    </div>
  ) : (
    <div>
      <div style={containerStyle}>
        <p style={contentsStyle}>{friend.family}</p>
        <h1 style={contentsStyle}>{friend.nameJa}</h1>
        <p style={contentsStyle}>{friend.nameEn}</p>
      </div>
    </div>
  );
};

const Friends = () => (
  <div>
    <h2>Friends</h2>
    <Route exact={true} path="/friends" component={FriendList} />
    <Route path="/friends/:id" component={Friend} />
  </div>
);

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

export default App;
