import './App.css';
import Login from './LoginPages/Login';
import HomePage from './HomePage/HomePage';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      {/* <HomePage/> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/> 
        <Route path="/login" element={<Login/>}/> 
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
