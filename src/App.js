import './App.css';
import NavBar from './app/components/Navbar';
import { Outlet } from 'react-router-dom';
function App() {
 
  return (
    <div className="container">
      <NavBar/>
    <div className="row">
      <div className='col-md8'>
        <h1>TODO LIST APP</h1>
          <Outlet />
      
    </div>
    </div>
    </div>
  );
}

export default App;
