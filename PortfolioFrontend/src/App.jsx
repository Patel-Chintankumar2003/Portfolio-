import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser, loadUser } from "./actions/user.js";
import { ToastContainer } from "react-toastify";  // Toastify imports
import "react-toastify/ReactToastify.css"; // Toastify styles

import Home from "./Componentes/Home/Home.jsx";
import Header from "./Componentes/header/Header";
import Footer from "./Componentes/Footer/Footer";
import About from "./Componentes/About/About";
import Projects from "./Componentes/Projects/Projects";
import Contact from "./Componentes/Contact/Contact"
import Login from "./Componentes/Login/Login.jsx";
import AdminPanel from "./Componentes/Admin/AdminPanel";
import Timeline from "./Componentes/Admin/Timeline";
import Youtube from "./Componentes/Admin/Youtube";
import Project from "./Componentes/Admin/Project";
import Loader from "./Componentes/Loader/Loader"

function App() {
  const dispatch = useDispatch();

  // Get states from Redux store
  const { isAuthenticated } = useSelector((state) => state.login);
  const { loading, user } = useSelector((state) => state.user)

  // Fetch user data on component mount
  useEffect(() => {
    dispatch(getUser());
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  youtubes={user?.youtube}
                  timelines={user?.timeline}
                  skills={user?.skills}
                />
              }
            />
            {/* About route with dynamic content */}
            <Route path="/about" element={<About about={user?.about} />} />
            {/* Projects route */}
            <Route
              path="/projects"
              element={<Projects projects={user?.projects} />}
            />
            {/* Contact page */}
            <Route path="/contact" element={<Contact />} />
            {/* Admin Panel route */}
            <Route
              path="/account"
              element={isAuthenticated ? <AdminPanel /> : <Login />}
            />
            {/* Admin-specific routes */}
            <Route
              path="/admin/timeline"
              element={isAuthenticated ? <Timeline /> : <Login />}
            />
            <Route
              path="/admin/youtube"
              element={isAuthenticated ? <Youtube /> : <Login />}
            />
            <Route
              path="/admin/project"
              element={isAuthenticated ? <Project /> : <Login />}
            />
          </Routes>

          <Footer />

          {/* Toastify Container for notifications */}
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </>
      )}
    </Router>
  );
}

export default App;
