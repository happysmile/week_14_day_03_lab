import React from 'react';

const NewsItem = ({title, author, link}) => {

    return(
      <li className="news-list-item">
        <h3>{title}</h3>
        <p>By {author}</p>
        <p><a href={link}>Read more</a></p>      
      </li>
    )

}

export default NewsItem;
