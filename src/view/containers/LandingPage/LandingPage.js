import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../../store/action";
import NavBar from "../../components/NavBar/NavBar";
import Pagination from "../../components/Pagination/Pagination";
import Shows from "../../components/Shows/Shows";

class LandingPage extends Component {
  state = {
    showsPerPage: 20,
    currentPage: 1,
  };
  componentDidMount() {
    this.props.onFetchInitShows();
  }

  paginate = (number) => {
    const indexOfLastShow = this.state.currentPage * this.state.showsPerPage;
    const indexOfFirstShow = indexOfLastShow - this.state.showsPerPage;
    const currentShows = this.props.shows.slice(indexOfFirstShow, indexOfLastShow);
    this.setState({ currentPage: number })
    this.props.onChangePage(currentShows);
  };

  setShowsPerPage = (number) => {
    this.setState({ showsPerPage: number });
  };

  render() {
    let shows = null;
    let pagination = null;
    if (this.props.shows) {
      shows = <Shows data={this.props.shows} />;
      pagination = (
        <Pagination
          showsPerPage={this.state.showsPerPage}
          totalShows={this.props.shows.length}
          paginate={this.paginate}
          currentPage={this.state.currentPage}
          setShowsPerPage={this.setShowsPerPage}
        />
      );
    }
    return (
      <div className="container">
        <NavBar />
        {shows}
        {pagination}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    shows: state.shows,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchInitShows: () => dispatch(actions.fetchInitShows()),
    onChangePage: (payload) => dispatch(actions.changePage(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
