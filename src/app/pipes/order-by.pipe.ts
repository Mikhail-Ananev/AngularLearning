import { Pipe, PipeTransform } from '@angular/core';
import { CourseInfo } from '../models/interfaces';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(courses: Array<CourseInfo>, searchString: string): Array<CourseInfo> {
    const sortByCreationDate = (inputArr: Array<CourseInfo>) => {
      return inputArr.sort((a, b) => {
        return b.creationDate.getTime() - a.creationDate.getTime();
      });
    }
    
    if (searchString) {
      const sortCourses = courses.filter((course) => {
        return ~course.title.toUpperCase().indexOf(searchString.toUpperCase());
      });

      return sortByCreationDate(sortCourses);
    }

    return sortByCreationDate(courses);
  }


}
