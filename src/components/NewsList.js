import React, {Component} from 'react';
import NewsItem from './NewsItem'

class NewsList extends Component{
  render(){
    let news = this.props.filteredNews;

    const newsItemNodes = news.map( item => {
      return(
        <NewsItem key={item.id}
        title ={item.title}
        author={item.by}
        link={item.url}
        ></NewsItem>
      )
    });

    return(
      <ul className="news-list">
      {newsItemNodes}
      </ul>
    );
  }
}

export default NewsList;
