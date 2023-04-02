import React from "react";
import Article from "./Article";

export default function Articles({articles}) {

    const articleComponents = articles.map(article => <Article key={article.id} article={article}/>);

    return (
        <ul>
            {articleComponents}
        </ul>
    );
}