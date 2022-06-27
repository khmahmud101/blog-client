import "./App.css";
import Home from "./components/pages/Home/Home/Home";
import { Routes, Route, Link } from "react-router-dom";
import BlogDetails from "./components/pages/BlogDetails/BlogDetails";
import CategoryPage from "./components/pages/CategoryPage/CategoryPage";
import Login from "./components/Authentication/Login/Login";
import Register from "./components/Authentication/Register/Register";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import PrivateRoute from "./components/Authentication/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/post/:id"
            element={
              <PrivateRoute>
                <BlogDetails />
              </PrivateRoute>
            }
          />
          <Route path="/category/:page" element={<CategoryPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
