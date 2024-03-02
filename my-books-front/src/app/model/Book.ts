export interface Book {
  isbn: string,
  title : string,
  author : string,
  overview : string,
  read_count : number,
  imageUrl: string,
}

export class Book {
  isbn: string;
  title : string;
  author : string;
  overview : string;
  read_count : number;
  imageURL: string;
}
