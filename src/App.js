
import './App.css';
import Home from './components/pages/Home/Home/Home';
import { Routes, Route, Link } from "react-router-dom";
import BlogDetails from './components/pages/BlogDetails/BlogDetails';
import CategoryPage from './components/pages/CategoryPage/CategoryPage';
import Login from './components/pages/Authentication/Login/Login';
import Register from './components/pages/Authentication/Register/Register';
function App() {
  return (
    <div>
    
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/post/:id" element={<BlogDetails />} />
        <Route path="/category/:page" element={<CategoryPage />} />  
        <Route path="/login" element={<Login />} />  
        <Route path="/register" element={<Register />} />  
        </Routes>  
    </div>
  );
}

export default App;
