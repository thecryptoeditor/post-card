import React, { useEffect, useState } from 'react';
import Card from './Card';

function DisplayPost({ viewed }) {

    const [loop, setLoop] = useState([]);

    useEffect(() => {

        let lng = localStorage.getItem('postcount') || 0;

        let initialArr = [];

        for (let i = 1; i <= lng; i++) {
            initialArr.push({ 'id': i, 'content': localStorage.getItem(`post${i}`) });
        }

        setLoop(initialArr);

    }, [localStorage.getItem('postcount')]);

    return (
        <div>
            <div className='listOfPost'>
                <p>Here is the all the posts: </p>

                {loop.length > 0 ? loop.map((i, idx) => {
                    return <Card key={idx} title={`Post: ${i.id}`} content={i.content} />
                })
                    : <p>No post available</p>
                }
            </div>
        </div>
    )
}

export default DisplayPost;