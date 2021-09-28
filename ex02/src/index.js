class Book {
    constructor (title) {
        this.Book = title;
    }

    get title() {
        return this.Book;
    }

    set title(newTitle) {
        this.Book = newTitle;
    }
}

const littlePrince = new Book("The Little Prince");
console.log(littlePrince.title);
littlePrince.title = "Le Petit Prince";
console.log(littlePrince.title);

module.exports = Book;