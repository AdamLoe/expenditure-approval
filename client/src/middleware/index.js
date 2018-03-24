const middleware = store => next => action => {
  if (action.type === "LOGIN") {
    console.log('Middleware detected a login function happening');
  }

  sessionStorage.setItem("redux-state", JSON.stringify(store.getState())  );
  return next(action);
}

export default middleware;
