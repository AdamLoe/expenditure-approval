import React from "react";

import presetList from "../requestPresets";

export default ({currentPreset, setRequestType}) => {
	return (
		<select
			className="RequestType"
			value={currentPreset}
			onChange={setRequestType}
		>
			{Object.keys(presetList).map( preset =>
				<option
					value={preset}
					id={preset}
				>
					{ preset }
				</option>
			)}
		</select>
	);
};

