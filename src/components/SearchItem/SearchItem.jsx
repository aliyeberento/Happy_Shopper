import React, { Component } from "react"
import { connect } from 'react-redux';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';



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
                <div className = "content"> 
                    {this.props.store.search.map(item => (
                        <>
                            <Card className="card">
                                <center> <CardImg height="140%" src={item.item_image} alt="Card image cap" /> </center>
                                {/* <CardImg top width="50%" src={item.item_image} alt="Card image cap" /> */}
                                <CardBody>
                                    <CardTitle>{item.item_name}</CardTitle>
                                    {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
                                    <div className="list-group-flush" >
                                        <CardText>PRICE: ${item.item_price}</CardText>
                                        <CardText>AISLE: {item.item_isle}</CardText>
                                    </div>
                                    {/* <Button>Button</Button> */}
                                    <div>
                                        {/* <Button onClick={() => this.updateQuantity(item)} > + </Button>
                                        {item.quantity}
                                        <button> - </button> */}
                                        <button className=" addBtn " onClick={(event) => this.addToList(event, item)}> Add </button>

                                    </div>
                                </CardBody>
                            </Card>

                        </>
                    ))}
                </div>
            </>
        )
    }
}

const mapStateToProps = store => ({
    store
});


export default connect(mapStateToProps)(SearchItem)