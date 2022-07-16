import { useDispatch } from 'react-redux';
import React from 'react';
import { uploadBookThunk } from '../../redux/apiConnection';
import createBook from '../../redux/createBook';

const InputNewBook = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const { target } = e;
    const title = target.title.value;
    const author = target.author.value;
    dispatch(uploadBookThunk(createBook(title, author)));
    /* Cleaning the form */
    target.title.value = '';
    target.author.value = '';
  };

  return (
    <div className="add-new-book">
      <h2>Add New Book</h2>
      <form
        className="add-book"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="title"
          className="add-book__title"
          placeholder="Book Title"
        />
        <input
          type="text"
          name="author"
          className="add-book__title"
          placeholder="Author"
        />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default InputNewBook;
