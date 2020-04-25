import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { CourseInfo, AppState } from '../../models/interfaces';
import { CoursesService } from '../../services/courses.service';
import { LoadingService } from '../../services/loading.service';
import { selectCurrentCourse } from '../../store/selectors/courses.selectors';
import {
  GetCourse,
  CreateCourse,
  ClearCurrentCourseState,
  ClearCoursesList,
  UpdateCourse
} from 'src/app/store/actions/courses.action';

@Component({
  selector: 'app-add-edit-item',
  templateUrl: './add-edit-item.component.html',
  styleUrls: ['./add-edit-item.component.scss']
})
export class AddEditItemComponent implements OnInit {
  public course: CourseInfo;
  public creationDate: string;
  public duration = 0;

  private newCourse: boolean;
  private subscriptions = new Subscription();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private coursesService: CoursesService,
    private loadingService: LoadingService,
    private store$: Store<AppState>,
  ) { }

  ngOnInit(): void {
    const courseId = this.activatedRoute.snapshot.paramMap.get('id');
    this.store$.dispatch(ClearCoursesList());

    this.subscriptions.add(this.store$.pipe(select(selectCurrentCourse))
      .subscribe((course) => {
        this.course = { ...course };
        this.formInputDate(course.creationDate);
      }));

    if (courseId) {
      this.store$.dispatch(GetCourse({ courseId: +courseId }));
      this.newCourse = false;
    } else {
      this.course.id = this.coursesService.generateNewCourseId();
      this.formInputDate(this.course.creationDate);
      this.newCourse = true;
    }
  }

  public saveCourse() {
    this.loadingService.startLoading();
    this.course.creationDate = new Date(this.creationDate);

    this.newCourse
      ? this.store$.dispatch(CreateCourse({ course: this.course}))
      : this.store$.dispatch(UpdateCourse({ course: this.course}));
  }

  public cancelCreation() {
    if (!this.newCourse) {
      this.store$.dispatch(ClearCurrentCourseState());
    }

    this.router.navigate(['/Courses']);
  }

  private formInputDate(date: Date): void {
    this.creationDate = date.toJSON().slice(0, 10);
  }
}
