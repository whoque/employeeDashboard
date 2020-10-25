import loginData from '../dataFile/login.json';

const initialState = {
    loggedIn: false,
    employeeData: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            if(action.payload &&
                action.payload.username === loginData.username &&
                action.payload.password === loginData.password) {
                return {
                    ...state,
                    loggedIn: true
                }
            }
            return state
        default:
            return state
    }
}