
import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Main from './components/Main';
import BookingForm from './components/BookingForm';

function App() {

  const items = ["HOME", "ABOUT", "MENU", "RESERVATIONS", "OREDER ONLINE", "LOGIN"];

  return (
    <>
      <Nav items={items} />
      <Main /> 
      <BookingForm />
      <Footer />
    </>
  );
}

export default App;