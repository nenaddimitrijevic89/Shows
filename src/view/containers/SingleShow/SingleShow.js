import React, { Component } from 'react';
import { connect } from 'react-redux'

import * as actions from '../../../store/action';
import { showService } from '../../../services/showService';

class SingleShow extends Component{
    componentDidMount(){
        this.props.onFetchSingleShow(this.props.match.params.id)
    }
    render(){
        return(
            <></>
        )
    }
};

const mapStateToProps = state => {
    return {
        singleShow: state.singleShow
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchSingleShow: (id) => dispatch(actions.fetchSingleShow(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleShow);