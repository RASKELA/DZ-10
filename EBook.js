// EBook.js

const Book = require("./Book");

class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this.fileFormat = fileFormat;
    }

    get fileFormat() {
        return this._fileFormat;
    }

    set fileFormat(value) {
        if (typeof value !== "string" || value.trim() === "") {
            throw new Error("File format must be a non-empty string.");
        }
        this._fileFormat = value;
    }

    printInfo() {
        console.log(
            `E-Book: "${this.title}" by ${this.author}, published in ${this.year}, file format: ${this.fileFormat}.`
        );
    }

    static fromBook(bookInstance, fileFormat) {
        if (!(bookInstance instanceof Book)) {
            throw new Error("Argument must be an instance of Book.");
        }
        return new EBook(bookInstance.title, bookInstance.author, bookInstance.year, fileFormat);
    }
}

module.exports = EBook;
