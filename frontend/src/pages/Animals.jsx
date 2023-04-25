import React from 'react'
import { Footer, Navbar,Animal } from "../components"
import Next from "../components/Pagination";

const Animals = () => {
  return (
    <>
      <Navbar />
      <Animal />
      <Next/>
      <Footer />
    </>
  )
}

export default Animals