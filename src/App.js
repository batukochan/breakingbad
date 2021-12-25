import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar , Container , Nav} from 'react-bootstrap';
import HomePage from './pages/HomePage';
import Detail from './pages/Detail';
import Quotes from './pages/Quotes';
import QuotesDetail from './pages/QuotesDetail';

function App() {
  return (

    <Router>

      <Navbar bg="dark" expand="lg" className='mb-1'>
        <Container>
          <Navbar.Brand href="/">
            <img alt="breakingBad" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Breaking_Bad_logo.svg/1024px-Breaking_Bad_logo.svg.png" width={100}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link style={{color:'#174538'}} href="/">Characters</Nav.Link>
              <Nav.Link style={{color:'#174538'}} href="/quotes">Quotes</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/char/:char_id" element={<Detail/>}/>
        <Route exact path="/quotes" element={<Quotes/>} />
        <Route path="/quotes/:quote_id" element={<QuotesDetail/>} />
      </Routes>
    </Router>
  );
}

export default App;
