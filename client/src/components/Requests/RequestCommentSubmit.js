import React from "react";

export default ({ comments, submitComment, approveRequest, rejectRequest }) => {

	console.log('Got Comments', comments);
	return (
		<div>
			{ comments.map(comm =>
				<div>
					{ comm }
				</div>
			)}
			<textarea />
			<button onSubmit={submitComment} />
			<button onSubmit={approveRequest}>
				Approve
			</button>
			<button onSubmit={rejectRequest}>
				Reject
			</button>
		</div>
	)
}
