"use client"
import axios from 'axios';
import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Allproducts from '../components/Allproducts';

export default function Registration() {
  const [books, setBooks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [searchClicked, setSearchClicked] = useState(false);

  const fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:3005/user/view-all-product");
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleSearch = () => {
    setSearchClicked(true);
    const filteredBooks = books.filter(book =>
      book.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setSearchedBooks(filteredBooks);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const generateResponsiveSettings = (breakpoints) =>
    breakpoints.map(({ breakpoint, slidesToShow }) => ({
      breakpoint,
      settings: {
        slidesToShow:1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    }));
  
    const games = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: generateResponsiveSettings([
        { breakpoint: 425, slidesToShow: 1 },
        { breakpoint: 768, slidesToShow: 2 },
        { breakpoint: 1024, slidesToShow: 3 },
        { breakpoint: 1440, slidesToShow: 4 },
      ]),
    };

  return (
    <div className="mx-24">
      <div className="flex justify-end py-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search book"
            className="input input-ghost w-full max-w-xs border border-gray-500 pr-10"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button
            className="absolute right-0 top-0 h-full flex items-center justify-center p-3 border border-gray-500 rounded-r-md bg-gray-500 hover:bg-gray-600"
            onClick={handleSearch}
          >
            <FaSearch />
          </button>
        </div>
      </div>

      <div className="mx-16 max-w-8xl sm:px-6 lg:px-8 pt-7 text-center ">
        {(searchClicked && inputValue.trim() !== '' && searchedBooks.length === 0) ? (
          <div>Book not found</div>
        ) : (
            <Slider {...games}>
            {(searchedBooks.length > 0 ? searchedBooks : books).map((book) => (
              <Allproducts key={book.product_id} allbook={book} />
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
}
