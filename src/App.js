import './App.css';
import Home from './pages/Home.jsx';
import Easy from './pages/Easy.jsx';
import Medium from './pages/Medium.jsx';
import Hard from './pages/Hard.jsx';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">



        <Router>
          <div>

            <Routes>

              <Route path="/" element={<Home />} />
              <Route path="/Easy" element={<Easy />} />
              <Route path="/Medium" element={<Medium />} />
              <Route path="/Hard" element={<Hard />} />




            </Routes>

          </div>

        </Router>

      </header>
    </div>
  );
}

export default App;
