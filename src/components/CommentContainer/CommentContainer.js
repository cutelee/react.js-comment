 import React, { Component } from 'react';
 import CommentList from '../CommentList/CommentList';
 import CommentWrapper from '../CommentWrapper/CommentWrapper';
 import * as service from '../../services/comment';
 import Button from '../Button/Button';

class CommentContainer extends Component {
  constructor(props) {
    super();

    this.state = {
      postId: 1,
      fetching: false,
      comments: [],
    };
  }

  handleButtonClick = (type) => {
    const postId = this.state.postId;

    if(type === 'button-NEXT') {
      this.fetchCommentInfo(postId + 1);
    } else {
      this.fetchCommentInfo(postId - 1);
    }
  }

  fetchCommentInfo = async (postId) => {
    this.setState({
        fetching: true    // requesting...
    });

    const info = await service.getComments(postId);
    const comments = info.data;

    this.setState({
        postId,
        comments,
        fetching: false   // done!
    });
  }

  componentDidMount() {
    this.fetchCommentInfo(1);
  }

  render() {
    const { postId, fetching, comments } = this.state;
    return (
      <CommentWrapper>
        <CommentList
          postId={postId}
          disabled={fetching}
          comments={comments}
        />
      </CommentWrapper>
    );
  }
}

export default CommentContainer;
