export const registerUser = (userData) => dispatch => {
    axios.post('/api/users/register', newUser)
            .then((res) => console.log(res.data))
            .catch((err) => this.setState({errors: err.response.data}))
}