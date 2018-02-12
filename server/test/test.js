module.exports = (functions) => {
  console.log('test', functions);
  newState = {
    body: 'New Start achieved'
  };
  functions.changeState(newState);
  console.log(functions.getState());
}
