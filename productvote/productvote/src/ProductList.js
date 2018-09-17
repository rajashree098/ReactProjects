import React from 'react';
import Product from './Product';
import axios from 'axios';
class ProductList extends React.Component {
    constructor(){
        super()
        this.state ={
            products:[]
        }
        this.voteClicked=this.voteClicked.bind(this)
    }
  
    
   voteClicked(id,check)
    {
        console.log("Vote Clicked for "+id);
        const updatedProducts = this.state.products.map((p1)=>{
            if (p1.id === id && check===1) {
                console.log("Vote Clicked for "+id);
                return Object.assign({},p1,{vote:p1.vote+1})
            }
            else if  (p1.id === id && check===0) {
                console.log("Vote Clicked for "+id);
                return Object.assign({},p1,{vote:p1.vote-1})
            }else{
                return p1
            }
        })
        this.setState({
            products:updatedProducts
        })
        console.log(this.state.products)
    }
    componentWillMount = () => {
      this.getApiData()
    }
    getApiData(){
        axios.get("http://localhost:4444/feedback").then((response)=>{
        this.setState({
            products:response.data
        })
        console.log("hello");
        console.log(this.state.products)
        })
    } 
   
    render() { 
        
        const sortedProduct = this.state.products.sort((a,b)=>{
            return a.vote - b.vote
        })
        const allproducts=sortedProduct.map((product)=>{
            return (<Product
                key={product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                imageurl={product.imageUrl}
                url={product.url}
                avatarurl={product.avatarUrl}
                vote={product.vote}
                onCheck={this.voteClicked}
                >
                </Product>)
        })
        return ( 
        <div className="ui unstackable items">
           {allproducts}
            </div> );
    }
}
 
export default ProductList;