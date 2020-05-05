import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Author } from 'src/app/models/interfaces';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent {
  @Input() public author: Author;

  @Output() public deleteAuthorEvent = new EventEmitter<Author>();

  constructor() { }

  public deleteAuthor(author: Author) {
    this.deleteAuthorEvent.emit(author);
  }
}
