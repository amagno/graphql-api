import { makeExecutableSchema } from 'graphql-tools'
import mongoose from 'mongoose'
import schema from './schema.graphql'
import User from '../models/user'

const typeDefs = [ schema ]

const resolvers = {
    Query: {
        users: async () => {
            try {
                return await User.find().exec()
            }catch(error) {
                throw new Error(error)
            }
        }
    },
    Mutation: {
        addUser: async (_, { input }, context) => {
            try {
                return await new User(input).save()
            } catch(error) {
                throw new Error(error)
            }
        }
    }
}
const executableSchema = makeExecutableSchema({
    typeDefs,
    resolvers
})

export default executableSchema