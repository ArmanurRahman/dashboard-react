import { useState } from "react";
import MainNavigation from "../../component/MainNavigation/MainNavigation";
import Tools from "../../component/Tools/Tools";

const Dashboard = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    return (
        <div className='flex h-full'>
            <div className='fixed lg:static bottom-0 w-full lg:w-24 lg:h-full z-10'>
                <div className=' relative w-full lg:w-24 h-full bg-blue-800'>
                    <a
                        href='#'
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

                <div className='bg-gray-300 rounded-xl mt-4 lg:hidden p-2'>
                    <button
                        className='block w-32 h-10 bg-blue-600 mx-auto'
                        onClick={() =>
                            setShowSidebar((prevState) => !prevState)
                        }
                    >
                        Toggle Slider
                    </button>
                </div>

                <div className='overflow-hidden'>
                    <div
                        className={`transform lg:transform-none transition-all duration-300 ${
                            showSidebar && "-translate-x-full"
                        } `}
                    >
                        <div className='flex lg:space-x-10 mt-4 lg:mt-10'>
                            <div className=' w-full lg:w-3/4 flex-shrink-0 lg:flex-shrink  rounded-xl'>
                                <div className='flex space-x-4 lg:space-x-10'>
                                    <div className=' bg-gray-300 rounded-xl h-28 w-full'></div>
                                    <div className=' bg-gray-300 rounded-xl h-28 w-full'></div>
                                    <div className=' bg-gray-300 rounded-xl h-28 w-full'></div>
                                </div>
                                <div className='bg-gray-300 h-28 w-full mt-4 lg:mt-10 rounded-xl'></div>

                                <div className='flex space-x-4 lg:space-x-10 mt-4 lg:mt-10'>
                                    <div className='bg-gray-300 rounded-xl h-28 w-full'></div>
                                    <div className='bg-gray-300 rounded-xl h-28 w-full'></div>
                                </div>
                            </div>

                            <div className=' w-full lg:w-1/4 h-52 flex-shrink-0 lg:flex-shrink bg-gray-300 rounded-xl'>
                                {" "}
                                sidebar
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
