import React from 'react';
import './article.css';

const Article = ({ imgUrl, title, text, link, btnLink }) => {
  return (
    <div className="mcs__experience-container_article">
      <div className="mcs__experience-container_article-image">
        <img src={imgUrl} alt="experience"/>
      </div>
      <div className="mcs__experience-container_article-content">
        <div className="mcs__experience-container_text">
         <h3><a href={link}>{title}</a></h3>
         <p>{text}</p>
        </div>
        <div className="mcs__experience-container_btn">
        <button><a href={btnLink}>GitHub</a></button>
        </div>
      </div>
    </div>
  )
}

export default Article;
