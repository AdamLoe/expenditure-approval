import { updateRequestFilters } from "./requests";
import { updateAdminFilters } from "./admin";

let pageZeroMessage = "You cant go below zero";

export const pageZeroError = () => {
  return {
    type: "PageZeroError",
    notification: pageZeroMessage,
    showNotification: "modal"
  };
};

export const changePage = val => {
  return (dispatch, getState) => {
    let state = getState();
    let pageNum = state.requests.filters.pageNum;
    let showAdminPanel = state.navigation.showAdminPanel;

    let updateFilters = updateRequestFilters;
    if (showAdminPanel) {
      updateFilters = updateAdminFilters;
    }

    if (pageNum + val > 0) {
      dispatch(updateFilters("pageNum", pageNum + val));
    } else {
      dispatch(pageZeroError());
    }
  };
};

export const nextPage = () => {
  return dispatch => {
    dispatch(changePage(1));
  };
};

export const prevPage = () => {
  return dispatch => {
    dispatch(changePage(-1));
  };
};
