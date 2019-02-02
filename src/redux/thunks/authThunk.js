import signUp from '../actions/authActions';

const apiUrl = 'http://127.0.0.1:5000/v1/auth/signup';

const fetchData = (dispatch, user) => {
  return fetch(apiUrl, {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...user }),
  }).then(res => res.json())
    .then(response => dispatch(signUp(response)))
    .catch(err => console.log(err));
};

export function signUpUserThunk(user) {
  return (dispatch) => { fetchData(dispatch, user); };
}

export default signUpUserThunk;
