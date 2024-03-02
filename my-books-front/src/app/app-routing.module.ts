import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// @ts-ignore
import { BookUpdateComponent} from "./book-update/book-update.component";
// @ts-ignore
import { LibraryComponent} from "./library/library.component";

const routes: Routes = [
  { path: 'update/:id', component: BookUpdateComponent },
  { path: 'update', component: BookUpdateComponent },
  { path: '', component: LibraryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
