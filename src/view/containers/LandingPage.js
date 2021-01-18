import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/action';
import NavBar from '../components/NavBar';

class LandingPage extends Component{

    componentDidMount(){
        this.props.onFetchInitShows()
    }

    render(){
        return(
            <div>
                <NavBar />
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        shows: state.shows
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchInitShows: () => dispatch(actions.fetchInitShows())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);