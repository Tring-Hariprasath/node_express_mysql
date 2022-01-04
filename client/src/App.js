
import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Adduser from './components/users/Adduser';
import EditUser from './components/users/EditUser';
 

function App() {
  
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path ='/' element={<Home/>}></Route>
        <Route exact path ='/about' element={<About/>}></Route>
        <Route exact path ='/contact' element ={<Contact/>}></Route>
        <Route exact path ='/user/add' element ={<Adduser/>}></Route>
        <Route exact path ='/user/edit/:id' element ={<EditUser/>}></Route>

      </Routes>
     
    </div>
    </Router>
  );
}

export default App;
