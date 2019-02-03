import React from "react";

class CreateComment extends React.Component {
  state = {
    comment: ""
  };
  submit = () => {
    let { submitComment } = this.props;
    let { comment } = this.state;
    submitComment(comment);
  };
  onInput = e => {
    this.setState({
      comment: e.target.value
    });
  };
  onClick = () => {
    this.submit();
  };
  render() {
    return (
      <div className="CreateComment">
        <textarea onInput={this.onInput} />
        <button className="Submit" onClick={this.onClick}>
          Submit
        </button>
      </div>
    );
  }
}
export default ({ comments, submitComment, approveRequest, rejectRequest }) => {
  console.log("Got Comments", comments);
  return (
    <div className="RequestRightSide">
      <div className="CommentContainer">
        {comments.map(comm => {
          let date = comm[0];
          let message = comm[1];
          let author = comm[2];
          return (
            <div className="Comment">
              <div className="CommentContent">
                <div className="Author">{author}</div>
                <div className="Message">{message}</div>
              </div>
              <div className="CommentDate">{date}</div>
            </div>
          );
        })}
      </div>
      <CreateComment submitComment={submitComment} />
      <div className="UpdateRequest">
        <button className="Accept" onClick={approveRequest}>
          Approve
        </button>
        <button className="Reject" onClick={rejectRequest}>
          Reject
        </button>
      </div>
    </div>
  );
};
