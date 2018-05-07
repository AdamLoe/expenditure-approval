import React from "react";

import RequestFilters from "./Requests/RequestFilters";
import CreateRequestSwitch from "./CreateRequest/CreateRequestSwitch";
import RequestPanel from "./Requests/RequestPanel";
import Pagination from "./Other/Pagination";

export default () => {
	return (
		<div className="UserPanel">
			<CreateRequestSwitch />
			<RequestFilters/>
			<RequestPanel />
			<Pagination />
		</div>
	);
};