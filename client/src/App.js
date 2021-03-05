import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {Container} from 'react-bootstrap'
import ApolloProvider from './ApolloProvider'

import './App.scss'

import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'

function App() {
    return (
        <ApolloProvider>
            <BrowserRouter>
                <Container className="pt-5">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/register" component={Register} />
                        <Route path="/login" component={Login} />
                    </Switch>
                </Container>
            </BrowserRouter>
        </ApolloProvider>
    )
}

export default App
