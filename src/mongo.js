import mongoose from 'mongoose'

const IS_DEV = process.env.NODE_ENV === 'development' ? true : false
const MONGO_URL =  process.env.MONGO_URL ? process.env.MONGO_URL : null


if(!MONGO_URL) throw new Error('MongoDB URL is not defined on env!')


export const init = () => {
    //if(IS_DEV) 
    mongoose.set('debug', true)

    mongoose.connect(MONGO_URL)

    const connection = mongoose.connection

    connection
    .on('error', () => {
        throw new Error(`Error on connect to database ${MONGO_URL}`)
    })
    .once('open', () => {
        const TYPE = IS_DEV ? 'development' : 'production'
        console.log(`Connected to ${TYPE} server database: ${MONGO_URL}`)
    })

    return connection
}