import { useState } from "react";

const Dashboard = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    return (
        <div className='flex h-full'>
            <div className='fixed lg:static bottom-0 w-full lg:w-24 lg:h-full z-10'>
                <div className=' relative w-full lg:w-24 h-full bg-blue-800'>
                    <a
                        href='#'
                        className=' hidden absolute top-10 left-1/2 transform -translate-x-1/2 lg:block w-14 h-14 bg-yellow-300 rounded-xl'
                    ></a>
                    <div className='flex lg:flex-col items-center justify-center h-full lg:space-y-4 space-x-4 lg:space-x-0 py-4'>
                        <a
                            href='#'
                            className='block w-14 h-14 bg-white rounded-xl'
                        ></a>
                        <a
                            href='#'
                            className='block w-14 h-14 bg-white rounded-xl'
                        ></a>
                        <a
                            href='#'
                            className='block w-14 h-14 bg-white rounded-xl'
                        ></a>
                        <a
                            href='#'
                            className='block w-14 h-14 bg-white rounded-xl'
                        ></a>
                    </div>
                </div>
            </div>

            <div className='w-full p-4 lg:p-10'>
                <div className='bg-gray-300 h-14 rounded-xl'> search</div>

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
