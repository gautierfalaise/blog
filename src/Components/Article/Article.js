import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';

export default function Article() {
    const params = useParams()
    const articlesData = useSelector((state) => state.articles.articles);
    // console.log(params.id)
    // console.log(articlesData)
    //console.log("params.id " + params.id)


    return (
        <>
            {
                articlesData && articlesData.map(article => {
                    if (params.id == article.id) {
                        //console.log("article.id " + article.id)
                        return (
                            <div key={article.id} className="OneArticle-Container">
                                <h2>
                                    {article.title}
                                </h2>
                                <p className='OneArticle-description'>{article.body}</p>
                            </div>
                        )
                    }

                })
            }
        </>
    )
}
