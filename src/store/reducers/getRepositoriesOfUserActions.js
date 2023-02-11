
export const GET_USER_REPOS = "GET_USER_REPOS";
export const getUsersRepos = (user) => ({
    type: GET_USER_REPOS,
    payload: user
})
export const loadUserRepos = (url) => (dispatch) => {
    if(url) {
        fetch(url)
            .then(res => res.json())
            .then(data => dispatch(getUsersRepos(data)))
    }
}
