import {Component, OnInit} from '@angular/core';
import {BookService} from "../service/book.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Book} from "../model/Book";

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {

  id: string;
  book: Book = new Book();
  isEditing: boolean = false;

  constructor(private bookService: BookService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.isEditing = true;
      this.bookService.retrieveBookByIsbn(this.id).subscribe(res => {
        this.book = res;
      })
    }
  }

  saveBook(): void {
    console.log(this.book);
    if (this.isEditing) {
      this.bookService.patchBookService(this.id, this.book).subscribe(
        res => {
          this.book = res;
          this.router.navigate(['/']);
        },
        error => {
          alert(JSON.stringify(error.error));
        }
      )
    } else {
      this.bookService.createBook(this.book).subscribe(
        res => {
          this.book = res;
          this.router.navigate(['/']);
        },
        error => {
          alert(JSON.stringify(error.error));
        }
      )
    }
  }
}
