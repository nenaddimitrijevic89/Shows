import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../../store/action";
import NavBar from "../../components/NavBar/NavBar";
import Shows from "../../components/Shows/Shows";

class LandingPage extends Component {
  componentDidMount() {
    this.props.onFetchInitShows();
  }

  render() {
    let shows = null;
    if (this.props.shows) {
      shows = <Shows data={this.props.shows} />;
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchInitShows: () => dispatch(actions.fetchInitShows()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
