import React from "react";

export default ({
	keyProp, value, isRequired, onKeyChange, onValueChange, deleteAttribute
}) => {
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
				onChange={onKeyChange}
				value={keyProp}
			/>
			<input type="text"
				onChange={onValueChange}
				value={value}
			/>
		</div>
	);
};


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