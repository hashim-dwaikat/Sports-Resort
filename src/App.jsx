import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./components/home/Hero";
import HomeSections from "./components/home/HomeSections";

import Facilities from "./components/pages/Facilities";
import Experience from "./components/pages/Experience";
import Memberships from "./components/pages/Memberships";
import Booking from "./components/pages/Booking";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <HomeSections />
      </main>

      <Footer />
    </>
  );
}

function SimplePage({ title, description }) {
  return (
    <>
      <Navbar />

      <main className="simple-page">
        <div className="container">
          <span className="section-label">
            AURELIS
          </span>

          <h1>{title}</h1>

          <p>{description}</p>
        </div>
      </main>

      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      {/* HOME */}
      <Route
        path="/"
        element={<Home />}
      />

      {/* FACILITIES */}
      <Route
        path="/facilities"
        element={<Facilities />}
      />

      {/* EXPERIENCE */}
      <Route
        path="/experience"
        element={<Experience />}
      />

      {/* MEMBERSHIPS */}
      <Route
        path="/memberships"
        element={<Memberships />}
      />

      {/* BOOKING */}
      <Route
        path="/booking"
        element={<Booking />}
      />

      {/* 404 */}
      <Route
        path="*"
        element={
          <SimplePage
            title="Page Not Found"
            description="The page you are looking for does not exist."
          />
        }
      />
    </Routes>
  );
}

export default App;