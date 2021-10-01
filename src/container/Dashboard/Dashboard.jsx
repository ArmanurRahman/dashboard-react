import { useState } from "react";
import Blog from "../../component/Blog/Blog";
import Candlesticks from "../../component/Candlesticks/CandleSticks";
import Cards from "../../component/Cards/Cards";
import MainNavigation from "../../component/MainNavigation/MainNavigation";
import Percentage from "../../component/Percentage/Percentage";
import Tools from "../../component/Tools/Tools";
import Transactions from "../../component/Transactions/Transactions";

const Dashboard = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    return (
        <div className='flex'>
            <div className='fixed lg:static bottom-0 w-full lg:w-24 lg:h-full z-10'>
                <div className=' relative lg:fixed w-full lg:w-24 h-full bg-blue-800'>
                    <a
                        href='/#'
                        className='hidden absolute top-10 left-1/2 transform -translate-x-1/2 w-14 h-14 lg:flex lg:items-center lg:justify-center text-white rounded-xl hover:bg-white hover:bg-opacity-60'
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
                    <MainNavigation />
                </div>
            </div>

            <div className='w-full p-4 lg:p-10'>
                <Tools />

                <div className='mt-4 lg:hidden p-2'>
                    <button
                        className='flex w-32 h-10 bg-white rounded-lg mx-auto shadow-lg relative focus:outline-none'
                        onClick={() =>
                            setShowSidebar((prevState) => !prevState)
                        }
                    >
                        <div
                            className={`w-16 h-full bg-blue-400 absolute top-0 rounded-lg transform duration-300 ${
                                showSidebar ? "translate-x-full" : ""
                            }`}
                        ></div>
                        <div
                            className={`flex justify-center items-center w-16 h-full transform duration-300 ${
                                showSidebar ? "text-gray-400" : "text-white"
                            }`}
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-5 w-5'
                                viewBox='0 0 20 20'
                                fill='currentColor'
                            >
                                <path d='M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z' />
                            </svg>
                        </div>
                        <div
                            className={`flex justify-center items-center w-16 h-full transform duration-300 ${
                                !showSidebar ? "text-gray-400" : "text-white"
                            }`}
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-5 w-5'
                                viewBox='0 0 20 20'
                                fill='currentColor'
                            >
                                <path d='M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z' />
                                <path d='M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z' />
                            </svg>
                        </div>
                    </button>
                </div>

                <div className='overflow-hidden lg:overflow-visible pb-14 lg:pb-0'>
                    <div
                        className={`transform lg:transform-none transition-all duration-300 ${
                            showSidebar && "-translate-x-full"
                        } `}
                    >
                        <div className='flex lg:space-x-10 mt-4 lg:mt-10'>
                            <div className=' w-full lg:w-3/4 flex-shrink-0 lg:flex-shrink  rounded-xl'>
                                <div className='flex space-x-4 lg:space-x-10'>
                                    <div className=' flex flex-col lg:flex-row items-center w-1/3 bg-white shadow-lg border border-gray-100 rounded-xl px-2 py-5 lg:p-5 space-x-0 lg:space-x-5'>
                                        <div className='bg-indigo-50 p-2 rounded-lg text-blue-800 w-full lg:w-auto'>
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                className='w-8 mx-auto'
                                                fill='none'
                                                viewBox='0 0 24 24'
                                                stroke='currentColor'
                                            >
                                                <path
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                    strokeWidth={2}
                                                    d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <span className='block uppercase text-xs text-gray-400 tracking-wider font-semibold'>
                                                Visitors
                                            </span>
                                            <span className=' text-xl lg:text-2xl font-semibold'>
                                                16025
                                            </span>
                                        </div>
                                    </div>
                                    <div className=' flex flex-col lg:flex-row items-center w-1/3 bg-white shadow-lg border border-gray-100 rounded-xl px-2 py-5 lg:p-5 space-x-0 lg:space-x-5'>
                                        <div className='bg-indigo-50 p-2 rounded-lg text-blue-800  w-full lg:w-auto'>
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                className='w-8 mx-auto'
                                                fill='none'
                                                viewBox='0 0 24 24'
                                                stroke='currentColor'
                                            >
                                                <path
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                    strokeWidth={2}
                                                    d='M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z'
                                                />
                                                <path
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                    strokeWidth={2}
                                                    d='M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z'
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <span className='block uppercase text-xs text-gray-400 tracking-wider font-semibold'>
                                                Customers
                                            </span>
                                            <span className=' text-xl lg:text-2xl font-semibold'>
                                                16025
                                            </span>
                                        </div>
                                    </div>
                                    <div className=' flex flex-col lg:flex-row items-center w-1/3 bg-red-500 shadow-lg border border-red-500 rounded-xl px-2 py-5 lg:p-5  space-x-0 lg:space-x-5'>
                                        <div className=' bg-red-700 p-2 rounded-lg text-white  w-full lg:w-auto'>
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                className='w-8 mx-auto'
                                                fill='none'
                                                viewBox='0 0 24 24'
                                                stroke='currentColor'
                                            >
                                                <path
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                    strokeWidth={2}
                                                    d='M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z'
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <span className='block uppercase text-xs text-red-200 tracking-wider font-semibold'>
                                                Orders
                                            </span>
                                            <span className=' text-xl lg:text-2xl font-semibold text-white'>
                                                1250
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <Candlesticks />
                                <Blog />
                            </div>

                            <div className=' w-full lg:w-1/4 flex-shrink-0 lg:flex-shrink rounded-xl'>
                                <div className='bg-indigo-50 rounded-xl p-5 space-y-10 flex flex-col'>
                                    <Percentage />
                                    <Cards />
                                    <Transactions />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
