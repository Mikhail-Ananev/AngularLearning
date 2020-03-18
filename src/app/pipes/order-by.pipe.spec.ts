import { OrderByPipe } from './order-by.pipe';
import { CourseInfo } from '../models/interfaces';

const MOCKCOURSES: CourseInfo[] = [
  {
      id: 2,
      title: 'Video course about horses',
      creationDate: new Date(1998, 2, 27),
      duration: 90,
      topRated: true,
      description: 'Empty.',
  },
  {
    id: 1,
    title: 'Video course about foto',
    creationDate: new Date(2020, 2, 8),
    duration: 75,
    description: 'Empty.',
  },
  {
      id: 3,
      title: 'Audio course for adults',
      creationDate: new Date(1999, 11, 12),
      duration: 50,
      description: 'Empty.',
  }
];

describe('OrderByPipe', () => {
  const pipe = new OrderByPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms order by creation date', () => {
    const newMockCourses = [MOCKCOURSES[1], MOCKCOURSES[2], MOCKCOURSES[0]];
    expect(pipe.transform([...MOCKCOURSES], '')).toEqual(newMockCourses);
  });

  it('transforms order by creation date with "video" filter', () => {
    const newMockCourses = [MOCKCOURSES[1], MOCKCOURSES[0]];
    expect(pipe.transform([...MOCKCOURSES], 'video')).toEqual(newMockCourses);
  });
});
