import RelatedArticlePost from './RelatedArticlePost.jsx'

export default function MainArticle() {
    const articleTitle = 'Posts List'
    const subheader = 'Something'
    const mainImage = ''
    const articleBody = 'test'
    const moreImages = ''
    const relatedArticles = 'Related Articles'

    return (
        <div>
            <h1>{articleTitle}</h1>
            <p>{subheader}</p>
            <div class='main-article'>
                <img src={mainImage} className="Main Image" alt="Main Article Image" />
                <p>{articleBody}</p>
                <img src={moreImages} className="More Images" alt="More Article Images" />
            </div>
            <h3>{relatedArticles}</h3>
            <div class='related-articles'>
            <p>
                    <RelatedArticlePost postId='1' />
                </p>
                <p>
                    <RelatedArticlePost postId='2' />
                </p>
                <p>
                    <RelatedArticlePost postId='3' />
                </p>
                <p>
                    <RelatedArticlePost postId='4' />
                </p>
                <p>
                    <RelatedArticlePost postId='5' />
                </p>
                <p>
                    <RelatedArticlePost postId='6' />
                </p>
            </div>
        </div>
    )
}