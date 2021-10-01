const Cards = () => {
    return (
        <div>
            <div className='flex justify-between'>
                <h3 className='text-lg font-semibold text-gray-700'> Cards</h3>
                <a
                    href='/#'
                    className='inline-block w-6 text-gray-400 hover:text-gray-800'
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
                            d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
                        />
                    </svg>
                </a>
            </div>
            <div className='mt-4 md:w-1/2 lg:w-full mx-auto'>
                <div className='relative w-full bg-blue-800 rounded-lg overflow-hidden pt-3/5'>
                    <div className='absolute top-0 -right-1/2 w-full pt-3/5 transform -rotate-12 bg-blue-200 rounded-3xl'></div>
                    <div className='absolute top-3/4 left-0 w-full pt-3/5 transform rotate-45 bg-yellow-300 rounded-3xl'></div>
                    <div className='absolute inset-0 py-6 px-4 flex flex-col justify-between'>
                        <div className='flex justify-between items-center'>
                            <div className='block w-12 h-8 bg-white bg-opacity-80 rounded'></div>
                            <div className=' w-12 text-white'>
                                <svg
                                    clipRule='evenodd'
                                    fillRule='evenodd'
                                    viewBox='0 0 560 400'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='m286.87 176.71c-.228 17.993 16.036 28.034 28.287 34.004 12.588 6.126 16.816 10.054 16.768 15.531-.096 8.384-10.042 12.083-19.35 12.227-16.24.252-25.681-4.384-33.188-7.891l-5.849 27.373c7.531 3.472 21.476 6.499 35.938 6.631 33.944 0 56.152-16.756 56.273-42.736.132-32.971-45.607-34.797-45.295-49.535.108-4.468 4.372-9.237 13.717-10.45 4.624-.612 17.392-1.081 31.866 5.585l5.681-26.484c-7.783-2.835-17.789-5.55-30.244-5.55-31.95 0-54.423 16.984-54.604 41.295m139.44-39.013c-6.198 0-11.423 3.616-13.753 9.165l-48.49 115.777h33.92l6.75-18.654h41.451l3.916 18.654h29.896l-26.089-124.942zm4.744 33.752 9.789 46.916h-26.809zm-185.31-33.752-26.737 124.942h32.322l26.725-124.942zm-47.817 0-33.644 85.04-13.609-72.308c-1.597-8.071-7.903-12.732-14.906-12.732h-54.999l-.769 3.628c11.291 2.45 24.119 6.402 31.89 10.63 4.756 2.582 6.114 4.84 7.675 10.978l25.776 99.706h34.161l52.369-124.942z'
                                        fill='#1a1f71'
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className='flex items-center justify-between space-x-4'>
                            <div className='w-1/4 h-2 bg-white bg-opacity-80 rounded-full'></div>
                            <div className='w-1/4 h-2 bg-white bg-opacity-80 rounded-full'></div>
                            <div className='w-1/4 h-2 bg-white bg-opacity-80 rounded-full'></div>
                            <div className='w-1/4 text-lg text-center tracking-widest text-white '>
                                {" "}
                                6789
                            </div>
                        </div>

                        <div className='flex justify-between font-semibold text-white'>
                            <span>Mubeen Arman</span>
                            <span>08/25</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Cards;
