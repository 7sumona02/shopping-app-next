import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
      <div className="navbar bg-white">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-black">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7" />
                </svg>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li className='text-black'><a>Home</a></li>
                <li className='text-black'><a>Catalog</a></li>
                <li className='text-black'><a>About us</a></li>
                <li className='text-black'><a>Contact us</a></li>
                <li className='text-black'><a>Connect us</a></li>
            </ul>
            </div>
        </div>
        <div className="navbar-center">
            <Link href='/'><img src='/Logo.svg' alt='Logo' className="btn btn-link w-40 text-black" /></Link>
        </div>
        <div className="navbar-end">
            <button className="btn btn-ghost btn-circle text-black">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </button>
            <button className="btn btn-ghost btn-circle text-black">
            <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-bag"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            </div>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Header
