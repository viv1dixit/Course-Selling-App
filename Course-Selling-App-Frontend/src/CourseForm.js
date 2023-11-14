// CourseForm.js
import React, { useState } from 'react';

const CourseForm = ({ onCreate }) => {
  const [newCourse, setNewCourse] = useState({
    title: '',
    description: '',
    price: 0,
    imageLink: '',
    published: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCourse({ ...newCourse, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(newCourse);
    setNewCourse({
      title: '',
      description: '',
      price: 0,
      imageLink: '',
      published: false,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create New Course</h3>
      <label>
        Title:
        <input type="text" name="title" value={newCourse.title} onChange={handleChange} />
      </label>
      <br />
      <label>
        Description:
        <textarea name="description" value={newCourse.description} onChange={handleChange} />
      </label>
      <br />
      <label>
        Price:
        <input type="number" name="price" value={newCourse.price} onChange={handleChange} />
      </label>
      <br />
      <label>
        Image Link:
        <input type="text" name="imageLink" value={newCourse.imageLink} onChange={handleChange} />
      </label>
      <br />
      <label>
        Published:
        <input
          type="checkbox"
          name="published"
          checked={newCourse.published}
          onChange={() => setNewCourse({ ...newCourse, published: !newCourse.published })}
        />
      </label>
      <br />
      <button type="submit">Create Course</button>
    </form>
  );
};

export default CourseForm;
