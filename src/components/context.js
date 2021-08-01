import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        product_card : [
            {
                id: 1,
                product_name: "Nike Air Max",
                vendor: "XYZ traders",
                price: 350,
                catogery:"Shoes",
                available:1, 
                count:1,

                thumb: "./images/1.png"
            },
            {
                id: 2,
                product_name: "Adidas ",
                vendor: "ABC traders",
                price: 250,
                count:1,
                catogery:"Shoes",
                available:0, 
                thumb: "./images/2.png"
            },
            {
                id: 3,
                product_name: "Puma ",
                vendor: "ABC traders",
                price: 350,
                catogery:"Shoes",
                available:1, 
                count:1,

                thumb: "./images/3.png"
            },
            {
                id: 4,
                product_name: "Ralph Lauren	",
                vendor: "ABC traders",
                price: 350,
                catogery:"slippers",
                available:1, 
                count:1,

                thumb: "./images/6.png"
            },
            {
                id: 5,
                product_name: "Adidas",
                vendor: "ABC traders",
                price: 250,
                catogery:"slippers",
                available:0, 
                count:1,

                thumb: "./images/8.png"
            },
            {
                id: 6,
                product_name: "Cros",
                vendor: "XYZ traders",
                price: 350,
                available:1, 
                count:1,

                catogery:"slippers",
                thumb: "./images/9.png"
            },
            {
                id: 7,
                product_name: "puma",
                vendor: "XYZ traders",
                price: 350,
                available:0, 
                count:1,

                catogery:"sandals",
                thumb: "./images/7.png"
            },
            {
                id: 8,
                product_name: "Sparx",
                vendor: "XYZ traders",
                price: 250,
                count:1,

                available:1, 
                catogery:"sandals",
                thumb: "./images/4.png"
            },
            {
                id: 9,
                product_name: "Woodland sandals",
                vendor: "XYZ traders",
                price: 350,
                available:1, 
                count:1,

                catogery:"sandals",
                thumb: "./images/5.png"
            }
        ],
        cart:[],
        products2:[]
    }

    initialload = ()=>{
        const {product_card} = this.state;
        this.setState({products2: product_card})
    }

    handlePeriodChange=(selVal)=>{
        // this.props.handlePeriodChange(selVal);
        console.log(selVal)
        const {product_card} = this.state;
        if(selVal=="Catogery"){
            this.setState({products2: product_card})

        }else{
            const data = product_card.filter(item =>{
                return item.catogery == selVal
            })
            console.log("filtered data",data)
            this.setState({products2: data}
                )
        }

       
    }

    addCart = (id) =>{
        const {products, cart} = this.state;
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            this.setState({cart: [...cart,...data]})
        }else{
            alert("The product has been added to cart.")
        }
    };

    reduction = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    increase = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count += 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            const {cart} = this.state;
            cart.forEach((item, index) =>{
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart});
            this.getTotal();
        }
       
    };

  
    getTotal = ()=>{
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        this.setState({total: res})
    };
    
    componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    };

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));

        if(dataCart !== null){
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }
    }
   

    render() {
        const {product_card,products2, cart,total} = this.state;
        const {addCart,reduction,increase,removeProduct,getTotal,handlePeriodChange,initialload} = this;
        return (
            <DataContext.Provider 
            value={{product_card,products2, handlePeriodChange,initialload,addCart, cart, reduction,increase,removeProduct,total,getTotal}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }

}
