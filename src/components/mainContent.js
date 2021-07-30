import React from 'react'
import product_card from "../data/product_data";

const MainContent = () => {
    console.log(product_card);
    const listItems = product_card.map((item) =>
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
                <p className="price">{item.price}<span>{item.currency}</span></p>
                <div className="btn">Purchase</div>
            </div>
        </div>

    );
    return (
        <div className="main_content">
            <h3></h3>
            {listItems}
        </div>
    )
}
export default MainContent;
