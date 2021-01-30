import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../../store/action";
import NavBar from "../../components/NavBar/NavBar";
import Pagination from "../../components/Pagination/Pagination";
import Shows from "../../components/Shows/Shows";

class LandingPage extends Component {
  componentDidMount() {
    this.props.onFetchInitShows();
  }

  currentShows = () => {
    const indexOfLastShow = this.props.currentPage * this.props.showsPerPage;
    const indexOfFirstShow = indexOfLastShow - this.props.showsPerPage;
    const shows = this.props.shows.sort((a, b) => b.rating - a.rating).slice(indexOfFirstShow, indexOfLastShow);
    return shows;
  };

  paginate = (page) => {
    this.props.onChangePage(page)
  };

  setShowsPerPage = () => {

  };

  render() {
    let shows = null;
    if (this.props.shows) {
      shows = (
      <>
        <Shows data={this.currentShows()} />
        <Pagination
          showsPerPage={this.props.showsPerPage}
          totalShows={this.props.shows.length}
          paginate={this.paginate}
          currentPage={this.props.currentPage}
          setShowsPerPage={this.setShowsPerPage}/>
      </>
      );
    }
    return (
      <div className="container">
        <NavBar />
        {shows}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    shows: state.shows,
    currentPage: state.currentPage,
    showsPerPage: state.showsPerPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchInitShows: () => dispatch(actions.fetchInitShows()),
    onChangePage: (page) => dispatch(actions.changePage(page))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
