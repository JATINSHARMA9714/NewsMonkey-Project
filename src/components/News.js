import React, { Component } from 'react'
import NewsItem from './NewsItem'


export default class News extends Component {
    constructor(){
        super();
        this.state={
        articles: []
        }
    }
     async componentDidMount(){
      let url=
     'https://newsapi.org/v2/top-headlines?country=in&apiKey=887f5ccf3cb64b708f47f7bb8d06f53a&page=1&pageSize=10'
      let response=await fetch(url);
      let data=await response.json();
      this.setState({
        articles:data.articles,
        page:1,
        totalResults:data.totalResults
    })
    }
    handlePrevClick= async()=>{
        let url=
     `https://newsapi.org/v2/top-headlines?country=in&apiKey=887f5ccf3cb64b708f47f7bb8d06f53a&page=${this.state.page-1}&pageSize=10`
      let response=await fetch(url);
      let data=await response.json();
      this.setState({
        articles:data.articles,
        page:this.state.page-1
    })
    }
    handleNextClick= async()=>{
        if(this.state.page>=Math.ceil(this.state.totalResults/10)){

        }
        else{
        let url=
     `https://newsapi.org/v2/top-headlines?country=in&apiKey=887f5ccf3cb64b708f47f7bb8d06f53a&page=${this.state.page+1}&pageSize=10`
      let response=await fetch(url);
      let data=await response.json();
      this.setState({
        articles:data.articles,
        page:this.state.page+1
    })
}
    }

    
  render() {
    return (
        <div className='container'>
        <h2>News Articles</h2>
        <div className="row">
        {
        this.state.articles.map((element)=>{
            return <div className="col-md-3 my-2" key={element.url}>
                <NewsItem title={element.title} newsUrl={element.url} imageUrl={element.urlToImage}description={element.description}/>
                </div>
                
        })
    }
    </div>
    <div className='d-flex justify-content-between'>
    <button disabled={this.state.page<=1} type="button" class="btn btn-outline-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
    <button disabled={this.state.page>=Math.ceil(this.state.totalResults/10)}type="button" class="btn btn-outline-dark" onClick={()=>{
        this.handleNextClick()
    }}>Next &rarr;</button>
    </div>
    </div>
    )
  }
}
