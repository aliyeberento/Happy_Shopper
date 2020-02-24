import React, { Component } from "react";
import { connect } from "react-redux";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap';
import {
    Route,
} from 'react-router-dom';
import { Link } from 'react-router-dom';



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
        this.props.dispatch({
            type: 'UPDATE_QUANTITY',
            payload: item
        })
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


    render() {
        return (
            this.props.store.addingToList.map(item =>
                <>

                    <div>
                        <Card className="card">
                            <center>  <CardImg height="140%" src={item.item_image} alt="Card image cap" /> </center>
                            <CardBody>
                                <CardTitle>{item.item_name}</CardTitle>
                                <div className="list-group-flush" >
                                    <CardText>PRICE: ${item.item_price}</CardText>
                                    <CardText>AISLE: {item.item_isle}</CardText>
                                </div>
                                <div>
                                    <Button onClick={() => this.updateQuantity(item)} > + </Button>
                                    {item.quantity}
                                    <button> - </button>
                                    <button onClick={() => this.removeItem(item)}> REMOVE </button>

                                </div>
                            </CardBody>
                        </Card>
                    </div>
                    <button>
                        <footer>
                            <Link to="/home">
                                Back Home
                        </Link>
                        </footer>
                    </button>
                </>
            )
        )
    }
}

const mapStateToProps = store => ({
    store
});


export default connect(mapStateToProps)(ListView)