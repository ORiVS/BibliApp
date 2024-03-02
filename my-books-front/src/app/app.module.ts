import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from  '@angular/common/http';
// @ts-ignore
import { LibraryComponent } from './library/library.component';
// @ts-ignore
import { SearchbarComponent } from './searchbar/searchbar.component';
// @ts-ignore
import { BookDetailComponent } from './book-detail/book-detail.component';
// @ts-ignore
import { BookUpdateComponent } from './book-update/book-update.component';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    LibraryComponent,
    SearchbarComponent,
    BookDetailComponent,
    BookUpdateComponent
  ],
  imports: [
    BrowserModule, FormsModule, BrowserAnimationsModule,HttpClientModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
