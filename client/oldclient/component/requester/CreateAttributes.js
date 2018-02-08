var React = require('react');
var CreateAttribute = require('./CreateAttribute.js');

window.id = 7;
class CreateAttributes extends React.Component {
    constructor(props) {
        super(props);
        console.log('Creating Attributes');
        this.state = {
            data: [[
                0, 'VendorName', ''
            ],[
                1, 'VendorComments', ''
            ],[
                2, 'Description', ''
            ],[
                3, 'Price', ''
            ],[
                4, 'Shipping', ''
            ],[
                5, 'Installation', ''
            ],[
                6, 'tax', ''
            ]]
        };

        this.handleCreate = this.handleCreate.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleCreate() {

    }
    handleEdit(id, key, value) {
        console.log('Handle Edit', id, '  ', key, '  ', value);
        var oldData = this.state.data;
        oldData[id] = [id, key, value];
        // Update state with filter
        this.setState({
            data: oldData
        });
        this.props.handleAttributes(oldData);
    }

    handleDelete(id) {
        const remainder = this.state.data.filter((todo) => {
            if(todo.id !== id) return todo;
        });
        // Update state with filter
        this.setState({
            data: remainder
        });
    }

    render() {
        console.log('Rendering attributes', this.state.data);
        return (
            <div className="CreateAttributesContainer">
                <div className="CreateAtrributesHeader">
                    <h1> More Details </h1>
                    <h2> Leave empty if not applicable. </h2>
                </div>
                {this.state.data.map( attribute =>
                    <CreateAttribute
                        key={attribute.id}
                        info={attribute}
                        handleEdit={this.handleEdit}
                        handleDelete={this.handleDelete}
                    />
                )}
            </div>
        )
    }
}

module.exports = CreateAttributes;