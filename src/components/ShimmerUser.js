import { LOGO_URL } from "../utils/constants";

const ShimmerUser = () => {
    return (
        <div div className="container" >
            <div className="card-wrapper">
                <div className="user-image">
                    <img src={LOGO_URL} alt="this image contains user-image" />
                </div>
                <div className="content">
                    <h3 className="name"></h3>
                    <p className="location"></p>
                    <p className="details"></p>
                </div>
            </div>
        </div>
    )
}

export default ShimmerUser;