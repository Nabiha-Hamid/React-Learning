import './App.css';
import React from 'react'
import NavBar from './components/NavBar';
import Textform from './components/Textform';
let name = "<b>Nabiha</b>";
function App() {
  return (
    <div>

      <NavBar title="TextApp" abouttext="About TextApp" />
      <div className="container">
        <Textform heading="Analyze text" />
      </div>
    </div>

  )
}

export default App;
