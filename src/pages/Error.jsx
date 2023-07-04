import {Link, useRouteError} from "react-router-dom"
import img from "../assets/not-found.svg"
import Wrapper from "../assets/wrappers/ErrorPage"

const Error = () => {
    const err = useRouteError()
    console.log(err)
    if (err.status === 404) {
        return (
            <Wrapper>
                <div>
                    <img src={img} alt="404" />
                    <h3>Ohhh!</h3>
                    <p>We can't seem to find the page you are looking for</p>
                    <Link to="/">Home</Link>
                </div>
            </Wrapper>
        )
    }
    return (
        <Wrapper>
            <div>
                <h3>Sometihng went wrong...</h3>
            </div>
        </Wrapper>
    )
}

export default Error
