import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../../store/action";
import Loader from "../../components/Loader/Loader";
import Show from "../../components/Shows/Show/Show";

class SingleShow extends Component {
  componentDidMount() {
    this.props.onFetchSingleShow(this.props.match.params.id);
  }
  render() {
    let show = <Loader />;
    if (this.props.singleShow) {
      show = <Show image={this.props.singleShow.largeImage} />;
    }
    return <div className='container-fluid'>{show}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    singleShow: state.singleShow,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchSingleShow: (id) => dispatch(actions.fetchSingleShow(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleShow);
