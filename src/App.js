import React, {Component} from 'react';
import NewsContainer from './containers/NewsContainer';
import './App.css';

class App extends Component {
  render(){

    const newsFilters = [
      {name: "new", url: "https://hacker-news.firebaseio.com/v0/newstories.json"},
      {name: "top", url: "https://hacker-news.firebaseio.com/v0/topstories.json"},
      {name: "best", url: "https://hacker-news.firebaseio.com/v0/beststories.json"},
      {name: "ask", url: "https://hacker-news.firebaseio.com/v0/askstories.json"},
      {name: "show", url: "https://hacker-news.firebaseio.com/v0/showstories.json"},
      {name: "job", url: "https://hacker-news.firebaseio.com/v0/jobstories.json"}
    ];

    return (
      <div className="App">
        <NewsContainer newsFilters={newsFilters}></NewsContainer>
      </div>
    );
  }


}

export default App;
