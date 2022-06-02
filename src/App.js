import './App.css';
import SignInSide from './Components/SignInSide.js';
import SignUpSide from './Components/SignUpSide.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
            <Route exact path="/" element ={<SignInSide/>}>
            </Route>
            
            <Route exact path="/signup" element ={<SignUpSide/>}>
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
