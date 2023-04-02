import React from "react";
import Link from "next/link";

export default function Article({article}) {
    console.log(article);

    return (
        <li><a href={`/presents/${article.slug}`}>{article.title["rendered"]}</a></li>
    );
}