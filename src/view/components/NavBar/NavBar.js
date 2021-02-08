import { Navbar, Form, FormControl } from 'react-bootstrap';
import ShowList from './ShowList/ShowList';
import './NavBar.css';

const NavBar = ({ search, searchedShows }) => {
    return (
        <>
            <Navbar bg="dark" expand="lg">
                <div className='container'>
                <Navbar.Brand href="#home" className='text-light'>Shows</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className='search'>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(e) => search(e.target.value)} />
                    <ShowList searchedShows={searchedShows}/>
                    </Form>
                </Navbar.Collapse>
                </div>
            </Navbar>
        </>
    )
};

export default NavBar;