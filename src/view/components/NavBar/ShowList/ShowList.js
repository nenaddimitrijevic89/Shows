import { Link } from 'react-router-dom';
import './ShowList.css';

const ShowList = ({ searchedShows }) => {
    let list = searchedShows[0] && searchedShows.map(show => <Link to={`/singleshow/${show.id}`}><li>{show.name}</li></Link>)
    return (
        <ul className='list'>
            {list}
        </ul>
    )
}

export default ShowList;