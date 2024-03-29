import React, {useState , useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Card, Button, ListGroupItem} from 'react-bootstrap'
import Rating from '../components/Rating'
// import products from '../products'
import axios from 'axios'


const ProductScreen = ({match}) =>{
    const [product, setProduct] = useState([])

    useEffect( () => {
        const fetchProduct = async() => {
            
            const {data} = await axios.get(`http://localhost:5001/api/products/${match.params.id}`)
            console.log(data)
            setProduct( data )
        }
        fetchProduct()
    }, [match])

    return(
        <>
        <Link className='btn btn-light my-3' to = '/' >
            Go Back
        </Link>
        <Row>
            <Col md={6}>
                <Image src={product.image} alt={product.name} fluid/>
            </Col>
            <Col md = {3}>
                <ListGroup variant = 'flush'>
                    <ListGroupItem>
                        <h3>{product.name}</h3>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Rating value = {product.rating} text = {product.numReviews}/>
                    </ListGroupItem>
                    <ListGroupItem>
                        Price: ${product.price}
                    </ListGroupItem>
                    <ListGroupItem>
                        Description: ${product.description}
                    </ListGroupItem>
                </ListGroup>

            </Col>
            <Col md = {3}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Price: 
                                </Col>
                                <Col>
                                    <strong>${product.price}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Status: 
                                </Col>
                                <Col>
                                    {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button className = 'btn-block' type = 'button' disabled = {product.countInStock === 0} >
                                Add to Cart
                            </Button>
                        </ListGroup.Item>


                    </ListGroup>
                </Card>
            </Col>
        </Row>
        </>
    )
}

export default ProductScreen