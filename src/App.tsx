import React from 'react';
import './App.css';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyC82UB6VC8I67ZkcifecBG38axkhFA5J3w",
    authDomain: "fitbodyandwellness.firebaseapp.com",
    projectId: "fitbodyandwellness",
    storageBucket: "fitbodyandwellness.appspot.com",
    messagingSenderId: "1013767472704",
    appId: "1:1013767472704:web:999bbc8b3aaf92c377c1a5",
    measurementId: "G-00QW7BVWXC"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  return (
    <div className="App">
     <p>penis</p>
    </div>
  );
}

export default App;
