import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link } from 'react-router-dom';


// // const mapStateToProps = ({user}) => ({ user });
// const mapStateToProps = state => ({
//   user: state.user,
// });

// // this allows us to use <App /> in index.js
// export default connect(mapStateToProps)(UserPage);


class HomePage extends Component {

    state = {
        search: {
            searchQuery: ''
        }
    }

    handleSearch = (event) => {
        this.setState({
            search: {
                ...this.state.search,
                searchQuery: event.target.value
            }
        }, () => {
            console.log(this.state.search.searchQuery)
        })
    }


    handleClick = () => {
        console.log('in handle click')
        this.props.dispatch({
            type: 'FETCH_ITEMS',
            payload: this.state.search.searchQuery
        })
        console.log(this.state.search.searchQuery)
    }

    addToList = (event,item) => {
        // event.persist()
        console.log('ADDING TO LIST',item)
        // alert('added to list', item)
        this.props.dispatch({
            type: 'ADD_ITEM',
            payload: item
        })
    }


    render() {
        return (
            <>
                <div id="welcomeHeader">
                    <h1>
                        Welcome back,
                        <br />
                        {this.props.store.user.username}
                    </h1>
                </div>
                <Link to = "/list"> View List </Link>
                <div>
                    <form>
                        <input placeholder="SEARCH" value={this.state.search.searchQuery} onChange={(event) => this.handleSearch(event)} />
                        <input type="submit" onClick={this.handleClick} />
                    </form>
                    <div>
                        <ul>
                            {this.props.store.search.map(item => (
                                <li key = {item.id}>
                                    <img src = {item.item_image} alt = "item"/>
                                    <br />
                                     {item.item_name} | Price: {item.item_price} Aisle : {item.item_isle}
                                     <button onClick = {(event) => this.addToList(event, item)}> Add </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = store => ({
    store
});

export default connect(mapStateToProps)(HomePage)