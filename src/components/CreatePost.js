import React, { useState } from 'react'
import '../style.css'
import DisplayPost from './DisplayPost';

function CreatePost() {

    const [post, setPost] = useState(``);

    const [viewed, setViewAll] = useState(``);

    const textareahandler = (event) => {
        setPost(event.target.value);
    }

    const postHandler = () => {

        const postcount = localStorage.getItem('postcount') || 0;

        let incrementedVal = Number(postcount) + 1;

        localStorage.setItem(`post${incrementedVal}`, post);
        localStorage.setItem('postcount', incrementedVal);

        setViewAll(incrementedVal)

        setPost(``);

    }

    const deleteOnePostHandler = (event) => {

        let totalPost = localStorage.getItem('postcount');

        localStorage.removeItem(`post${totalPost}`)
        localStorage.setItem('postcount', totalPost - 1);
        setViewAll(totalPost - 1)

    }

    const deleteAllPostHandler = (event) => { 
        localStorage.clear();
        setViewAll(0)
    }

    const viewAllHandler = () => {
        setViewAll(localStorage.getItem('postcount'));
    }

    const headerStyle = {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'black',
        color: 'white',
        fontSize: '18px'
    }

    return (
        <div>
            <div className='headerSection' style={headerStyle}>
                <p>Create post and Show</p>
            </div>

            <div className='input-section'>

                <div style={{ 'width': '100%' }}>
                    <textarea
                        onChange={textareahandler}
                        value={post}
                        placeholder='Write it down here '
                    ></textarea>
                </div>

                <div className='buttons'>
                    <button onClick={postHandler}>Post</button>
                    <button onClick={() => setPost(``)}>Reset</button>
                    <button onClick={viewAllHandler}>View all posts</button>
                    <button onClick={deleteOnePostHandler}>Delete one posts</button>
                    <button onClick={deleteAllPostHandler}>Delete all posts</button>
                </div>
            </div>

            <DisplayPost viewed={viewed} />

        </div>
    )
}

export default CreatePost