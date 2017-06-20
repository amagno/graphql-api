//import { init } from './mongo.js'
import express from 'express'
import bodyParser from 'body-parser'
import graphqlHTTP from 'express-graphql'
console.log('TEsting!!!')


//const mongoConnection = init()

const app = express()
const PORT = process.env.PORT ? process.env.PORT : 3000

const MONGO_URL = process.env.MONGO_URL ? process.env.MONGO_URL : 'Not defined!'

app.get('/', (req, res) => {
    res.send(`App is running on port ${PORT}, Mongo Database: ${MONGO_URL}`)
})

app.listen(PORT, () => {
    console.log(`App is running on http://locahost:${PORT}`)
})