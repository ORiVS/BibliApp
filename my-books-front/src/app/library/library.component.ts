import {Component, OnInit} from '@angular/core';
import {Book} from "../model/Book";
import {BookService} from "../service/book.service";

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  books: Book[];

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.retrieveAllBooks();
  }

  deleteBook(isbn:string): void{
    this.bookService.deleteBook(isbn).subscribe(res=>{
      this.books.forEach((book,index)=>{
        if(book.isbn === isbn) this.books.splice(index,1);
      })
    })
  }

  searchBook(query:string): void{
    this.bookService.searchBookByIsbn(query).subscribe(res=>{
        this.books = [...res];
      },
      error => {
        console.log(error);
      })
   }

   retrieveAllBooks():void{
       this.bookService.retrieveAllBooks().subscribe(res => {
           this.books = [...res];
         },
         error => {
           console.log(error);
         })
   }
}
