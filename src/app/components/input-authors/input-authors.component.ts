import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { distinctUntilChanged, debounceTime, filter } from 'rxjs/operators';

import { AuthorService } from '../../services/author.service';
import { Author } from '../../models/interfaces';

@Component({
  selector: 'app-input-authors',
  templateUrl: './input-authors.component.html',
  styleUrls: ['./input-authors.component.scss']
})
export class InputAuthorsComponent implements OnInit {
  @Input() public authorsForm: FormGroup;
  @Input() public authorsList: string[];

  @Output() public addAuthorEvent = new EventEmitter<Author>();
  @Output() public deleteAuthorEvent = new EventEmitter<Author>();

  public authors: Author[];

  constructor(
    private authorService: AuthorService
  ) { }

  public ngOnInit(): void {
    this.authorsForm.get('author').valueChanges.pipe(
      filter(value => value.length > 0),
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(data => this.authorService.getAuthors(data)
        // tslint:disable-next-line: no-shadowed-variable
        .subscribe(data => this.authors = data));
  }

  public addAuthor(author: Author) {
    this.addAuthorEvent.emit(author);
    this.authors = [];
    this.authorsForm.get('author').setValue('');
  }

  public deleteAuthor(author: Author) {
    this.deleteAuthorEvent.emit(author);
  }
}
