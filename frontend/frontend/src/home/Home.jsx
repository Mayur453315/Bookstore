import React from 'react'
import NavBar from '../componenets/NavBar'
import Banner from '../componenets/Banner'
import CardList from '../componenets/CardList'
import Footer from '../componenets/Footer'

export default function Home() {
  return (
    <>
    <NavBar/>
    
    <Banner/> 
   <CardList/>
    <Footer/>
    </>
  )
}
