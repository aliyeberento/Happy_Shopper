import React, { Component } from "react"
import { connect } from 'react-redux';



class SearchItem extends Component {

    state = {
        quantity: {
            quantity: 0
        }
    }

    addToList = (event, item) => {
        // event.persist()
        console.log('ADDING TO LIST', item)
        // alert('added to list', item)
        this.props.dispatch({
            type: 'ADD_ITEM',
            payload: item
        })
    }

    addQuantity = (event) => {
        this.setState({
            quantity: {
                quantity: this.state.quantity.quantity + 1
            }
        }, () => {
            console.log(this.state.quantity.quantity)
        })
    }

    render() {
        return (
            <>
                <ul>
                    {this.props.store.search.map(item => (
                        <>
                            <li key={item.id}>
                                <img src={item.item_image} alt="item" />
                                {item.item_name}
                                Price: {item.item_price} Aisle : {item.item_isle}
                            </li>
                            <button className=" addBtn " onClick={(event) => this.addToList(event, item)}> Add </button>
                        </>
                    ))}
                </ul>
            </>
        )
    }
}

const mapStateToProps = store => ({
    store
});


export default connect(mapStateToProps)(SearchItem)