class book{
title;
author;

constructor(title,author){
    this.title  = title; 
    this.author = author
}
printdetails(){
    console.log(`"${this.title}"is writren by${this.author}.`);

 }
}
const book1 = new book("atomic habits","jemes clear");
book1.printdetails();
