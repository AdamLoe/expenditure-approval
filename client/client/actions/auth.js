export function login(username, password) {
    return (dispatch) {
        return fetch('https://example.com/value')
            .then(response => response.json())
            .then(json => {
                return store.dispatch(loggedIn(json.value))
            });
    };
}

export function loggedIn(data) {
    return {
        type: 'Logged_In',
        data: data
    }
}

export function Logged_In () {
    if type == 'LOGGED IN' {

    }
}