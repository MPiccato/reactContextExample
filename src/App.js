
import React from 'react';

import './App.css';

import Profile from './components/Profile';
import Userlist from './components/Userlist';

// importo el estado global
import State from './context/user/State';

// importo Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <State>
      <div className="container p-4">
        <div className="row">
          <div className="col-md-7">
            <Userlist />
          </div>
          <div className="col-md-5">
            <Profile />
          </div>
        </div>
      </div>
      
    </State>
  );
}

export default App;
