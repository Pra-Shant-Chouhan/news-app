import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'




export class News extends Component {
    static defaultProps = {
        country : 'in',
        pageSize: 9,
        category:'general'
    }
    
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    constructor() {
        super();
        console.log("Hello i am constructor")
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            // totalResults:20  //giving bug without it
            
        }
    }
    async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=53fcaaaa4330426c8098f7fcc5002940&page=${this.state.page}&pageSize=${this.props.pageSize}`
        let data = await fetch(url);
        let parseData = await data.json()
        console.log(parseData);
        this.setState({ articles: parseData.articles, totalResults : parseData.totalResults})
}

    async componentDidMount() {
        
        this.updateNews();

    }

    handlePrevClick =async () => {
        // console.log("Previous")

        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=53fcaaaa4330426c8098f7fcc5002940&page=${this.state.page -1}&pagesize=${this.props.pageSize}`
        // let data = await fetch(url);
        // let parseData = await data.json()
        // console.log(parseData);
    
        // this.setState({
        //     page: this.state.page - 1,
        //     articles: parseData.articles
        // })
        this.setState({ page: this.state.page - 1 })
        this.updateNews()
    }

    handleNextClick =async () => {
        console.log("Next")
        // if (this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)) {
            
        // }
        // else {
            
        //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=53fcaaaa4330426c8098f7fcc5002940&page=${this.state.page +1}&pageSize=${this.props.pageSize}`
        //     let data = await fetch(url);
        //     let parseData = await data.json()
        //     console.log(parseData);
            
        //     this.setState({
        //         page: this.state.page + 1,
        //         articles: parseData.articles
        //     })
        // }
        this.setState({ page: this.state.page + 1 })
        this.updateNews()
    }

    render() {
        return (
            <div className="container my-3">
                <h2 className = "text-center"> NewsChunky - Top Headlines</h2>
                <div className="row">

                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />

                        </div>
                    })}``

                </div>
                <div className="contanier d-flex justify-content-between">
                    <button disabled = {this.state.page<=1} type="button" className="btn btn-warning" onClick ={this.handlePrevClick}>&larr; Previews </button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-warning" onClick ={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>

        )
    }
}


export default News
