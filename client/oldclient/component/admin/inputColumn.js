/*
    Takes props
    id, key, currValue
    Gives us input column
    will call this.props.update(id, key, newValue);
 */

import React from 'react';

class inputColumn extends React.Component {
    constructor(props) {
        console.log('User Constructed');
        super(props);
        this.state = {
            value: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    handleSubmit() {
        this.props.update(this.props.id, this.props.key, this.state.value);
    }

    render() {
        console.log('Rendering input column');
        return (
            <div className="inputColumn">
                <input placeholder={this.props.value} onChange={this.handleChange}/>
                <button className="inputColumnButton" onClick={this.handleSubmit}/>
            </div>
        )
    }
}

module.exports = inputColumn;
