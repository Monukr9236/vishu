import logo from './logo.svg'
import './App.css'
import Nav from './Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './Footer';
import Home from './Home';
import Product from './Product';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
            <Route path ="/" element={<Home/>} />
            <Route path ="/product" element={<Product/>} />
            <Route path ="/update" element={<h1>UPDATE COMPONENTS</h1>} />
            <Route path ="/logout" element={<h1>LOGOUT COMPONENTS</h1>} />
            <Route path ="/profile" element={<h1>PROFILE COMPONENTS</h1>} />
      </Routes> 
      <Footer/> 
      </BrowserRouter>
    </div>
  );
}

export default App;