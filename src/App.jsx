import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Hero from "./Components/Hero";
import Objectives from "./Components/Objectives";
import Slideshow from "./Components/Slideshow";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Team from "./Components/Team";
import Contact from "./Components/Contact";
import Articles from "./Pages/Articles";
import ArticleDetail from "./Pages/ArticleDetail";
import Admin from "./Pages/Admin";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-primary">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Slideshow />
                  <Objectives />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:id" element={<ArticleDetail />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
