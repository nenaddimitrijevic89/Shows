import { Link } from "react-router-dom";
import "./ShowList.css";

const ShowList = ({ searchedShows }) => {
  let list =
    searchedShows &&
    searchedShows.map((show, i) => (
      <Link to={`/singleshow/${show.id}`} key={i}>
        <li>{show.name}</li>
      </Link>
    ));
  return <ul className="list">{list}</ul>;
};

export default ShowList;
