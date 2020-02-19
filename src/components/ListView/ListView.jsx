import React, { Component } from "react";
import { connect } from 'react-redux';
import axios from 'axios';


class ListView extends Component {

    state = {
        cart: []
    }

    componentDidMount() {
        axios.get('/api/list')
            .then(response => {
                console.log(response.data)
                let items = response.data;
                this.setState({
                   cart: [...items]
                })
                // cart.push(items);
                    console.log('this is items?',this.state.cart)
            }).catch(error => {
                console.log(error)
            })
    }

    render() {
        // let cart = this.state.cart
        return (
           this.state.cart.map(item => 
           <h4>{item.item_name}</h4>) 
        )
    }
}

// render() {
//     this.state.cart ? this.state.cart.map((item, i) => {
//         return (
//             <div>
//                 <h1>{item.name}</h1>
//             </div>
//         )
//     })
// }




const mapStateToProps = store => ({
    store
});

export default connect(mapStateToProps)(ListView)