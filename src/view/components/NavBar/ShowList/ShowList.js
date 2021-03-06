import { Link } from "react-router-dom";
import "./ShowList.css";

const ShowList = ({ searchedShows, setShowId }) => {
  let list =
    searchedShows &&
    searchedShows.map((show) => (
      <Link to={`/singleshow/${show.id}`} key={show.id} onClick={() => setShowId(show.id)}>
        <li>{show.name}</li>
      </Link>
    ));
  return <ul className="list">{list}</ul>;
};

export default ShowList;
