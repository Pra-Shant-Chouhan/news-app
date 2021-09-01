import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "bbc-sport",
                "name": "BBC Sport"
            },
            "author": "BBC Sport",
            "title": "'Over-the-top Kohli faces questions over his form and his captaincy'",
            "description": "Virat Kohli's aggressive leadership inspires India at times, but it looks childish when it doesn't come off, says cricket journalist Suresh Menon.",
            "url": "http://www.bbc.co.uk/sport/cricket/58392309",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/7AAC/production/_120340413_virat_kohli_getty9.jpg",
            "publishedAt": "2021-09-01T05:22:23.8012274Z",
            "content": "Virat Kohli made 115, 141 and 147 in his first three innings as Test captain in 2014\r\n<table><tr><th>England v India, fourth LV= Insurance Test</th></tr>\r\n<tr><td>Venue: Kia Oval Date: 2-6 September … [+6081 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            "publishedAt": "2020-04-27T11:41:47Z",
            "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
    ]
    constructor() {
        super();
        console.log("Hello i am constructor")
        this.state = {
            articles: this.articles,
            loading: false
        }
    }

    render() {
        return (
            <div className="container my-3">
                <h2> NewsChunky - Top Headlines</h2>
                <div className="row">

                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title.slice(0,45)} description={element.description.slice(0,88)} imageUrl={element.urlToImage} newsUrl={element.url} />

                        </div>
                    })}
                </div>

            </div>
        )
    }
}

export default News
