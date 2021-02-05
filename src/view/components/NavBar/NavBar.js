import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';

const NavBar = ({ searching }) => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Shows</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>                   
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(e) => searching(e.target.value)} />
                    
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
};

export default NavBar;