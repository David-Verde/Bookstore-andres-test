import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const postApiData = axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/');

export const currentApiKey = 'gwE0Bhw9RcasmYxC9anP';

export const uploadBookThunk = createAsyncThunk(
  'uploadBook',
  async (book) => {
    const res = await axios.post(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${currentApiKey}/books`, {
      item_id: book.item_id,
      title: book.title,
      author: book.author,
      category: book.category,
    });
    return res.json();
  },
);

export const getBookDataThunk = createAsyncThunk(
  'books/getBookData',
  async () => {
    const res = await axios.get(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${currentApiKey}/books`)
      .then((response) => {
        console.log(response.data);
      });
    console.log(res.json());
    return res.json();
  },
);

const createBookList = (book) => {
  const bookList = [];
  book.forEach((item) => {
    bookList.push(item);
  });
  return bookList;
};

export const getBooks = createAsyncThunk(
  'books/getBooks',
  async () => {
    const response = await axios.get(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${currentApiKey}/books`)
      .then((response) => response.data);
    return createBookList(response);
  },
);
