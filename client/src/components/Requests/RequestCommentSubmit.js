import React from "react";

export default ({ comments, submitComment, approveRequest, rejectRequest }) => {

	console.log("Got Comments", comments);
	return (
		<div className="RequestRightSide">
			<div className="CommentContainer">
				{ comments.map(comm =>
					<div>
						{ comm }
					</div>
				)}
			</div>
			<div className="CreateCommentContainer">
				<textarea />
				<div className="RequestSubmit RequestButton"
					 onClick={submitComment} >
					Submit
				</div>
			</div>
			<div className="SubmitContainer">
				<div className="RequestAccept RequestButton"
					onClick={approveRequest}>
						Approve
				</div>
				<div className="RequestReject RequestButton"
					onClick={rejectRequest}>
						Reject
				</div>
			</div>
		</div>
	);
};
