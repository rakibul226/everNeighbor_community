"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ViewBorrowBook from '../components/ViewBorrowBook';

const MyBook = () => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:3005/user/viewBorrowedBook");
      setBorrowedBooks(response.data); 
    } catch (error) {
      console.error("Error fetching books:", error);
    }
    
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mx-20  py-10">
        {borrowedBooks.map((book) => ( 
          <ViewBorrowBook key={book.id}book={book} />
        ))}
      </div>
    </div>
  );
};

export default MyBook;
