//Methods and functions used for the use cases

export const resolvers = {
    Query: {
        authors: () => {
            return [{
                id: 1,
                name: 'Sanskar Gupta'
            }]
        },
        books: () => {
            return [{
                id: 1,
                title: "Hello Sanskar Gupta",
                publishedYear: 2025
            }]
        }
    }
}