import React from 'react'
import { Footer, Navbar,Animal } from "../components"
import { Pagination } from 'react-bootstrap'

const Animals = () => {
  return (
    <>
      <Navbar />
      <Animal />
      <Pagination/>
      <Footer />
    </>
  )
}

export default Animals
