import { useState } from 'react'
import Header from './containers/Header'
import SectionOne from './containers/SectionOne'
import SectionTwo from './containers/SectionTwo'
import SectionProjects from './containers/SectionProjects'
import Footer from './containers/Footer'

function App() {
  

  return (
    <>
      <Header/>
      <SectionOne/>
      <SectionTwo/>
      <SectionProjects/>
      <Footer/>
    </>
  )
}

export default App
