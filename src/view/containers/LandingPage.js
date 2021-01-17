import React, { Component } from 'react';
import { connect } from 'react-redux';

import { showService } from '../../services/showService';
import * as actions from '../../store/action';

class LandingPage extends Component{

    componentDidMount(){
        this.props.onFetchInitShows()
    }

    render(){
        return(
            <div>
                Nenad
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