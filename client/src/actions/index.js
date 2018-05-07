export const nextPage = () => {
	return {
		type: "NextPage"
	};
};

export const prevPage = () => {
	return {
		type: "PrevPage"
	};
};

export const resetPage = () => {
	return {
		type: "resetPage"
	};
};

export const logout = () => {
	return {
		type: "Logout"
	};
};

export const gotoSettings = () => {
	return {
		type: "gotoSettings"
	};
};

export const exitSettings = () => {
	return {
		type: "exitSettings"
	};
};

export const gotoRequests = () => {
	return {
		type: "gotoRequests"
	};
};

export const gotoUsers = () => {
	return {
		type: "gotoUsers"
	};
};

export const toggleAdmin = () => {
	return {
		type: "toggleAdmin"
	};
};

export const toggleUserDropdown = () => {
	return {
		type: "toggleUserDropdown"
	};
};

export const toggleRequest = (index) => {
	return {
		type: "toggleRequest",
		index: index
	};
};

export const toggleShowCards = () => {
	return {
		type: "toggleShowCards"
	};
};

export const showCreateRequest = () => {
	return {
		type: "showCreateRequest"
	};
};

export const hideCreateRequest = () => {
	return {
		type: "hideCreateRequest"
	};
};

export const submitCreateRequest = () => {
	return {
		type: "submitCreateRequest"
	};
};


