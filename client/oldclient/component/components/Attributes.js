import React from 'react';

class Attributes extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="attributesContainer">
                { this.props.info.attributes.map( attribute =>
                    <div className="attribute">
                        <div className="attributeKey">
                            {attribute[1]}
                        </div>
                        <div className="attributeValue">
                            {attribute[2]}
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

module.exports = Attributes;