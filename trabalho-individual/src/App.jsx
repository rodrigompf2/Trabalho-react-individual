import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

import Home from './pages/Home.jsx';
import PlansAndRooms from './pages/PlansAndRooms.jsx';
import Booking from './pages/Booking.jsx';
import MyBookingsPage from './pages/MyBookingsPage.jsx';

function App() {
  const [bookings, setBookings] = useState([]);

  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plans" element={<PlansAndRooms />} />
          <Route 
            path="/book" 
            element={<Booking setBookings={setBookings} />} 
          />
          <Route 
            path="/mybookings" 
            element={<MyBookingsPage bookings={bookings} setBookings={setBookings} />} 
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;