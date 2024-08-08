import React from 'react';
import PropTypes from 'prop-types';

function Article ({ title, date= 'January 1, 1970', preview, readTime }){
    const getReadTimeDisplay = (minutes) => {
        if (minutes <30) {

            const coffeeCount = Math.ceil(minutes / 5);
            return "☕️ ".repeat(coffeeCount) + ` ${minutes} min read`;
        } else {

            const bentoCount = Math.ceil(minutes / 10);
            return '🍱'.repeat(bentoCount) + ` ${minutes} min read`;
        }
    };

        return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
            <p>{getReadTimeDisplay(readTime)}</p>
        </article>
    )
}

Article.propTypes = { 
    title: PropTypes.string.isRequired,
    date: PropTypes.string,
    preview: PropTypes.string.isRequired,
};

export default Article;