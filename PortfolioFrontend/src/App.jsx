import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Componentes/Home/Home";
import Header from "./Componentes/header/Header";
import Footer from "./Componentes/Footer/Footer";
import About from "./Componentes/About/About.jsx";
import Projects from "./Componentes/Projects/Projects.jsx";
import Contact from "./Componentes/Contact/Contact.jsx";
import Login from "./Componentes/Login/Login.jsx";
import { useDispatch } from "react-redux";
import { getUser, loadUser } from "./actions/user";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Account" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
