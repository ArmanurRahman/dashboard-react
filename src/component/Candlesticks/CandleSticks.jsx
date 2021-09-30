const Candlesticks = () => {
    const candles = [
        {
            id: 1,
            thinHeight: "80%",
            thinTop: "10%",
            wideHeight: "50%",
            wideTop: "20%",
        },
        {
            id: 2,
            thinHeight: "60%",
            thinTop: "15%",
            wideHeight: "50%",
            wideTop: "20%",
        },
        {
            id: 3,
            thinHeight: "65%",
            thinTop: "5%",
            wideHeight: "20%",
            wideTop: "25%",
        },
        {
            id: 4,
            thinHeight: "70%",
            thinTop: "5%",
            wideHeight: "40%",
            wideTop: "15%",
        },
        {
            id: 5,
            thinHeight: "50%",
            thinTop: "25%",
            wideHeight: "40%",
            wideTop: "15%",
        },
        {
            id: 6,
            thinHeight: "70%",
            thinTop: "27%",
            wideHeight: "42%",
            wideTop: "31%",
        },
        {
            id: 7,
            thinHeight: "60%",
            thinTop: "12%",
            wideHeight: "44%",
            wideTop: "21%",
        },
        {
            id: 8,
            thinHeight: "80%",
            thinTop: "5%",
            wideHeight: "60%",
            wideTop: "20%",
        },
        {
            id: 9,
            thinHeight: "80%",
            thinTop: "10%",
            wideHeight: "30%",
            wideTop: "40%",
        },
        {
            id: 10,
            thinHeight: "70%",
            thinTop: "15%",
            wideHeight: "45%",
            wideTop: "33%",
        },
        {
            id: 11,
            thinHeight: "80%",
            thinTop: "10%",
            wideHeight: "50%",
            wideTop: "20%",
        },
        {
            id: 12,
            thinHeight: "65%",
            thinTop: "15%",
            wideHeight: "45%",
            wideTop: "18%",
        },
    ];
    return (
        <div className='mt-4 lg:mt-10'>
            <div className='bg-indigo-50 rounded-xl p-4 lg:p-10'>
                <div className='flex justify-between items-center mb-10'>
                    <h3 className='text-lg font-semibold text-gray-700'>
                        Statistics
                    </h3>
                    <div>
                        <button className='bg-white text-blue-800 space-x-3 flex items-center px-4 py-2 rounded-full font-semibold focus:outline-none'>
                            <span>2021</span>
                            <span className='block w-4 pt-1'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='h-5 w-5'
                                    viewBox='0 0 20 20'
                                    fill='currentColor'
                                >
                                    <path
                                        fillRule='evenodd'
                                        d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                                        clipRule='evenodd'
                                    />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>

                <div className='w-full h-72 relative'>
                    <div className='absolute h-full w-4 left-0 flex flex-col justify-between items-start text-gray-400 pb-6'>
                        <span>4K</span>
                        <span>3K</span>
                        <span>2K</span>
                        <span>1K</span>
                        <span>0</span>
                    </div>
                    <div className='relative h-full ml-6 overflow-x-auto overflow-y-hidden'>
                        <div className='pb-8 flex justify-between h-full w-max md:w-auto relative'>
                            {candles.map((candle) => (
                                <div
                                    key={candle.id}
                                    className='relative w-10 h-full inline-block'
                                >
                                    <div
                                        className=' border border-indigo-200 inline-block absolute left-1/2'
                                        style={{
                                            height: candle.thinHeight,
                                            top: candle.thinTop,
                                        }}
                                    >
                                        <div className='w-full h-full relative'>
                                            <div
                                                className='w-2 absolute transform -translate-x-1/2 bg-blue-800 rounded-full'
                                                style={{
                                                    height: candle.wideHeight,
                                                    top: candle.wideTop,
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className='absolute bottom-0 w-full flex justify-between text-gray-400'>
                                <span>Jan</span>
                                <span>Feb</span>
                                <span>Mar</span>
                                <span>Apr</span>
                                <span>May</span>
                                <span>Jun</span>
                                <span>Jul</span>
                                <span>Aug</span>
                                <span>Sep</span>
                                <span>Oct</span>
                                <span>Nov</span>
                                <span>Dec</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Candlesticks;
