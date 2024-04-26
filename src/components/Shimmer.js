const Shimmer = () => {
    return (
        <div div className="body font-sans">
            <div className="flex justify-around my-5">
                <form role="search" className='flex gap-4' onSubmit={(e) => e.preventDefault()}>
                    <label className='sr-only' htmlFor="search">Search this site</label>
                    <input
                        className="placeholder:italic placeholder:text-slate-400 border-solid  block bg-white border-black-300 border-opacity-65 border rounded py-2 pl-9 pr-3 shadow focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                        type="search"
                        role="searchbox"
                        aria-description="search results will appear below"
                        id="search"
                    />
                    <button className='px-7 text-white rounded-full border-2 w-[103px]'></button>
                </form>
                <button className='text-white px-10 rounded-full border-2 w-[237px]'>
                </button>
            </div>
            <div className="flex justify-start">
                <div className="flex justify-center flex-wrap">
                    <div className="border-2 w-[350px] h-[400px] p-4 m-2"></div>
                    <div className="border-2 w-[350px] h-[400px] p-4 m-2"></div>
                    <div className="border-2 w-[350px] h-[400px] p-4 m-2"></div>
                    <div className="border-2 w-[350px] h-[400px] p-4 m-2"></div>
                    <div className="border-2 w-[350px] h-[400px] p-4 m-2"></div>
                    <div className="border-2 w-[350px] h-[400px] p-4 m-2"></div>
                    <div className="border-2 w-[350px] h-[400px] p-4 m-2"></div>
                    <div className="border-2 w-[350px] h-[400px] p-4 m-2"></div>
                    <div className="border-2 w-[350px] h-[400px] p-4 m-2"></div>
                    <div className="border-2 w-[350px] h-[400px] p-4 m-2"></div>
                    <div className="border-2 w-[350px] h-[400px] p-4 m-2"></div>
                    <div className="border-2 w-[350px] h-[400px] p-4 m-2"></div>
                </div>
            </div>
        </div>
    )
}

export default Shimmer;