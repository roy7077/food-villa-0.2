import './App.css';
//{header} is a named import (name should be same)
//Header is default import   (name can be anything)
import Header from "./Components/Header"
import Body from "./Components/Body"
import Footer from './Components/Footer';
import About from './Components/About';
import { createBrowserRouter , RouterProvider,Outlet} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;