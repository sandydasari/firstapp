// import logo from './logo.svg';
// import './App.css';
import React from 'react'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'


const App=()=> {
  return (
    <Router>
        <Header />
        <main className='py-3'>
          <Container>
          <Routes>
            <Route exact path ='/' element = {<HomeScreen/>} />
            <Route path = '/products/:_id' element= {<ProductScreen />} />
          </Routes>
          </Container>
        </main>
        <Footer /> 
    </Router>
  )
}

export default App
