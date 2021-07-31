import MainContent from "./mainContent"
import {Route} from "react-router-dom"
import React, { Component } from 'react'
import Details from "./details"



export class Section extends Component {
    render() {
        return (
            <section>
                    <Route path="/" component={MainContent} exact />
                    <Route path="/details/:id" component={Details} exact />
                    {/* <Route path="/product" component={Products} exact  />
                    <Route path="/cart" component={Cart}  exact/>
                    <Route path="/payment" component={Payment} exact /> */}
            </section>
        )
    }
}

export default Section