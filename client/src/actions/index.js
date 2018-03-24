export const example = () => {
  console.log('example action called');
  return {
    type: 'EXAMPLE',
    data: 'BULLSHIT'
  }
}

export const loginAction = (usr, pasHash) => {
  return {
    type: 'LOGIN',
    usr: usr,
    pas: pasHash
  }
}
