import React from 'react'
import { Route } from 'react-router-dom'
import './scss/app.scss'
import { Header } from './components'
import { Home, Cart } from './pages'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setPizzas } from './redux/actions/pizzas'

function App() {
    const dispatch = useDispatch()

    React.useEffect(() => {
        axios.get('http://localhost:3001/pizzas').then(({ data }) => {
            dispatch(setPizzas(data))
        })
        console.log('сработал юсэффект')
    }, [dispatch])

    return (
        <div>
            <div className="wrapper">
                <Header />
                <div className="content">
                    <Route path="/" component={Home} exact />
                    <Route path="/cart" component={Cart} />
                </div>
            </div>
        </div>
    )
}

export default App
