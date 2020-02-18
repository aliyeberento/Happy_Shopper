import React, { Component } from "react";
import { connect } from 'react-redux';
import axios from 'axios';


class ListView extends Component {

    componentDidMount() {
        axios.get('/api/list')
        .then(response => {
            console.log(response.data)
        }).catch( error => {
            console.log(error)
        })
    }

    render() {
        return (
            <>
                <h1> List: Ta-Da! </h1>
                {/* <ul>
                    {this.props.store.addingToList.map(item => (
                        <li key={item.id}>
                            <img src={item.item_image} alt="item" />
                            <br />
                            {item.item_name} | Price: {item.item_price} Aisle : {item.item_isle}
                            <button onClick={() => this.props.dispatch(
                                {
                                    type: 'DELETE_ITEM',
                                    payload: item
                                })}>REMOVE ITEM</button>
                        </li>
                    ))}
                </ul> */}
            </>
        )
    }
}

const mapStateToProps = store => ({
    store
});

export default connect(mapStateToProps)(ListView)