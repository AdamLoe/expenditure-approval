import React from "react";
import {connect} from "react-redux";

export default ({ toggleShowCards, showCards}) => {
	return (
		<div className="RequestFilters">
			<div className="SortFilters">
				<button>
					<h4>Approver</h4>
				</button>
				<button>
					<h4>Property</h4>
				</button>
				<button>
					<h4>Status</h4>
				</button>
			</div>
			<div className="ShowFilters">
				<button
					disabled={!showCards}
					onClick={toggleShowCards}
				>
					<h4>Rows</h4>

				</button>
				<button
					disabled={showCards}
					onClick={toggleShowCards}
				>
					<h4>Cards</h4>
				</button>
			</div>

		</div>
	)
}
