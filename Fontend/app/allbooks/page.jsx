"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ViewAllBooks from '../components/ViewAllBooks';

export default function Registration() {

  const [books, setBook] = useState([]);

  const fetchBooks = async () => {
    try {
      let response = await axios.get("http://localhost:3005/user/view-all-books");
      setBook(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mx-24 my-10">
        {
          books.map((allbook) => (
            <ViewAllBooks allbook={allbook} key={allbook.id}></ViewAllBooks>
          ))
        }
      </div>
    </div>
  );
} 
