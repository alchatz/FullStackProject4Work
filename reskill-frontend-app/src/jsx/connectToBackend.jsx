import { Link } from "react-router-dom";

export default function connect (serverUrl, postId) {
    const finalUrl = serverUrl
    return (
        <>
        <Link to={finalUrl}>
        </Link>
        </>
    )
}