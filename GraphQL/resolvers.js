//Methods and functions used for the use cases

const data = {
    authors: [
        { id: "1", name: "Sanskar Gupta", bookIds: ["101", "102"] },
        { id: "2", name: "Shaurya Gupta", bookIds: ["103"] },
    ],
    books: [
        { id: "101", title: "Book 1", publishedYear: 2000, authorId: "1" },
        { id: "102", title: "Book 2", publishedYear: 2002, authorId: "1" },
        { id: "103", title: "Book 3", publishedYear: 2003, authorId: "2" },
    ]
};

export const resolvers = {
    Book: {
        author: (parent, args, context, info) => {
            return data.authors.find(authorDetail => authorDetail.id === parent.authorId);
        },
    },
    Author: {
        books: (parent, args, context, info) => {
            return data.books.filter(book => parent.bookIds.includes(book.id));
        }
    },
    Query: {
        authors: () => {
            return data.authors
        },
        books: () => {
            return data.books
        }
    },
    Mutation: {
        addBook: (parent, args, context, info) => {
            console.log(args);
            const newBook = {...args, id: data.books.length + 1}
            data.books.push(newBook);
            return newBook;
        }
    }
}