import React, {Component} from 'react';
import NewsList from "../components/NewsList";
import NewsFilter from "../components/NewsFilter";

class NewsContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      latestNews: [],
      filteredNews: []
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount(){
    this.loadNews(this.props.newsFilters[0].url);

  }

  loadNews(url){
    fetch(url)
    .then(res => res.json())
    .then(data => {
      const promises = data.slice(0,20).map(newsId => {
          const url = "https://hacker-news.firebaseio.com/v0/item/"+newsId+".json";
          return fetch(url)
          .then(res => res.json())
          .catch(err => console.error);
      });
      Promise.all(promises)
      .then(data => {
        this.setState({
          latestNews: data,
          filteredNews: data
        })
      });
    })
    .catch(err => console.error);
  }

  filterNews(string){
    if(string!==""){
      let results = this.state.latestNews.filter(newsItem => newsItem.title.toLowerCase().includes(string.toLowerCase()));
      this.setState({filteredNews: results});
    }
  }

  handleInputChange(event){
    this.filterNews(event.target.value);
  }

  render(){
    return(
      <div>
        <h2>Hacker News</h2>
        <NewsFilter handleInputChange={this.handleInputChange}></NewsFilter>
        <NewsList latestNews={this.state.latestNews} filteredNews={this.state.filteredNews}></NewsList>
      </div>
    )
  }


}

export default NewsContainer;
