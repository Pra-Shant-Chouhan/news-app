import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  
    constructor() {
        super();
        console.log("Hello i am constructor")
        this.state = {
            articles: [],
            loading: false
        }
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=53fcaaaa4330426c8098f7fcc5002940"
        let data = await fetch(url);
        let parseData = await data.json()
        console.log(parseData);
        this.setState({articles: parseData.articles})
        
    }

    render() {
        return (
            <div className="container my-3">
                <h2> NewsChunky - Top Headlines</h2>
                <div className="row">

                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} />

                        </div>
                    })}
                </div>

            </div>
        )
    }
}

export default News
