import Image from 'next/image';

const ViewBorrowBook = ({ book }) => {
    const { name, author, category, price, quantity } = book;

    return (
        <div className="flex bg-gray-800 px-3 py-3 ">
            <div className='flex-1 flex'><Image src="https://i.ibb.co/Tb8NFRf/book.jpg" alt="Book" width={350} height={240} priority={true} /></div>
            <div className="flex text-start h-60 pl-5 py-3">
                <div className="w-full flex flex-col">
                    <div className="flex-shrink-0">
                        <h1 className="text-3xl text-gray-300 font-bold mb-3">{name}</h1>
                        <p>Author: {author}</p>
                        <p className="mt-2">category: {category}</p>
                        <p className="font-light">Available: {quantity}</p>
                        <p className='pt-5 font-bold text-3xl'>${price}</p>
                    </div>
                    <div className="flex flex-grow justify-center ml-32 items-end">
                        <button className="bg-gray-600 py-2  px-3 rounded-sm hover:bg-gray-700 text-white">Read more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewBorrowBook;