import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Header'
import bannerImg from '../images/restauranfood.jpg';

function Main() {

  
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Header bannerImg={bannerImg} />} />
      </Routes>
    </main>
  )
}

export default Main
