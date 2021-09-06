import React from 'react'

const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return (
        <div className="my-3">
            <div className="card" style={{ width: "18rem" }}>

                <img src={!imageUrl ? "https://cdn.vox-cdn.com/thumbor/NuhYBzBmFyxaWvdZbGq55UbMjwc=/0x81:1600x919/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22819524/windows11stock.jpg" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title} <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{ left: "50%" }}>
                        {source}</span>
                    </h5>
                    <p className="card-text">{description}</p>
                    <a href={newsUrl} taget="_blank" className="btn btn-sm btn-success">Read More</a>
                    <div className="card-footer">
                        <small className="text-muted">By {author ? author : "Unknown"} on <b><em>Time:-{new Date(date).toLocaleTimeString()}</em> & Date:{new Date(date).toLocaleDateString("en-US", options)}</b> </small>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default NewsItem
