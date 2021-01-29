import React, { Component } from 'react';
import { connect } from 'react-redux'

import * as actions from '../../../store/action';
import Show from '../../components/Shows/Show/Show';

class SingleShow extends Component{
    componentDidMount(){
        this.props.onFetchSingleShow(this.props.match.params.id)
    }
    render(){
        return(
            <><Show image={this.props.singleShow.largeImage}/></>
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