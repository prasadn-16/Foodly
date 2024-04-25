import { useEffect, useState } from 'react'
const User = () => {
    const [userInfo, setUserInfo] = useState({
        avatar_url: 'dummy avatar',
        name: 'dummy Name',
        location: 'dummy Location',
        bio: 'dummy bio',
    });

    useEffect(() => {
        gitUserInfo();
    }, [])

    const gitUserInfo = async () => {
        const data = await fetch("https://api.github.com/users/prasadn-16")
        const json = await data.json()
        setUserInfo({
            avatar_url: json.avatar_url,
            name: json.name,
            location: json.location,
            bio: json.bio,
        })
    }
    console.log(userInfo)
    return (
        <>
            <h1 className='text-2xl subpixel-antialiased leading-10 text-center text-black underline underline-offset-2 decoration-indigo-500/30 line-clamp-3'>Our mission is to elevate the quality of life for the urban consumer with unparalleled convenience. Convenience is what makes us tick. It's what makes us get out of bed and say, "Let's do this."
            </h1>
            <div className="flex justify-center my-5">
                <div className="flex flex-col rounded w-[360px] gap-6 p-4 border hover:shadow-2xl hover:shadow-900">
                    <div className="">
                        <img className='w-full rounded' src=
                            {userInfo.avatar_url}
                            alt="this image contains user-image" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-xl font-bold text-center">{userInfo.name}</h3>
                        <p className="text-md">Location : {userInfo.location}</p>
                        <p className="text-md">{userInfo.bio}</p>
                        <a className="color-gradient-to-r from-cyan-500 to-blue-500" href="https://www.linkedin.com/in/prasad-nagthane-437075185/">LinkedIn</a>
                        <a className="color-gradient-to-r from-cyan-500 to-blue-500" href="https://github.com/prasadn-16">GitHub</a>
                    </div>
                </div>
            </div>
        </>
    );
}
export default User;