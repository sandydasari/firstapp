// const express = require('express')

import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
// import products from './data/products.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import cors from 'cors'
import productRoutes from './routes/productRoutes.js'


// var cors = require('cors')


dotenv.config()

connectDB()

const app = express()
app.use(cors())

app.use((req, res, next)=>{
    console.log(req.originalUrl)
    next()
})

app.get('/', (req, res) =>{
    res.send('API is running...')
})

// app.get('/api/products', (req, res) =>{
//     res.json(products)
// })

// app.get('/api/products/:name', (req, res) =>{
//     const product = products.find(p => p.name === req.params.name)
//     res.json(products)
// })
app.use('/api/products', productRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5001

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))
