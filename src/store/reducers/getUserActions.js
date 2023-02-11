export const GET_USER = "GET_USER";


export const getUsers = (user) => ({
    type: GET_USER,
    payload: user
})
export const loadUser = (url) => (dispatch) => {
    if(url) {
        fetch(url)
            .then(res => res.json())
            .then(data => dispatch(getUsers(data)))
    }else{ /* empty */ }
}
