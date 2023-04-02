import React from "react";

export default function Article({article}) { 
    return (
        <li>
            <a href={`/presents/${article.slug}`}>
                {article.title["rendered"]}
            </a>
        </li>
    );
}