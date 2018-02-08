var React = require('react');

class CreateAttribute extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.info[0],
            key: this.props.info[1],
            value: this.props.info[2]
        };

        this.handleKeyChange = this.handleKeyChange.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleKeyChange(e) {
        this.setState({
            key: e.target.value
        });
        this.handleEdit( e.target.value, this.state.value);
    }
    handleValueChange(e) {
        this.setState({
            value: e.target.value
        });
        this.handleEdit(this.state.key, e.target.value);
    }
    handleEdit(key, value) {
        this.props.handleEdit(this.state.id, key, value);
    }

    handleDelete() {
    }

    render() {
        console.log('Rendering Attribute', this.state);
        return (
            <div className="Attribute">
                <div className="CreateAttributeKey">
                    <h2>
                        <input
                            value={this.state.key}
                            onChange={this.handleKeyChange} />
                    </h2>
                </div>
                <div className="CreateAttributeValue">
                    <input
                        value={this.state.value}
                        onChange={this.handleValueChange} />
                </div>
            </div>
        )
    }
}

module.exports = CreateAttribute;