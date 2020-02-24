import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    Route
} from 'react-router-dom';

import SearchItem from '../SearchItem/SearchItem'



class SeachPage extends Component {

    state = {
        search: {
            searchQuery: ''
        },
        quantity: {
            quantity: 0
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
                <div className="searchResults">

                    <form>
                        <input placeholder="SEARCH" value={this.state.search.searchQuery} onChange={(event) => this.handleSearch(event)} size="30" />
                        <button onClick={this.handleClick} className="submitButton"> TEST </button>
                    </form>
                    <div>
                        <SearchItem />
                    </div>
                </div>
                <button size = "100px">
                    <footer>
                        <Link to="/list">
                            View list
                        </Link>
                    </footer>
                </button>

            </>
        )
    }
}

const mapStateToProps = store => ({
    store
});

export default connect(mapStateToProps)(SeachPage)