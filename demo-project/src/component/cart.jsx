import React, { Component } from 'react';
import Helper from './helper';

class Cart extends Component {
    state = { 
        count:0,
    }
    render() { 
        return ( 
            <h3 style={{textAlign:'end', padding:'40px 60px 0 0', backgroundColor:'maroon', color:'#efefef'}}>
                Cart(
                <span>{this.state.count}</span>
                )
            </h3> 
        );
    }

    total = (tags)=>{
        const num = tags.reduce((prev, item)=>{
            return prev + item.value 
        }, 0)
        this.setState({count:num})
    }

}

export default Cart;