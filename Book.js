// Book.js

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        if (typeof value !== "string" || value.trim() === "") {
            throw new Error("Title must be a non-empty string.");
        }
        this._title = value;
    }

    get author() {
        return this._author;
    }

    set author(value) {
        if (typeof value !== "string" || value.trim() === "") {
            throw new Error("Author must be a non-empty string.");
        }
        this._author = value;
    }

    get year() {
        return this._year;
    }

    set year(value) {
        if (typeof value !== "number" || value < 0) {
            throw new Error("Year must be a positive number.");
        }
        this._year = value;
    }

    printInfo() {
        console.log(`Book: "${this.title}" by ${this.author}, published in ${this.year}.`);
    }

    static getOldestBook(books) {
        return books.reduce((oldest, book) => (book.year < oldest.year ? book : oldest));
    }
}

module.exports = Book;
