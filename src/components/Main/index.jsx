import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom'
import NavBar from '../NavBar'
import Header from '../Header'
import {GlobalStyle} from './style'

export default class Main extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <div>
                    <GlobalStyle/>
                    <Header/>
                    <NavBar/>
                    <Route
                        exact
                        path="/"
                        render={() => <p>mierdas 1</p>}
                    />
                    <Route
                        path="/kk"
                        render={() => <p>mierdas</p>}
                    />
                </div>
            </BrowserRouter>
        );
    }
};