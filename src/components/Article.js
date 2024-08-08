import React from 'react';
import PropTypes from 'prop-types';

function Article ({ title, date= 'January 1, 1970', preview }){
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
        </article>
    )
}

Article.propTypes = { 
    title: PropTypes.string.isRequired,
    date: PropTypes.string,
    preview: PropTypes.string.isRequired,
};

export default Article;