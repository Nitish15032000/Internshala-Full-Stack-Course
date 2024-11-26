class book  {
   constructor(title, author, year) {
      this.title = title;
      this.author = author;
      this.year = year;
   }

   getSummary(){
      console.log(`${this.title} by ${this.author}, published in ${this.year}`);
      
   }
};

const myBook = new book('The Jungle Book', 'Rudyard Kipling', 1894);
console.log(myBook.getSummary());