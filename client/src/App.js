
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './Routes';
import Navbar from './components/navbar/navbar'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <AllRoutes/>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
