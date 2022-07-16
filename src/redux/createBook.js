import { nanoid } from '@reduxjs/toolkit';

const createBook = (title, author) => ({
  item_id: nanoid(),
  title,
  author,
  category: 'Undetermined',
  chapter: `Chapter ${Math.floor(Math.random() * 10)}`,
  percentage: Math.floor(Math.random() * 100),
});

export default createBook;
