import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/action';

const DetailsPage = () => {
    return (
        <>Details</>
    )
};

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

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);