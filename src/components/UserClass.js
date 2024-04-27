import React from "react";
import ShimmerUser from "./ShimmerUser";
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "dummy name",
                location: "default"
            }
        }
    }
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/prasadn-16")
        const json = await data.json()
        this.setState({ userInfo: json })
    }
    render() {
        const { name, location, bio, avatar_url } = this.state.userInfo
        return this.state.userInfo.location === "default" ? <ShimmerUser /> : (
            <div className="container">
                <div className="card-wrapper">  
                    <div className="user-image">
                        <img src=
                            {avatar_url}
                            alt="this image contains user-image" />
                    </div>
                    <div className="content">
                        <h3 className="name">{name}</h3>
                        <p className="location">Location : {location}</p>
                        <p className="details">{bio}</p>
                    </div>
                </div>
            </div>
        )
    }
    componentDidUpdate() {
        console.log("Component Update")
    }
    componentWillUnmount() {
        console.log("Unmounted")
    }
}
export default UserClass;