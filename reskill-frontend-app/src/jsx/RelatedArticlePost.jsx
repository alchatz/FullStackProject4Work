import { Link } from "react-router-dom";

export default function RelatedArticlePost (props) {
    const postId = props.postId
    const linkId = 'post/'+ postId
    const articleImage = ''
    const title = 'Title'
    const author = 'Author'

    return (
        <card>
            <a href={linkId}>
                <img src={articleImage} className="Related Article Image" alt="Related Article Image" />
                <p>{title}</p>
            </a>
            <p>{author}</p>
        </card>
    )
}