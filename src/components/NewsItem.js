import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
      let {title,description,imageUrl,newsUrl}=this.props
    return (
      <div>
        <div className="card" style={{width: '18rem'}}>
  <img src={imageUrl?imageUrl:'https://images.indianexpress.com/2022/12/JEE.jpg'} style={{height:'180px'}}className="card-img-top" alt="news thumbnail"/>
  <div className="card-body">
    <h5 className="card-title">{title?title.slice(0,20):""}...</h5>
    <p className="card-text">{description?description.slice(0,60):""}...</p>
    <a href={newsUrl}rel="noreferrer" target="_blank" className="btn btn-primary">Full Article</a>
  </div>
</div>
</div>
    )
  }
}
