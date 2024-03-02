import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Book} from "../model/Book";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  @Input() book!: Book;
  @Output() newDeleteEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  delete():void{
    this.newDeleteEvent.emit(this.book.isbn);
  }

}
