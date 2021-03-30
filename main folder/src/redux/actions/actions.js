import {                       // IMPORT TYPE VARIABLES
    ADD_NEW_COURSE,
    ADD_ALL_COURSES
} from './../types/types';



export const addCourse = (newCourseObj) => {
    return { type: ADD_NEW_COURSE, payload: newCourseObj };
}

export const addAllCourses = (allCourses) => {
    return { type: ADD_ALL_COURSES, payload: allCourses };
}