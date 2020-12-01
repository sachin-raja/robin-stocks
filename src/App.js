import logo from './logo.svg';
import './App.css';
import Header from './Header'
import NewsFeed from "./NewsFeed"
import Stats from "./Stats"


function App() {
  return (
    <div className="App">
      {/* Header */}
      <div className="header__logo">
        <Header/>
      </div>
      {/* Body */}
      <div className="header__body">
        <div className="app__container"> 
          {/* news feed */}
          <NewsFeed />
          {/* stats */}
          <Stats />
        </div>
      </div>
    </div>
  );
}

export default App;
