import React from 'react';

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