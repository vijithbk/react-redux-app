import React from 'react';

const ArticleDisplay = (props) => {
    console.log(props)
    const renderArticle = ({ adata }) => {
        console.log(adata)
        if (adata) {
            return adata.map((item) => {
                return (
                    <div className="item">
                        <div className="left"
                            style={{ background: `url(/images/articles/${item.img})` }}>

                        </div>
                        <div className="right">
                            <h3>{item.title}</h3>
                            <div className="category-tag">
                                {item.category}
                            </div>
                            <div className="tags">
                                <span>
                                    <i className="fa fa-eye">
                                        {item.views}
                                    </i>
                                </span>
                                <span>
                                    <i className="fa fa-thumbs-up">
                                        {item.likes[0]}
                                    </i>
                                </span>
                                <span>
                                    <i className="fa fa-thumbs-down">
                                        {item.likes[1]}
                                    </i>
                                </span>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }

    return (
        <div class="other-news">
            <h1>Article news</h1>
            <div class="other-news-items">
                {renderArticle(props)}
            </div>
        </div>
    )
}

export default ArticleDisplay;