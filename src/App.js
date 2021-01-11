import React, {useState, useEffect} from 'react'
import {Route} from 'react-router-dom'
import {createStore} from 'redux'

import './scss/app.scss'

import { Header } from './components'
import {Home, Cart} from './pages'

function App() {
    return (
        <div>
            <div className="wrapper">
                <Header />
                <div className="content">
                    <Route path="/" render={() => <Home items={pizzas}/>} exact />
                    <Route path="/cart" component={Cart} />

                </div>
            </div>
        </div>
    )
}

export default App
