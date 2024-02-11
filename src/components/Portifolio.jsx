import React from 'react'
import Slider from './Slider'
import '../assets/css/Portifolio.css'
import '../assets/css/Media-Portifolio.css'

const Portifolio = () => {
  return (
    <section className="portifolio" id='portifolio'>
        <header>
            <h2>Portifolio</h2>
        </header>
        <main>
            <Slider></Slider>
        </main>
    </section>
  )
}

export default Portifolio