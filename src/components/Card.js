import React from 'react'

function Card({ title, content }) {
    return (
        <div>
            <div className="card">
                <div className="card-content">
                    <h2 className="card-title">{title}</h2>
                    <p className="card-text">{content}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;