import React from 'react';
import TopBanner from './components/TopBanner';
import LeftMenu from './components/LeftMenu';
import PeoplePage from './pages/PeoplePage';
import './App.css';

function App() {
  const user = {
    name: 'John Doe',
    role: 'Administrator',
  };

  return (
    <div className="app">
      <TopBanner user={user} />
      <div className="bottom">
      <LeftMenu />
      <PeoplePage/>
      </div>
    </div>
  );
}

export default App;