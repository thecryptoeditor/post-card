import React, { useState } from 'react'
import '../style.css'

function CreatePost() {

    const [post, setPost] = useState(``);

    const textareahandler = (event) => {
        console.log(event.target.value);
        setPost(event.target.value);
    }

    const postHandler = () => {

        const postcount = localStorage.getItem('postcount') || 0;

        let incrementedVal = Number(postcount) + 1;

        localStorage.setItem(`post${incrementedVal}`, post);
        localStorage.setItem('postcount', incrementedVal);

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
                    <button>View all posts</button>
                </div>
            </div>
        </div>
    )
}

export default CreatePost