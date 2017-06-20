import { init } from './mongo.js'
import express from 'express'
import bodyParser from 'body-parser'
import graphqlHTTP from 'express-graphql'
console.log('TEsting!!!')


const mongoConnection = init()

const app = express()
const PORT = process.env.SERVER_PORT ? process.env.SERVER_PORT : 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`App is running on http://locahost:${PORT}`)
})