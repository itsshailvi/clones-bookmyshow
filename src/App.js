import './App.css';
import Login from './LoginPages/Login';
import HomePage from './HomePage/HomePage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      <HomePage/>
    </div>
  );
}

export default App;
