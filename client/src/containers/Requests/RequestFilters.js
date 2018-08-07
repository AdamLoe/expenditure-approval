import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { updateRequestFilters } from "../../actions/requests";

let getUsableFilters = (filters) => {
	// Get rid of filters that arent object, i.e. filters we dont want changed
	// Also converts to array for React
	let usable = [];
	for (let i in filters) {
		if (typeof filters[i] === "object") {
			usable.push(filters[i]);
		}
	}
	return usable;
};
let RequestFilters = ({
	filters,
	update,
	refresh
}) => {
	//console.log("RENDER:ReqFilters", filters);

	let usable = getUsableFilters(filters);
	console.log("usable", usable);

	return (
		<div className="RequestFilters">
			<div className="Sort">
				{
					usable.map((filter) => (
						<select
							value={filter.value}
							onChange={(e) => update(filter.name, e.target.value)}
							key={filter.name}
						>
							{
								filter.options.map((option) => (
									<option
										className="option"
										value={option.value}
										key={option.value}
									>
										{ option.key }
									</option>
								))
							}
						</select>
					))
				}
			</div>


			<div
				onClick={refresh}
				className="refresh"
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
					<path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"/>
					<path d="M0 0h24v24H0z" fill="none"/>
				</svg>
			</div>
		</div>
	);
};


let mapStateToProps = (state) => {
	//console.log("MAPSTA:ReqFilters", state.requests.filters);
	return {
		filters: state.requests.filters //state.requests.filters
	};
};

//changeApprover: (e) => dispatch(updateRequestFilters("Approver", e.target.value)),
let mapDispatchToProps = (dispatch) => {
	return {
		update: bindActionCreators(updateRequestFilters, dispatch),
		refresh: (e) => dispatch(updateRequestFilters())
	};
};


export default connect(mapStateToProps, mapDispatchToProps)(RequestFilters);