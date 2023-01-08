import React from 'react'

import { About, Ria, Find, Footer, Gallery, Header, Services, Video } from './container'

import NavBar from './components/NavBar/Navbar'

import './App.css'

const App = () => {
    return (
        <div>
            <NavBar />
            <Header />
            <About />
            <Services />
            <Ria />
            <Video />
            <Gallery />
            <Find />
            <Footer />
        </div>
    )
}

export default App