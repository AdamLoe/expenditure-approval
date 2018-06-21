import React from "react";




export default ({ comments, submitComment, approveRequest, rejectRequest }) => {

	console.log("Got Comments", comments);
	return (
		<div className="RequestRightSide">
			<div className="CommentContainer">
				{ comments.map(comm => {
					let date = comm[0];
					let message = comm[1];
					let author = comm[2];
					return (
						<div className="Comment">
							<div className="CommentContent">
								<div className="Author">
									{ author }
								</div>
								<div className="Message">
									{ message }
								</div>
							</div>
							<div className="CommentDate">
								{ date }
							</div>
						</div>
					);
				}
				)}
			</div>
			<div className="CreateComment">
				<textarea />
				<button className="Submit"
					onClick={submitComment} >
					Submit
				</button>
			</div>
			<div className="UpdateRequest">
				<button className="Accept"
					onClick={approveRequest}>
						Approve
				</button>
				<button className="Reject"
					onClick={rejectRequest}>
						Reject
				</button>
			</div>
		</div>
	);
};
