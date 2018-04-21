import React from "react";
import ReactDOM from "react-dom";

export default class Attribute extends React.Component {
	constructor(props) {
		super(props);
	}

	onClick = (e) => {
		console.log("RENDER: Attribute");
		let rect = ReactDOM.findDOMNode(this).attributes;
		console.log("rect", rect);
		this.props.onValueChange(e);
	};

	render() {
		let { keyProp, value, isRequired, onKeyChange, onValueChange, deleteAttribute } = this.props;

		return (
			<div className="Attribute">
				{ isRequired ||
					<div className="DeleteAttribute">
						<img
							onClick={this.onClick}
							src="http://localhost:2002/exit.png"
						/>
					</div>
				}
				<input type="text"
					   value={keyProp}
					   onChange={onKeyChange}
				/>
				<input type="text"
					   onChange={this.onClick}
					   value={value}
			  	 />
			</div>
		);
	}
}




var rect = ReactDOM.findDOMNode(this);
console.log("rect", rect);


/*

 import React from "react";

 export default ({
 keyProp, value, isRequired,
 onKeyChange, onValueChange, deleteAttribute
 }) => {
 console.log('RENDER: Attribute');

 return (
 <div className="Attribute">
 { isRequired ||
 <div className="DeleteAttribute">
 <img
 onClick={deleteAttribute}
 src="http://localhost:2002/exit.png"
 />
 </div>
 }
 <input type="text"
 value={keyProp}
 onChange={onKeyChange}
 />
 <input type="text"
 value={value}
 onChange={onValueChange}
 />
 </div>
 );
 };


 */
