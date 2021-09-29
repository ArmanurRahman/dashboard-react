const MainNavigation = () => {
    return (
        <div className='flex lg:flex-col items-center justify-center h-full lg:space-y-4 space-x-4 lg:space-x-0 py-2 lg:py-4'>
            <a href='#' className='group'>
                <div className='flex justify-center items-center w-10 h-10 lg:w-14 lg:h-14 text-white opacity-60 rounded-xl group-hover:bg-white group-hover:opacity-100 group-hover:text-red-500 transform lg:group-hover:translate-x-8 lg:group-hover:translate-y-0  group-hover:-translate-y-8 duration-300 group-hover:shadow-xl'>
                    {" "}
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                    >
                        <path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z' />
                    </svg>
                </div>
            </a>
            <a href='#' className='group'>
                <div className='flex justify-center items-center w-10 h-10 lg:w-14 lg:h-14 text-white opacity-60 rounded-xl group-hover:bg-white group-hover:opacity-100 group-hover:text-red-500 transform lg:group-hover:translate-x-8 lg:group-hover:translate-y-0  group-hover:-translate-y-8 duration-300 group-hover:shadow-xl'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                    >
                        <path d='M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z' />
                        <path d='M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z' />
                    </svg>
                </div>
            </a>
            <a href='#' className='group'>
                <div className='flex justify-center items-center w-10 h-10 lg:w-14 lg:h-14 text-white opacity-60 rounded-xl group-hover:bg-white group-hover:opacity-100 group-hover:text-red-500 transform lg:group-hover:translate-x-8 lg:group-hover:translate-y-0  group-hover:-translate-y-8 duration-300 group-hover:shadow-xl'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                    >
                        <path
                            fillRule='evenodd'
                            d='M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z'
                            clipRule='evenodd'
                        />
                    </svg>
                </div>
            </a>
            <a href='#' className='group'>
                <div className='flex justify-center items-center w-10 h-10 lg:w-14 lg:h-14 text-white opacity-60 rounded-xl group-hover:bg-white group-hover:opacity-100 group-hover:text-red-500 transform lg:group-hover:translate-x-8 lg:group-hover:translate-y-0  group-hover:-translate-y-8 duration-300 group-hover:shadow-xl'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                    >
                        <path d='M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z' />
                        <path
                            fillRule='evenodd'
                            d='M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z'
                            clipRule='evenodd'
                        />
                    </svg>
                </div>
            </a>
        </div>
    );
};

export default MainNavigation;
