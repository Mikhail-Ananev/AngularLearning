import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup, ValidatorFn, AbstractControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { CourseInfo, AppState, Author } from '../../models/interfaces';
import { selectCurrentCourse } from '../../store/selectors/courses.selectors';
import {
  GetCourse,
  CreateCourse,
  ClearCurrentCourseState,
  ClearCoursesList,
  UpdateCourse
} from '../../store/actions/courses.action';

@Component({
  selector: 'app-add-edit-item',
  templateUrl: './add-edit-item.component.html',
  styleUrls: ['./add-edit-item.component.scss']
})
export class AddEditItemComponent implements OnInit {
  public addEditForm: FormGroup;
  public authors: Author[];

  private newCourse: boolean;
  private courseId: number;
  private subscriptions = new Subscription();
  private datePattern = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[012])\/\d{4}$/;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store$: Store<AppState>,
    private fb: FormBuilder,
  ) { }

  public ngOnInit(): void {
    this.authors = [];

    const courseId = this.activatedRoute.snapshot.paramMap.get('id');
    this.store$.dispatch(ClearCoursesList());

    if (courseId) {
      this.store$.dispatch(GetCourse({ courseId: +courseId }));
      this.newCourse = false;
    } else {
      this.newCourse = true;
    }

    this.subscriptions.add(this.store$.pipe(select(selectCurrentCourse))
      .subscribe((course) => {
        !this.addEditForm
          ? this.createForm(course)
          : this.updateForm(course);
    }));
  }

  public get titleControls() { return this.addEditForm.get('title'); }
  public get descriptionControls() { return this.addEditForm.get('description'); }
  public get creationDateControls() { return this.addEditForm.controls.date.get('creationDate'); }
  public get durationControls() { return this.addEditForm.controls.duration.get('time'); }
  public get authorsControls() { return this.addEditForm.controls.authors.get('author'); }
  public get formControls() { return this.addEditForm.controls; }

  public authorValidation(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const authorLength = this.authors.length;
      if (this.addEditForm && this.authorsControls.touched && authorLength === 0) {
        return  {required: {value: true}};
      }

      return authorLength === 0 ? {authorLength: {value: authorLength}} : null;
    };
  }

  public durationValidation(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      let value = 0;
      if (this.addEditForm) {
        value = this.addEditForm.controls.duration.get('time').value;
      }

      return value === 0 ? {durationTime: {value}} : null;
    };
  }

  public saveCourse() {
    const course: CourseInfo = {
      id: this.newCourse ? new Date().getMilliseconds() : this.courseId,
      title: this.titleControls.value,
      description: this.descriptionControls.value,
      creationDate: this.saveDateFormat(this.creationDateControls.value),
      duration: this.durationControls.value,
      authors: this.authors
    };

    this.newCourse
      ? this.store$.dispatch(CreateCourse({ course }))
      : this.store$.dispatch(UpdateCourse({ course }));
  }

  public cancelCreation() {
    if (!this.newCourse) {
      this.store$.dispatch(ClearCurrentCourseState());
    }

    this.router.navigate(['/Courses']);
  }

  public addAuthor(author: Author) {
    if (!this.authors.some(auth => auth.name === author.name)) {
      this.authors = [...this.authors, author];
    }
  }

  public deleteAuthor(author: Author) {
    this.authors = this.authors.filter(auth => auth.name !== author.name);
  }

  private createForm(course: CourseInfo) {
    this.addEditForm = this.fb.group({
      title: [course.title, [Validators.required, Validators.maxLength(50)]],
      description: [course.description, [Validators.required, Validators.maxLength(500)]],
      date: this.fb.group({
        creationDate: [this.createDateFormat(course.creationDate), [Validators.required, Validators.pattern(this.datePattern)]]
      }),
      duration: this.fb.group({
        time: [course.duration, [Validators.required, this.durationValidation()]]
      }),
      authors: this.fb.group({
        author: ['', this.authorValidation()]
      })
    });

    if (this.newCourse) {
      this.authors = [];
    }
  }

  private updateForm(course: CourseInfo) {
    this.addEditForm.patchValue({
      title: course.title,
      description: course.description,
      date: {
        creationDate: this.createDateFormat(course.creationDate)
      },
      duration: {
        time: course.duration
      }
    });

    this.courseId = course.id;
    this.authors = course.authors ? course.authors : [];
  }

  private createDateFormat(date: Date): string {
    const dateArr = date.toJSON().slice(0, 10).split('-');
    return `${dateArr[2]}/${dateArr[1]}/${dateArr[0]}`;
  }

  private saveDateFormat(date: string): Date {
    const dateArr = date.split('/');
    return new Date(+dateArr[2], +dateArr[1], +dateArr[0]);
  }
}
