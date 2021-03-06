import { Pipe, PipeTransform } from '@angular/core';

import { CourseInfo } from '../models/interfaces';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(courses: Array<CourseInfo>, searchString: string): Array<CourseInfo> {
    const sortByCreationDate = (inputArr: Array<CourseInfo>) => {
      if (inputArr !== null) {
        return inputArr.slice().sort((a, b) => {
          return b.creationDate.getTime() - a.creationDate.getTime();
        });
      }
    };

    if (searchString) {
      const sortCourses = courses.filter((course) => {
        // tslint:disable-next-line: no-bitwise
        return ~course.title.toUpperCase().indexOf(searchString.toUpperCase());
      });

      return sortByCreationDate(sortCourses);
    }

    return sortByCreationDate(courses);
  }
}
