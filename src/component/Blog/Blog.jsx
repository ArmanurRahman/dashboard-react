import ProfilePic from "../../assets/img/mubeen.jpeg";

const Blog = () => {
    return (
        <div className='md:flex space-y-5 md:space-y-0 md:space-x-5 lg:md:space-x-10 mt-4 lg:mt-10'>
            <div className=' w-full lg:w-1/2 bg-white shadow-lg border border-gray-100 rounded-xl p-5 space-y-5'>
                <div className='flex items-center'>
                    <div className='w-10 h-10 rounded-full overflow-hidden mr-3'>
                        <img
                            className='w-10 h-10 object-cover'
                            src={ProfilePic}
                            alt=''
                        />
                    </div>
                    <div>
                        <span className='block leading-3'>Armanur Rahman</span>
                        <span className='text-gray-400 text-xs'>
                            Software Engineer
                        </span>
                    </div>
                </div>
                <h3 className='text-lg font-semibold'>
                    <a className='hover:text-blue-800' href='/#'>
                        How to properly manage personal budget?
                    </a>
                </h3>
                <div className='flex items-center space-x-7'>
                    <div>
                        <div className='flex items-center space-x-2'>
                            <div className='w-6 text-blue-800'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='h-5 w-5'
                                    viewBox='0 0 20 20'
                                    fill='currentColor'
                                >
                                    <path
                                        fillRule='evenodd'
                                        d='M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1V9h-1v2zm1-4V5h-1v2h1zM5 5v2H4V5h1zm0 4H4v2h1V9zm-1 4h1v2H4v-2z'
                                        clipRule='evenodd'
                                    />
                                </svg>
                            </div>
                            <span className='text-sm text-gray-600'>Video</span>
                        </div>
                    </div>
                    <div>
                        <div className='flex items-center space-x-2'>
                            <div className='w-6 text-blue-300'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='h-5 w-5'
                                    viewBox='0 0 20 20'
                                    fill='currentColor'
                                >
                                    <path
                                        fillRule='evenodd'
                                        d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z'
                                        clipRule='evenodd'
                                    />
                                </svg>
                            </div>
                            <span className='text-sm text-gray-600'>
                                15 min
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className='flex items-center space-x-2'>
                            <div className='w-6 text-red-600'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='h-5 w-5'
                                    viewBox='0 0 20 20'
                                    fill='currentColor'
                                >
                                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                                </svg>
                            </div>
                            <span className='text-sm text-gray-600'>
                                122 likes
                            </span>
                        </div>
                    </div>
                </div>

                <div className='flex items-center justify-between'>
                    <div className='text-gray-600 font-semibold'>
                        5 days ago
                    </div>
                    <a
                        href='/#'
                        className='bg-blue-800 text-white rounded-full hover:bg-red-500 px-4 py-3 flex space-x-3 items-center'
                    >
                        <span>Connect</span>
                        <div className='w-4 h-4'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-5 w-5'
                                viewBox='0 0 20 20'
                                fill='currentColor'
                            >
                                <path
                                    fillRule='evenodd'
                                    d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                                    clipRule='evenodd'
                                />
                            </svg>
                        </div>
                    </a>
                </div>
            </div>
            <div className=' w-full lg:w-1/2 bg-white shadow-lg border border-gray-100 rounded-xl p-5 space-y-5'>
                <div className='flex items-center'>
                    <div className='w-10 h-10 rounded-full overflow-hidden mr-3'>
                        <img
                            className='w-10 h-10 object-cover'
                            src={ProfilePic}
                            alt=''
                        />
                    </div>
                    <div>
                        <span className='block leading-3'>Armanur Rahman</span>
                        <span className='text-gray-400 text-xs'>
                            Software Engineer
                        </span>
                    </div>
                </div>
                <h3 className='text-lg font-semibold'>
                    <a className='hover:text-blue-800' href='/#'>
                        How to properly manage personal budget?
                    </a>
                </h3>
                <div className='flex items-center space-x-7'>
                    <div>
                        <div className='flex items-center space-x-2'>
                            <div className='w-6 text-blue-800'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='h-5 w-5'
                                    viewBox='0 0 20 20'
                                    fill='currentColor'
                                >
                                    <path
                                        fillRule='evenodd'
                                        d='M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1V9h-1v2zm1-4V5h-1v2h1zM5 5v2H4V5h1zm0 4H4v2h1V9zm-1 4h1v2H4v-2z'
                                        clipRule='evenodd'
                                    />
                                </svg>
                            </div>
                            <span className='text-sm text-gray-600'>Video</span>
                        </div>
                    </div>
                    <div>
                        <div className='flex items-center space-x-2'>
                            <div className='w-6 text-blue-300'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='h-5 w-5'
                                    viewBox='0 0 20 20'
                                    fill='currentColor'
                                >
                                    <path
                                        fillRule='evenodd'
                                        d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z'
                                        clipRule='evenodd'
                                    />
                                </svg>
                            </div>
                            <span className='text-sm text-gray-600'>
                                15 min
                            </span>
                        </div>
                    </div>
                    <div>
                        <div className='flex items-center space-x-2'>
                            <div className='w-6 text-red-600'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='h-5 w-5'
                                    viewBox='0 0 20 20'
                                    fill='currentColor'
                                >
                                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                                </svg>
                            </div>
                            <span className='text-sm text-gray-600'>
                                122 likes
                            </span>
                        </div>
                    </div>
                </div>

                <div className='flex items-center justify-between'>
                    <div className='text-gray-600 font-semibold'>
                        5 days ago
                    </div>
                    <a
                        href='/#'
                        className='bg-blue-800 text-white rounded-full hover:bg-red-500 px-4 py-3 flex space-x-3 items-center'
                    >
                        <span>Connect</span>
                        <div className='w-4 h-4'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-5 w-5'
                                viewBox='0 0 20 20'
                                fill='currentColor'
                            >
                                <path
                                    fillRule='evenodd'
                                    d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                                    clipRule='evenodd'
                                />
                            </svg>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};
export default Blog;
