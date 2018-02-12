exports.state = {
  'body': null,
  'finished': false,
  'path': '/'
}

exports.setState = (event, context) => {
  state.path = event.path;
}

exports.changeState = (newState) => {
  state = newState
}

exports.getState = () => {
  return state;
}

exports.use = (path, bool, func) => {
  if (!state.finished && checkPath(path) && bool()) {
    func(exports);
  }
}

function checkPath(path) {
  // Check the path here
  return true;
}
