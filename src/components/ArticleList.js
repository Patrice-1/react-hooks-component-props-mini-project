import React from 'react';
import Article from './Article';

function ArticleList (props) {
    return (
        <main>
            {props.posts.map((post) => (
                <article key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.date}</p>
                    <p>{post.preview}</p>
                </article>
            ))}
        </main>
    )
}

export default ArticleList;