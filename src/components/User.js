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
    return (
        <div div className="container" >
            <div className="card-wrapper">
                <div className="user-image">
                    <img src=
                        {userInfo.avatar_url}
                        alt="this image contains user-image" />
                </div>
                <div className="content">
                    <h3 className="name">{userInfo.name}</h3>
                    <p className="location">Location : {userInfo.location}</p>
                    <p className="details">{userInfo.bio}</p>
                </div>
            </div>
        </div>
    );
}
export default User;