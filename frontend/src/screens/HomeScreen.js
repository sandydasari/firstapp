import React , {useState, useEffect} from 'react'
import {Row, Col} from 'react-bootstrap'
import Product from '../components/Product'
// import products from '../products'
import axios from 'axios'
const HomeScreen = () => {
    const [products, setProducts] = useState([])

    useEffect( () => {
        const fetchProducts = async() => {
            
            const {data} = await axios.get('http://localhost:5001/api/products')
            console.log(data)
            setProducts( data )
        }
        fetchProducts()
    }, [])
    return (
        <>
        <h1>
            Latest products
            <Row>
                {products.map(product => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product ={product}/>
                    </Col>
                ))}

            </Row>
        </h1>
        
        </>
    )
}

export default HomeScreen