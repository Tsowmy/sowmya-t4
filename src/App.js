
import './App.css';
import Home from "./Home.js" 
import About from "./About.js"
import Contact from "./Contact.js"
import Login from "./Login.js"
import { BrowserRouter,Routes,Route } from "react-router-dom"


function Header(){
  return(
    <ul>
       <li> <link to="/">Home</link> </li>
       <li> <link to="/about">About</link> </li>
       <li> <link to="/contact">Contact</link> </li>
       <li> <link to="/login">Login</link> </li>
    </ul>

 )
} 
function App(){
  return(
    <> 
      <BrowserRouter>
          <Header/>
          <div>Router</div>
          <Routes>
             <Route path="/" element={<Home/>}/ >
             <Route path="/about" element={<About/>}/>
             <Route path="/contact" element={<Contact/>}/>
             <Route path="/login" element={<Login/>}/>
          </Routes>
      </BrowserRouter>
    </>
  );    
}
export default App;

