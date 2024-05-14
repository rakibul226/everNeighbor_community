
import Image from 'next/image';
import React from 'react';
import axios from 'axios';
import Link from 'next/link';

const Allproducts = ({ allbook }) => {
    const { id, name, author, category, quantity, price } = allbook;

    const borrowBook = async () => {
        const formData = {
            name: name,
        };

        try {
            const response = await axios.post('http://localhost:3005/user/borrow-book', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.data && response.data.success) {
                alert('Book borrowed successfully');
            } else {
                alert('Failed to borrow book');
            }
        } catch (error) {
            console.error('Error:', error.message);
            alert('Failed to borrow book');
        }
    }

    return (
        <div className="flex bg-gray-800 px-3 py-3">
            <div className='flex-1 flex justify-center'>
                <Image src="https://i.ibb.co/Tb8NFRf/book.jpg" alt="Book" width={350} height={240} />
            </div>
            <div className="flex text-start h-60 pl-5 py-3">
                <div className="w-full flex flex-col">
                    <div className="flex-shrink-0">
                        <h1 className="text-3xl text-gray-300 font-bold mb-3">{name}</h1>
                        <p>Author: {author}</p>
                        <p className="mt-2">Category: {category}</p>
                        <p className="font-light">Available: {quantity}</p>
                        <p className='pt-5 font-bold text-3xl'>${price}</p>
                    </div>
                    <div className="flex flex-grow justify-center ml-32 items-end">
                      {/* <Link href={`/${name}`}> */}
                      <button onClick={borrowBook} className="bg-gray-600 py-2 px-3 rounded-sm hover:bg-gray-700 text-white">Borrow</button>
                      {/* </Link> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Allproducts;