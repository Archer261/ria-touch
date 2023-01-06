import React from 'react'

import { About, Ria, Find, Footer, Gallery, Header } from './container'

import { NavBar } from './components'

import './App.css'

const App = () => {
    return (
        <div>
            <NavBar />
            <Header />
            <About />
            <Ria />
            <Gallery />
            <Find />
            <Footer />
        </div>
    )
}

export default App