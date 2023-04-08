import './App.css';
//{header} is a named import (name should be same)
//Header is default import   (name can be anything)
import Header from "./Components/Header"
import Body from "./Components/Body"
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
