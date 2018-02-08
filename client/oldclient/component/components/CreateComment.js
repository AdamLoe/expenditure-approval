import React from 'react';

class CreateComment extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="CreateCommentContainer">
                <textarea className="CreateCommentInput">
                </textarea>
            </div>
        )
    }
}

module.exports = CreateComment;