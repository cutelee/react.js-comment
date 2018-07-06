import React from 'react';
import './Comment.css';

const Comment = ({name, body}) => {
  return (
    <div className='Comment'>
      <p>
        <b>{name}</b> {body}
      </p>
    </div>
  );
}

export default Comment;
