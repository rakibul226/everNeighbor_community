import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 px-12">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <Link href={"/home"} className='text-2xl'>everNeighbor</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-3 text-xl">
      {/* <li><a>Item 1</a></li> */}
      <Link href={"/products"}><li>Product</li></Link>
      <Link href={"/allbooks"}><li>Books</li></Link>
      <Link href={"/mybooks"}><li>myBooks</li></Link>
    </ul>
  </div>
  <div className="navbar-end">
    <Link href={"/login"}><button className="btn btn-neutral">Login</button></Link>
  </div>
</div>
        </div>
    );
};

export default Navbar;