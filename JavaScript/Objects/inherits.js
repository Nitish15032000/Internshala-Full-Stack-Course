class Book {
   constructor(title, author, year){
       this.title = title;
       this.author = author;
       this.year = year;
       
   }
   
   getSummary(){
       return `${this.title} by ${this.author}, published in ${this.year}.`
   }
}

class Magazine extends Book {
   constructor(title, author, year, month){
       super(title, author, year);
       this.month = month;
   }
   // Write your code here
   getSummary(){
       return `${this.title} by ${this.author}, published in ${this.month} ${this.year}.`
   }
}

// Example usage:
const myBook = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
console.log(myBook.getSummary());

const myMagazine = new Magazine('National Geographic', 'Various Authors', 2021, 'June');
console.log(myMagazine.getSummary());