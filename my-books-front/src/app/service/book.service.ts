import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from '../model/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private url = `${environment.apiUrl}/api/book`;


  constructor(private http: HttpClient) { }


  retrieveAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url);
    // .pipe(
    //   catchError(err => {console.log("Une erreur est survenue"); return null;)
    // );
  }

  retrieveBookByIsbn(isbn : string): Observable<Book> {
    return this.http.get<Book>(`${this.url}/${isbn}`);
  }

   searchBookByIsbn(query : string): Observable<Book[]> {
      return this.http.get<Book[]>(`${this.url}/search?query=${query}`);
    }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.url, book);
  }

  deleteBook(isbn: string): Observable<any> {
    return this.http.delete<any>(`${this.url}/${isbn}`);
  }


  patchBookService(isbn: string, book: Book): Observable<any> {
    return this.http.patch<any>(`${this.url}/${isbn}`, book);
  }

}

