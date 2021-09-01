import React, { Component } from 'react'

export class NewsItem extends Component {
    constructor() {
        super();
        console.log("Hello i am constructor")
    }
    render() {
        let { title, description, imageUrl, newsUrl } = this.props;
        return (
            <div className = "my-3">
                <div className="card" style={{ width: "18rem"}}>
                    <img src={!imageUrl?"https://cdn.vox-cdn.com/thumbor/NuhYBzBmFyxaWvdZbGq55UbMjwc=/0x81:1600x919/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22819524/windows11stock.jpg":imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title} ...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsUrl} taget ="_blank" className="btn btn-sm btn-success">Read More</a>
                    </div>
                </div>

            </div>
        )
    }
}

export default NewsItem
