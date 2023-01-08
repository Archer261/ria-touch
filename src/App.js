import React from 'react'

import { About, Ria, Find, Footer, Gallery, Header, Services } from './container'

import NavBar from './components/NavBar/Navbar'

import './App.css'

const App = () => {
    return (
        <div>
            <NavBar />
            <Header />
            <About />
            {/* <Ria /> */}
            <Services />
            {/*<Gallery />
            <Find />
            <Footer /> */}
        </div>
    )
}

export default App