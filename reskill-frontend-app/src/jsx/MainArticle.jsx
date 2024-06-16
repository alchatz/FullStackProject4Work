import RelatedArticlePost from './RelatedArticlePost.jsx'

export default function MainArticle() {
    const articleTitle = 'Posts List'
    const subheader = 'Something'
    const mainImage = ''
    const articleBody = ''
    const moreImages = ''
    const relatedArticles = 'Related Articles'

    return (
        <>
            <h1>{articleTitle}</h1>
            <p>{subheader}</p>
            <img src={mainImage} className="Main Image" alt="Main Article Image" />
            <p>{articleBody}</p>
            <img src={moreImages} className="More Images" alt="More Article Images" />
            <h3>{relatedArticles}</h3>
            <p>
                <RelatedArticlePost postId='1'/>
            </p>
            <p>
                <RelatedArticlePost postId='2'/>
            </p>
            <p>
                <RelatedArticlePost postId='3'/>
            </p>
            <p>
                <RelatedArticlePost postId='4'/>
            </p>
            <p>
                <RelatedArticlePost postId='5'/>
            </p>
            <p>
                <RelatedArticlePost postId='6'/>
            </p>
        </>
    )
}