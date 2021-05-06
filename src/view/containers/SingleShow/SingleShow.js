import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../../store/action";
import Loader from "../../components/Loader/Loader";
import NavBar from "../../components/NavBar/NavBar";
import SingleShowInfo from "../../components/Shows/SingleShowInfo/SingleShowInfo";
class SingleShow extends Component {
  componentDidMount() {
    this.props.onFetchSingleShow(this.props.showId);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.showId !== this.props.showId) {
      this.props.onFetchSingleShow(this.props.showId);
    }
  }
  render() {
    let show = <Loader />;
    if (this.props.singleShow) {
      show = (
        <SingleShowInfo
          id={this.props.showId}
          image={this.props.singleShow.largeImage}
          name={this.props.singleShow.name}
          summary={this.props.singleShow.summary}
          seasons={this.props.seasons}
          cast={this.props.cast}
          crew={this.props.crew}
          images={this.props.images}
        />
      );
    }
    return (
      <div className="container-fluid wrapper">
        <NavBar
          search={this.props.onFetchSearchedShows}
          searchedShows={this.props.searchedShows}
          setShowId={this.props.onSetShowId}
        />
        <div className="container">{show}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    singleShow: state.singleShow,
    searchedShows: state.searchedShows,
    showId: state.showId,
    seasons: state.seasons,
    cast: state.cast,
    crew: state.crew,
    images: state.images,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchSingleShow: (id) => dispatch(actions.fetchSingleShow(id)),
    onFetchSearchedShows: (query) =>
      dispatch(actions.fetchSearchedShows(query)),
    onSetShowId: (id) => dispatch(actions.setShowId(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleShow);
