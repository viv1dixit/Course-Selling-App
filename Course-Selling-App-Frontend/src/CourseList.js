// CourseList.js
import React from 'react';

const CourseList = ({ courses }) => {
  return (
    <div>
      <h3>Existing Courses</h3>
      <ul>
        {courses.map((course) => (
          <li key={course._id}>
            <strong>{course.title}</strong>
            <p>{course.description}</p>
            <p>${course.price}</p>
            <img src={course.imageLink} alt={course.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
