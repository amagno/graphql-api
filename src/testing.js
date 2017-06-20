import { init } from './mongo.js'
import express from 'express'
import bodyParser from 'body-parser'
import graphqlHTTP from 'express-graphql'
import cors from 'cors'
import schema from './graphql'

const mongoConnection = init()

const app = express()
const PORT = process.env.PORT ? process.env.PORT : 3000

const MONGO_URL = process.env.MONGO_URL ? process.env.MONGO_URL : 'Not defined!'

app.get('/', (req, res) => {
    res.send(`App is running on port ${PORT}, Mongo Database: ${MONGO_URL}`)
})

app.use(bodyParser.json())

app.use('/graphql', cors(), graphqlHTTP((req, res) => {
    return {
        schema,
        graphiql: true
    }
}))

app.listen(PORT, () => {
    console.log(`App is running on http://locahost:${PORT}`)
})