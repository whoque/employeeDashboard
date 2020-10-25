import history from '../history';

export const loginAction = (username, password) => (dispatch, getState) => {
    dispatch({
        type: 'LOGIN',
        payload: {username, password}
    })
    if(getState().store.loggedIn) {
        history.push('/employee')
    }
}