import { makeExecutableSchema, addMockFunctionsToSchema, MockList } from 'graphql-tools'
import casual from 'casual'
import mongoose from 'mongoose'
import schema from './schema.graphql'
import User from '../models/user'

const typeDefs = [ schema ]

const mocks = {
    Query: () => ({
        users: () => new MockList(50)
    }),
    User: () => ({
        id: mongoose.Types.ObjectId(),
        name: casual.name,
        email: casual.email,
        password: casual.password
    })
}
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

if(process.env.MOCK_GRAPHQL) addMockFunctionsToSchema({ schema: executableSchema, mocks })

export default executableSchema