import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  @Output() newSearchEvent = new EventEmitter<string>();
  @Output() cancelEvent = new EventEmitter<string>();
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }

  sendQuery(query: string){
    this.newSearchEvent.emit(query);
  }
  cancel():void{
    this.cancelEvent.emit();
  }
}
