import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";

export function createCourse(course) {
  return { type: types.CREATE_COURSE, course };
}

function loadCourseSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCESS, courses };
}

export function loadCourses() {
  return function(dispach) {
    return courseApi
      .getCourses()
      .then(courses => {
        dispach(loadCourseSuccess(courses));
      })
      .catch(error => {
        throw error;
      });
  };
}
