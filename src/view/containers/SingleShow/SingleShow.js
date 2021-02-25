import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../../store/action";
import Loader from "../../components/Loader/Loader";
import NavBar from "../../components/NavBar/NavBar";
import SingleShowInfo from "../../components/Shows/SingleShowInfo/SingleShowInfo";
class SingleShow extends Component {
  componentDidMount() {
    this.props.onFetchSingleShow(this.props.match.params.id);
  }
  render() {
    let show = <Loader />;
    if (this.props.singleShow) {
      show = (
        <SingleShowInfo
          image={this.props.singleShow.largeImage}
          name={this.props.singleShow.name}
        />
      );
    }
    return (
      <div className="container-fluid wrapper">
        <NavBar
          search={this.props.onFetchSearchedShows}
          searchedShows={this.props.searchedShows}
        />
        <div className="container">{show}</div>;
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    singleShow: state.singleShow,
    searchedShows: state.searchedShows,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchSingleShow: (id) => dispatch(actions.fetchSingleShow(id)),
    onFetchSearchedShows: (query) =>
      dispatch(actions.fetchSearchedShows(query)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleShow);
