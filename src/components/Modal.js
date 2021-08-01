import React from "react";
import "./Modal.css";

function Modal({ setOpenModal,item}) {
    console.log("From modal",item);
    const listItems = item.map((item) =>
    <div className="modalcard" key={item.id}>
     
        <div className="card_img">
            <img src={item.thumb} />
        </div>
        <div className="card_header">
            <h2>{item.product_name}</h2>
            <p>quantity:{item.count}</p>
            <p>seller: {item.vendor}</p>
            <p className="price">price :{item.price*item.count}<span>{item.currency}</span></p>
        </div>
    </div>

);
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="items">
        {listItems}

        </div>
        <div className="footerModal">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button> to Payment</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;