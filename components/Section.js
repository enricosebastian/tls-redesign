import React from "react";
import Articles from "./Articles";

export default function Section({section}) {
    return (
        <>
            <h1>{section.name}</h1>
            <Articles articles={section.articles}/>
        </> 
    )
}