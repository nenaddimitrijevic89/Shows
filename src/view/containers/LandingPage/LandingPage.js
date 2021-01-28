import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../store/action';
import NavBar from '../../components/NavBar/NavBar';
import Shows from '../../components/Shows/Shows';

class LandingPage extends Component{

    componentDidMount(){
        this.props.onFetchInitShows()
    }

    search = () => {
        
    }

    render(){
        return(
            <div className='container'>
                <NavBar />
                <Shows data={this.props.shows}/>
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