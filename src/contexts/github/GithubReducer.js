const githubReducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                loading: true
            }
        case "GET_USERS":
            return {
                ...state,
                users: action.payload,
                loading: false
            };
        case "GET_USER_AND_REPOS":
            return {
                ...state,
                user: action.payload.user,
                repos: action.payload.repos,
                loading: false
            }
        case "CLEAR_RESULTS":
            return {
                ...state,
                users: [],
                loading: false
            }
        default:
            return state;
    }
}

export default githubReducer;