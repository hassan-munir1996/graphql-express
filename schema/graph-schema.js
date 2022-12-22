const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

const _ = require('lodash');

//dumy data
const books = [
    { id: '1', name:'OOP', genre: 'Computer' },
    { id: '2', name:'DS', genre: 'Computer' },
    { id: '3', name:'AL', genre: 'Computer' },
]

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLString } },
            resolve(later, args) {
                //here will be the code to get data from database or other sources
                return _.find(books, { id: args.id});
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})

