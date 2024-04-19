import { useRouteError } from "react-router-dom";
const Error = () => {
    const err = useRouteError();
    return (
        <div class="error-container" >
            <h1> 404 </h1>
            <p>
                Oops! The page you're
                looking for is not here.
            </p>
            <a href="/">
                Go Back to Home
            </a>
            <h3>{err.status}:{err.statusText}</h3>
        </div>

    )
}
export default Error;