const SearchForm = () => {
    return (
        <div className='relative'>
            <div className=' w-4 text-blue-800 absolute top-3 left-3'>
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
                        d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                    />
                </svg>
            </div>
            <input
                type='text'
                className='w-full bg-indigo-50 rounded-md text-indigo-900 h-10 pl-10 outline-none focus:ring-2 focus:ring-blue-600'
            ></input>
        </div>
    );
};

export default SearchForm;
