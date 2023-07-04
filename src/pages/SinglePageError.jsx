import {useRouteError} from "react-router-dom"

const SinglePageError = () => {
    const err = useRouteError()
    return (
        <>
            <h2>{err.message}</h2>
        </>
    )
}

export default SinglePageError
