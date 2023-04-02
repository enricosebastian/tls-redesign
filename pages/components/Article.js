import React from "react";

export default function Article({article}) {
    console.log(article);

    return (
        <li>{article.title["rendered"]}</li>
    );
}