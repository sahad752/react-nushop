import React, { Component } from 'react'
import {DataContext} from './context'
import { Link } from "react-router-dom";



 export class MainContent extends Component {

    static contextType = DataContext;
    componentDidMount(){
        this.context.initialload()
    }

   render() {
     const {products2 ,handlePeriodChange} = this.context


    return (
        <div >
            <div className="options">
            <select onChange={(val) => handlePeriodChange(val.target.value)} className="btn btn-sm btn-outline-secondary dropdown-toggle">
            <option value="Shoes">shoes</option>
            <option value="sandals">sandals</option>
            <option value="slippers">slippers</option>


            <option selected value="Catogery">Catogery</option>
           </select>
          </div>
            <div className="main_content">
            {(
            products2.map((item) =>
           
           <div onClick={()=>console.log(item.thumb)} className="card" key={item.id}>
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
                <Link to={`/details/${item.id}`}>
                            <div className="btn">Purchase</div>
               </Link>   
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