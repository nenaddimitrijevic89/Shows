import React, { Component } from "react";
import { connect } from "react-redux";

import "./LandingPage.css";
import * as actions from "../../../store/action";
import Loader from "../../components/Loader/Loader";
import NavBar from "../../components/NavBar/NavBar";
import Pagination from "../../components/Pagination/Pagination";
import Shows from "../../components/Shows/Shows";

class LandingPage extends Component {
  state = {
    showsPerPage: 20,
    currentPage: 1,
    currentShows: null,
    isLoading: true,
  };
  componentDidMount() {
    this.props.onFetchInitShows();
    setTimeout(() => this.current(), 1000);
  }

  paginate = (number) => {
    this.setState({ currentPage: number });
    setTimeout(() => this.current(), 100);
  };

  current = () => {
    const indexOfLastShow = this.state.currentPage * this.state.showsPerPage;
    const indexOfFirstShow = indexOfLastShow - this.state.showsPerPage;
    const currentShows = this.props.shows
      .sort((a, b) => b.rating - a.rating)
      .slice(indexOfFirstShow, indexOfLastShow);
    this.setState({ currentShows: currentShows, isLoading: false });
  };

  setShowsPerPage = (number) => {
    this.setState({ showsPerPage: number });
  };

  render() {
    let shows = <Loader />;
    if (!this.state.isLoading) {
      shows = (
        <>
          <Shows
            data={this.state.currentShows}
            setShowId={this.props.onSetShowId}
          />
          <Pagination
            showsPerPage={this.state.showsPerPage}
            totalShows={this.props.shows.length}
            paginate={this.paginate}
            currentPage={this.state.currentPage}
            setShowsPerPage={this.setShowsPerPage}
          />
        </>
      );
    }
    return (
      <div className="container-fluid wrapper">
        <NavBar
          search={this.props.onFetchSearchedShows}
          searchedShows={this.props.searchedShows}
          setShowId={this.props.onSetShowId}
        />
        <div className="container">{shows}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    shows: state.shows,
    searchedShows: state.searchedShows,
    searchedShowId: state.searchedShowId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchInitShows: () => dispatch(actions.fetchInitShows()),
    onFetchSearchedShows: (query) => dispatch(actions.fetchSearchedShows(query)),
    onSetShowId: (id) => dispatch(actions.setShowId(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
