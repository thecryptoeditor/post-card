import React, { useEffect, useState } from 'react';
import Card from './Card';

function DisplayPost({props}) {

    const [counter, setCounter] = useState(Number);
    const [content, setContent] = useState(null);

    useEffect(() => {

        let lng = localStorage.getItem('postcount') || 0;
        console.log(lng)
        
        for (let i = 1; i <= lng; i++ ) {
            setCounter(i);
            setContent(localStorage.getItem(`post${i}`));
        }

    }, [props]);

    return (
        <div>
            <div className='listOfPost'>
                <p>Here is the all the posts: </p>

                { counter > 0 ? 
                    <Card key={counter} title={`Post: ${counter}`} content={content} />
                    : <p>No post available</p>
                }
            </div>
        </div>
    )
}

export default DisplayPost;