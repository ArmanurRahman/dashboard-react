import SearchForm from "../SearchForm/SearchForm";
import ProfileImg from "../../assets/img/mubeen.jpeg";
import React, { useState } from "react";

const Tools = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    return (
        <div className='flex lg:space-x-10'>
            <div className=' hidden lg:w-1/2 lg:block'>
                <SearchForm />
            </div>
            <div className=' w-full lg:w-1/2'>
                <div className='flex justify-between'>
                    <div className='lg:hidden'>
                        <a
                            href='/#'
                            className='w-14 h-14 flex items-center justify-center text-blue-800 rounded-xl'
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-8 w-8'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
                                />
                            </svg>
                        </a>
                    </div>
                    <div className='h-10 hidden lg:flex items-center space-x-6 font-semibold '>
                        <a href='/#' className='hover:text-blue-800'>
                            Feedback
                        </a>
                        <a href='/#' className='hover:text-blue-800'>
                            Contact
                        </a>
                        <a href='/#' className='hover:text-blue-800'>
                            Help
                        </a>
                    </div>
                    <div className='flex justify-between space-x-1'>
                        <a
                            href='/#'
                            className='flex items-center justify-center w-10 h-10 hover:text-gray-700 relative'
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-6 w-6'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                                />
                            </svg>
                            <div className='w-2 h-2 bg-red-500 rounded-full absolute top-2 right-2 border border-white '></div>
                        </a>
                        <div className='lg:relative'>
                            <button
                                className='w-10 h-10 rounded-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2 focus:ring-offset-white'
                                onClick={() =>
                                    setIsProfileOpen((prevState) => !prevState)
                                }
                            >
                                <img
                                    src={ProfileImg}
                                    className='w-10 h-10 object-cover'
                                    alt=''
                                />
                            </button>

                            {isProfileOpen && (
                                <React.Fragment>
                                    <button
                                        className='fixed inset-0 w-full h-full z-30 cursor-default'
                                        onClick={() => setIsProfileOpen(false)}
                                    ></button>
                                    <div className='absolute z-40 right-0 mt-2 bg-white w-full lg:w-48 '>
                                        <div className='mx-4 lg:mx-0 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5'>
                                            <div className='lg:hidden px-3'>
                                                <SearchForm />
                                            </div>
                                            <div className='lg:hidden border-b'>
                                                <a
                                                    href='/#'
                                                    className='block px-4 py-2 text-gray-700 hover:bg-gray-100'
                                                >
                                                    Feedback
                                                </a>
                                                <a
                                                    href='/#'
                                                    className='block px-4 py-2 text-gray-700 hover:bg-gray-100'
                                                >
                                                    Contracts
                                                </a>
                                                <a
                                                    href='/#'
                                                    className='block px-4 py-2 text-gray-700 hover:bg-gray-100'
                                                >
                                                    Help
                                                </a>
                                            </div>

                                            <a
                                                href='/#'
                                                className='block px-4 py-2 text-gray-700 hover:bg-gray-100'
                                            >
                                                profile
                                            </a>
                                            <a
                                                href='/#'
                                                className='block px-4 py-2 text-gray-700 hover:bg-gray-100'
                                            >
                                                Settings
                                            </a>
                                            <a
                                                href='/#'
                                                className='block px-4 py-2 text-gray-700 hover:bg-gray-100'
                                            >
                                                Logout
                                            </a>
                                        </div>
                                    </div>
                                </React.Fragment>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tools;
