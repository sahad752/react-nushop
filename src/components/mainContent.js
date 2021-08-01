import React, { Component } from 'react'
import {DataContext} from './context'
import { Link } from "react-router-dom";



 export class MainContent extends Component {

    static contextType = DataContext;
    componentDidMount(){
        this.context.initialload()
    }

   render() {
     const {products2 ,handlePeriodChange,addCart} = this.context

     const ConditionalLink = ({ children, to, item1,condition }) => (!!condition && to)
     ? <Link onClick={()=>addCart(item1.id)}  style={{paddingLeft: 13, textDecoration: 'none'}} to={to}>{children}</Link>
     : <>{children}</>;

    return (
        <div >
            <div className="options">
            <select onChange={(val) => handlePeriodChange(val.target.value)} className="btn btn-sm btn-outline-secondary dropdown-toggle">
            <option value="Shoes">shoes</option>
            <option value="sandals">sandals</option>
            <option value="slippers">slippers</option>


            <option selected value="Catogery">All products</option>
           </select>
          </div>
            <div className="main_content">
            {(
            products2.map((item) =>
           
           <div className="card" key={item.id}>
            <div className="available">
             { item.available==1?
                <p className="text">In-Stock</p>: <p className="text2">Out-Stock</p>
             }   
            </div>

            <div className="card_img">
                <img src={item.thumb} />
            </div>

            <div className="card_header">
                <h2>{item.product_name}</h2>
                <p>{item.description}</p>
                <p className="price">Rs. {item.price}</p>
                <ConditionalLink to={`/details/${item.id}`} item1={item} condition={item.available!=0} >
                            <div className="btn">Buy Now</div>
               </ConditionalLink>   
            </div>
        </div>
        )
        )
        }
            </div>
        </div>
    )
}

}

export default MainContent;