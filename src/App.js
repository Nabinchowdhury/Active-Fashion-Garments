
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Pages/Home/Home';

function App() {
  return (
    <div className="App md:mx-10 lg:mx-20">
      <Navbar></Navbar>
      <Home></Home>
    </div>
  );
}

export default App;
