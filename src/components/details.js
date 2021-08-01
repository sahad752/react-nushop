import React, { Component } from 'react'
import {DataContext} from './context'


export class Details extends Component {
    static contextType = DataContext;
    state = {
        product11: []
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

    componentDidMount(){
        this.getProduct();
    }



    render() {
        const {cart,increase,reduction,removeProduct,total} = this.context;

        const {product11} = this.state;
        const {addCart} = this.context;
        return (
            <div>
                <h2>
                    Product Detail
                </h2>
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
                                    <div className="btn">Purchase</div>
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