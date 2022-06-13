
import './App.css';
import Home from './components/pages/Home/Home/Home';
import { Routes, Route, Link } from "react-router-dom";
import BlogDetails from './components/pages/BlogDetails/BlogDetails';
import CategoryPage from './components/pages/CategoryPage/CategoryPage';
function App() {
  return (
    <div>
    
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/post/:id" element={<BlogDetails />} />
        <Route path="/category/:page" element={<CategoryPage />} />
      </Routes>
    </div>
  );
}

export default App;
