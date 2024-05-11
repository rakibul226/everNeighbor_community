// import Image from 'next/image';
// import React from 'react';
// import axios from 'axios';
// import Link from 'next/link';

// const ViewAllBooks = ({ allbook }) => {
//     const { id, name, author, category, quantity, price } = allbook;

//     const borrowBook = async () => {
//         const formData = {
//             name: name,
//         };

//         try {
//             const response = await axios.post('http://localhost:3005/user/borrow-book', formData, {
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             });

//             if (response.data && response.data.success) {
//                 alert('Book borrowed successfully');
//             } else {
//                 alert('Failed to borrow book');
//             }
//         } catch (error) {
//             console.error('Error:', error.message);
//             alert('Failed to borrow book');
//         }
//     }

//     return (
//         <div className="flex bg-gray-800 px-3 py-3">
//             <div className='flex-1 flex justify-center'>
//                 <Image src="https://i.ibb.co/Tb8NFRf/book.jpg" alt="Book" width={350} height={240} />
//             </div>
//             <div className="flex text-start h-60 pl-5 py-3">
//                 <div className="w-full flex flex-col">
//                     <div className="flex-shrink-0">
//                         <h1 className="text-3xl text-gray-300 font-bold mb-3">{name}</h1>
//                         <p>Author: {author}</p>
//                         <p className="mt-2">Category: {category}</p>
//                         <p className="font-light">Available: {quantity}</p>
//                         <p className='pt-5 font-bold text-3xl'>${price}</p>
//                     </div>
//                     <div className="flex flex-grow justify-center ml-32 items-end">
//                       {/* <Link href={`/${name}`}> */}
//                       <button onClick={borrowBook} className="bg-gray-600 py-2 px-3 rounded-sm hover:bg-gray-700 text-white">Borrow</button>
//                       {/* </Link> */}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ViewAllBooks;






























// import Image from 'next/image';
// import React from 'react';
// import axios from 'axios';


// const ViewAllBooks = ({allbook}) => {

//     const {id,name,author,category,quantity,price} = allbook;

//     const borrowBook = async (e)=>{

//         const formData = {
//             bookName: name,
            
//           };

//         //   console.log(bookName);

//         try {
//             const response = await axios.post('http://localhost:3005/user/borrow-book', formData, {
//               headers: {
//                 'Content-Type': 'application/json'
//               }
//             });
        
//             console.log('Response:', response); // Log the response
        
//             if (response.data && response.data.success) {
//               alert('Book borrowed');
//               // Redirect to dashboard or another page
//             } 
//             else{
//                 // alert("Failed")
//             }
//             // alert('success')
//           } catch (error) {
//             // console.error('Error:', error.response ? error.response.data : error.message); // Log the error
//             alert("ok")
//             // setErrorMessage('borroing faild');
//           }

//     }

//     return (
//         <div  className="flex bg-gray-800 px-3 py-3 ">
//             <div className=' flex-1 flex '><Image src="https://i.ibb.co/Tb8NFRf/book.jpg" alt="Book" width={350} height={240}/></div>
//             <div className="flex text-start h-60 pl-5 py-3">
//                 <div className="w-full flex flex-col">
//                     <div className="flex-shrink-0">
//                         <h1 className="text-3xl text-gray-300 font-bold mb-3">{name}</h1>
//                         <p>Author: {author}</p>
//                         <p className="mt-2">category: {category}</p>
//                         <p className="font-light">Available: {quantity}</p>
//                         <p className='pt-5 font-bold text-3xl'>${price}</p>
//                     </div>
//                     <div className="flex flex-grow justify-center ml-32 items-end">
//                         {/* <Link href={`/${name}`}> */}
//                         <button onClick={borrowBook} className="bg-gray-600 py-2  px-3 rounded-sm hover:bg-gray-700 text-white">Purchase</button>
//                         {/* </Link> */}
//                     </div>
//                 </div>
//             </div>
//         </div> 
//     );
// };

// export default ViewAllBooks;











import Image from 'next/image';
import axios from 'axios';
import Swal from "sweetalert2";

const ViewAllBooks = ({ allbook }) => {
    const { id, name, author, category, quantity, price } = allbook;

    const borrowBook = async () => {
        const formData = {
            bookName: name,
        };
    
        Swal.fire({
            title: "Are you sure want to borrow this book?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Yes, borrow it",
            denyButtonText: "No, cancel",
            icon: "question"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await axios.post('http://localhost:3005/user/borrow-book', formData, {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
                    if (response.data === "already borrowed") {
                        Swal.fire("Book Already Borrowed", "", "warning");
                    } else if (response.data === "successfully borrowed") {
                        Swal.fire("Book Borrowed Successfully", "", "success");
                    } else {
                        Swal.fire("Failed to Borrow Book", "", "error");
                    }
                } catch (error) {
                    Swal.fire("Failed to Borrow Book", "", "error");
                }
            } else if (result.isDenied) {
                Swal.fire("Borrowing Canceled", "", "info");
            }
        });
    }
    


        // try {
        //     const response = await axios.post('http://localhost:3005/user/borrow-book', formData, {
        //         headers: {
        //             'Content-Type': 'application/json'
        //         }
        //     });
        //     if (response.data === "already borrowed") {
        //         alert('Already borrowed');
        //     }
        //     else if(response.data === "successfully borrowed"){
        //         // alert("Borrowed");
                
        //     }
        //     else{
        //         alert("failed")
        //     }
        // } catch (error) {
        //     alert("failed")
        // }
    

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
                        <button onClick={borrowBook} className="bg-gray-600 py-2  px-3 rounded-sm hover:bg-gray-700 text-white">Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewAllBooks;



// import Image from 'next/image';
// import axios from 'axios';
// import Swal from "sweetalert2";

// const ViewAllBooks = ({ allbook }) => {
//     const { id, name, author, category, quantity, price } = allbook;

//     const borrowBook = async () => {
//         const formData = {
//             bookName: name,
//         };


//         Swal.fire({
//             title: "Are you sure want to borrow this book",
//             showDenyButton: true,
//             showCancelButton: true,
//             confirmButtonText: "Save",
//             denyButtonText: `Don't save`
//           }).then((result) => {
//             /* Read more about isConfirmed, isDenied below */
//             if (result.isConfirmed) {
//                 try {
//                     const response = await axios.post('http://localhost:3005/user/borrow-book', formData, {
//                         headers: {
//                             'Content-Type': 'application/json'
//                         }
//                     });
//                     if (response.data === "already borrowed") {
//                         alert('Already borrowed');
//                     }
//                     else if(response.data === "successfully borrowed"){
//                         // alert("Borrowed");
                        
//                     }
//                     else{
//                         alert("failed")
//                     }
//                 } catch (error) {
//                     alert("failed")
//                 }
//               Swal.fire("Saved!", "", "success");
//             } else if (result.isDenied) {
//               Swal.fire("Changes are not saved", "", "info");
//             }
//           });


//         // try {
//         //     const response = await axios.post('http://localhost:3005/user/borrow-book', formData, {
//         //         headers: {
//         //             'Content-Type': 'application/json'
//         //         }
//         //     });
//         //     if (response.data === "already borrowed") {
//         //         alert('Already borrowed');
//         //     }
//         //     else if(response.data === "successfully borrowed"){
//         //         // alert("Borrowed");
                
//         //     }
//         //     else{
//         //         alert("failed")
//         //     }
//         // } catch (error) {
//         //     alert("failed")
//         // }
//     }

//     return (
//         <div className="flex bg-gray-800 px-3 py-3 ">
//             <div className='flex-1 flex'><Image src="https://i.ibb.co/Tb8NFRf/book.jpg" alt="Book" width={350} height={240} priority={true} /></div>
//             <div className="flex text-start h-60 pl-5 py-3">
//                 <div className="w-full flex flex-col">
//                     <div className="flex-shrink-0">
//                         <h1 className="text-3xl text-gray-300 font-bold mb-3">{name}</h1>
//                         <p>Author: {author}</p>
//                         <p className="mt-2">category: {category}</p>
//                         <p className="font-light">Available: {quantity}</p>
//                         <p className='pt-5 font-bold text-3xl'>${price}</p>
//                     </div>
//                     <div className="flex flex-grow justify-center ml-32 items-end">
//                         <button onClick={borrowBook} className="bg-gray-600 py-2  px-3 rounded-sm hover:bg-gray-700 text-white">Purchase</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ViewAllBooks;
