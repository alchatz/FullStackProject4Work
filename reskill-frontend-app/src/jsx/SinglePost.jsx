import Navigator from './Navigator.jsx'
import Footer from './Footer.jsx'
import { useParams } from 'react-router';


export default function SinglePost() {
    const { postId } = useParams()
    const postTitle = 'Single Post'
    const postSubheader = ''
    const postBody = ''
    const postImg = ''

    return (
        <div class='page-padding'>
            <Navigator />
            <h1>{postTitle}</h1>
            <p>{postSubheader}</p>
            <p>{postBody}</p>
            <img src={postImg}/>
            <Footer />
        </div>
    )
}