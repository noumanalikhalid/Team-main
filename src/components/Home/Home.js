import React from 'react'
import Carousel from './Carousel'
import Models from './Models'
import PorscheLive from './PorscheLive'

const Home = () => {
    localStorage.setItem("Admin" , "false")
    return (
        <>
          <Carousel/>
          <Models/>
          <PorscheLive/>
        </>
    )
}
export default Home 