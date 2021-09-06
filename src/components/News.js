import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Spinner';




const News = (props) => {


    const [articles, setarticles] = useState([])
    const [loading, setloading] = useState(true)
    const [page, setpage] = useState(1)
    const [totalResults, settotalResults] = useState(0)

    const capatizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }


    const updateNews = async () => {
        props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setloading(true);
        let data = await fetch(url);
        props.setProgress(30)
        let parseData = await data.json()
        props.setProgress(70)

        setarticles(parseData.articles)
        settotalResults(parseData.settotalResults)
        setloading(false)

        props.setProgress(100)
    }

    useEffect(() => {
        document.title = `NewsChunky-${capatizeFirstLetter(props.category)}`
        updateNews();

    }, [])



    const fetchMoreData = async () => {
        setpage(page + 1)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
        let data = await fetch(url);
        let parseData = await data.json()
        console.log(parseData);
        setarticles(articles.concat(parseData.articles))
        settotalResults(parseData.settotalResults)

    };


    // handlePrevClick = async () => {
    //     // console.log("Previous")

    //     // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page -1}&pagesize=${props.pageSize}`
    //     // let data = await fetch(url);
    //     // let parseData = await data.json()
    //     // console.log(parseData);

    //     // setState({
    //     //     page: page - 1,
    //     //     articles: parseData.articles
    //     // })
    // refactoring component 
    //     setState({page - 1 )
    //     updateNews()
    // }

    // handleNextClick = async () => {
    //     console.log("Next")
    //     // if (page + 1 > Math.ceil(totalResults/props.pageSize)) {

    //     // }
    //     // else {

    //     //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page +1}&pageSize=${props.pageSize}`
    //     //     let data = await fetch(url);
    //     //     let parseData = await data.json()
    //     //     console.log(parseData);

    //     //     setState({
    //     //         page: page + 1,
    //     //         articles: parseData.articles
    //     //     })
    //     // }

    //     // refactoring component 
    //     setState({ page: page + 1 })
    //     updateNews()
    // }

    return (
        <>
            <h2 className="text-center"> NewsChunky - Top Headlines from {capatizeFirstLetter(props.category)}</h2>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">

                    <div className="row">

                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />

                            </div>
                        })}

                    </div>
                </div>
            </InfiniteScroll>
        </>
        // {/* <div className="contanier d-flex justify-content-between">
        //     <button disabled={page <= 1} type="button" className="btn btn-warning" onClick={handlePrevClick}>&larr; Previews </button>
        //     <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} type="button" className="btn btn-warning" onClick={handleNextClick}>Next &rarr;</button>
        // </div> */}


    )
}

News.defaultProps = {
    country: 'in',
    pageSize: 9,
    category: 'general'
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News
