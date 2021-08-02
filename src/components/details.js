import React, { Component,useState } from 'react'
import {DataContext} from './context'

import Modal from "./Modal";



export class Details extends Component {
    static contextType = DataContext;
    state = {
        product11: [],
        modalOpen:false
    }

    

    getProduct = () =>{
            const res = this.context.product_card;
            console.log(res)
            const data = res.filter(item =>{
                return item.id == this.props.match.params.id
            })
            console.log("filtered data",data)
            this.setState({product11: data}
                )
            
        
    };

    openmodal=(value)=>{
            this.setState({modalOpen:value})
    }


    componentDidMount(){
        this.getProduct();
    }



    render() {
        const {cart,increase,reduction} = this.context;
        const {product11,modalOpen } = this.state
        // this.state = { modalOpen: false };
  
        return (
            <div className="DetailView">
                <h2 className="DetailHeader">
                    Product Detail
                </h2>
                {modalOpen && <Modal setOpenModal={this.openmodal} item={product11}/>}

                {
                    product11.map(item =>(
                        <div className="card" >
                                <div className="card_img">
                                    <img src={item.thumb}/>
                             </div>                            
                             <div className="box">
                               
                                    <h2>{item.product_name}</h2>
                                    <p className="price">Rs. {item.price}</p>
                                    <div className="amount">
                                        <button className="count" onClick={() => reduction(item.id)}> - </button>
                                        <span>{item.count}</span>
                                        <button className="count" onClick={() => increase(item.id)}> + </button>
                                    </div>
                                    <div onClick={()=>this.openmodal(true)} className="btn">Purchase</div>
                            </div>
                        </div>
                    )
                    )
                }
             
            </div>
        )
    }
}

export default Details