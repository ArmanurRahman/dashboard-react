const Percentage = () => {
    return (
        <div>
            <div className='w-full text-right mb-6'>
                <a
                    href='#'
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
                            d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
                        />
                    </svg>
                </a>
            </div>

            <div className=' relative'>
                <div className='flex items-center justify-center w-32 h-32 rounded-full bg-white mx-auto relative'>
                    <div className='text-blue-800 h-20 w-20 bg-gray-50 rounded-full flex items-center justify-center shadow-lg'>
                        <div>
                            <span className='text-2xl font-black'>72</span>
                            <span className='font-bold'>%</span>
                        </div>
                    </div>
                    <div className='absolute w-36 text-blue-800'>
                        <svg viewBox='0 0 36 36' stroke='currentColor'>
                            <path
                                d='M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831'
                                fill='none'
                                strokeWidth='1'
                                strokeDasharray='72, 100'
                                strokeLinecap='round'
                            />
                        </svg>
                    </div>
                </div>
                <div className='absolute top-0 right-0 lg:-right-10 text-white bg-blue-800 rounded w-auto px-3 py-2 text-sm shadow-lg'>
                    $10,500
                </div>
                <div></div>
            </div>
        </div>
    );
};
export default Percentage;
