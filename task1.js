// task1.js

const Book = require("./Book");
const EBook = require("./EBook");

// Create instances of Book
const book1 = new Book("War and Peace", "Leo Tolstoy", 1869);
const book2 = new Book("1984", "George Orwell", 1949);

// Print book information
book1.printInfo();
book2.printInfo();

// Create an instance of EBook
const ebook1 = new EBook("Digital Fortress", "Dan Brown", 1998, "PDF");

// Print EBook information
ebook1.printInfo();

// Get and set properties
book1.title = "Anna Karenina";
book1.printInfo();

try {
    book1.year = -5; // This should throw an error
} catch (error) {
    console.error(error.message);
}

// Static method: get the oldest book
const books = [book1, book2, ebook1];
const oldestBook = Book.getOldestBook(books);
console.log("Oldest book:");
oldestBook.printInfo();

// Static method: convert Book to EBook
const convertedEBook = EBook.fromBook(book2, "EPUB");
convertedEBook.printInfo();
