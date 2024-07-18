import React from 'react';
import Card from './Card';

function DisplayPost() {

    let listOfPost = [
        { title: '1lorem ipsum dolor sit amet, consectetur adip'},
        { title: '2lorem ipsum dolor sit amet, consectetur adip'},
        { title: '3lorem ipsum dolor sit amet, consectetur adip'},
        { title: '4lorem ipsum dolor sit amet, consectetur adip'}
    ];

  return (
    <div>
        <div className='listOfPost'>
            <p>Here is the all the posts: </p>
            {listOfPost.map((i, idx) => {



                return <Card key={idx} title={`Post: ${idx + 1}`} content={i.title} />
            })}
        </div>
    </div>
  )
}

export default DisplayPost;