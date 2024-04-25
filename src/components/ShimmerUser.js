import { LOGO_URL } from "../utils/constants";

const ShimmerUser = () => {
    return (
        <>
            <h1 className='mt-4 text-2xl subpixel-antialiased leading-10 text-center text-black underline underline-offset-2 decoration-indigo-500/30 line-clamp-3 my-5 w-[1536px] h-[80px]'></h1>
            <div className="flex justify-center border my-5 w-[360px] h-[540px]">
                <div className="flex flex-col  ">
                    <div className="">
                        <img className='w-full rounded' src="" alt="" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-xl font-bold text-center"></h3>
                        <p className="text-md"></p>
                        <p className="text-md"></p> 
                        <a className="color-gradient-to-r from-cyan-500 to-blue-500" target="_blank" href="https://www.linkedin.com/in/prasad-nagthane-437075185/">LinkedIn</a>
                        <a className="color-gradient-to-r from-cyan-500 to-blue-500" target="_blank" href="https://github.com/prasadn-16">GitHub</a>
                    </div>
                </div>  
            </div>
        </>
    )
}

export default ShimmerUser;