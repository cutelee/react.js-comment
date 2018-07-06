import React from 'react';
import './CommentWrapper.css';

const CommentWrapper = ({children}) => {
  return (
    <div className='CommentWrapper'>
      {children}
    </div>
  );
}

export default CommentWrapper;
