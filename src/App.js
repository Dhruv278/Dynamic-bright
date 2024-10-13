import Homepage from './Components/Pages/Homepage';
import Header from './Components/Templates/Header';
import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
