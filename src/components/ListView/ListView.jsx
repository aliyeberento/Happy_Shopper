import React, { Component } from "react";
import axios from 'axios';
import { connect } from "react-redux";


class ListView extends Component {

    state = {
        cart: [],
    }

    getItems = () => {
       this.props.dispatch({
           type: 'GETTING_ITEM',
       })
    }

    updateQuantity = (item) => {
        // axios.put('/api/list')
        // .then(response => {
        //     console.log(response)
        // }).catch(error => {
        //     console.log(error)
        // })
        this.props.dispatch({
            type: 'UPDATE_QUANTITY',
            payload: item
        })
        // this.getItems();
    }

    componentDidMount() {
        this.getItems()
    }

    removeItem = (item) => {
        this.props.dispatch({
            type: 'DELETE_ITEM',
            payload: item
        })
    }

    // addQuantity = (event) => {
    //     this.setState({
    //         quantity: {
    //             quantity: this.state.quantity.quantity + 1
    //         }
    //     }, () => {
    //         console.log(this.state.quantity.quantity)
    //     })
    // }


    render() {
        return (
            // {JSON.stringify(this.state.cart)}
            this.props.store.addingToList.map(item =>
                <>
                    <button onClick = {() =>this.updateQuantity(item)} > + </button>
                    {item.quantity}
                    <button> - </button>

                    <ul>
                        <li key = {item.item_id}>

                            <div className="itemPic">
                                <img src={item.item_image}
                                    alt="item" />
                            </div>

                            <div className="itemName">
                                {item.item_name}
                            </div>

                            <br />
                            <div className="itemPrice">
                                <h6> PRICE: {item.item_price} </h6>
                            </div>

                            {/* <br /> */}
                            <div className="itemAisle">
                                <h6> AISLE: {item.item_isle} </h6>
                            </div>




                            <button onClick={() => this.removeItem(item)}> REMOVE </button>

                        </li>

                    </ul>
                </>

            )
        )
    }
}

const mapStateToProps = store => ({
    store
});


export default connect(mapStateToProps)(ListView)