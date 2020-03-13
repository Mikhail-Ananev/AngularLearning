import { CourseInfo } from './../../models/interfaces';

const COURSES: CourseInfo[] = [
    {
        id: 1,
        title: 'Video course about foto',
        creationDate: new Date(2020, 2, 8),
        duration: 75,
        description: 'Sass imports have the same syntax as CSS imports, except that they'
            + ' allow multiple imports to be separated by commas rather than requiring each one to have its own @import.'
            + ' Also, in the indented syntax, imported URLs aren’t required to have quotes.',
    },
    {
        id: 2,
        title: 'Video course about horses',
        creationDate: new Date(1998, 2, 27),
        duration: 90,
        topRated: true,
        description: 'Sass imports have the same syntax as CSS imports, except that they'
            + ' allow multiple imports to be separated by commas rather than requiring each one to have its own @import.'
            + ' Also, in the indented syntax, imported URLs aren’t required to have quotes.',
    },
    {
        id: 3,
        title: 'Audio course for adults',
        creationDate: new Date(1999, 11, 12),
        duration: 50,
        description: 'Sass imports have the same syntax as CSS imports, except that they'
            + ' allow multiple imports to be separated by commas rather than requiring each one to have its own @import.'
            + ' Also, in the indented syntax, imported URLs aren’t required to have quotes.',
    },
    {
        id: 4,
        title: 'Video course about musik',
        creationDate: new Date(2020, 3, 12),
        duration: 140,
        description: 'Sass imports have the same syntax as CSS imports, except that they'
            + ' allow multiple imports to be separated by commas rather than requiring each one to have its own @import.'
            + ' Also, in the indented syntax, imported URLs aren’t required to have quotes.',
    }
];

export default COURSES;
