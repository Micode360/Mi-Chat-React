import axios from "axios";
import Cookies from 'universal-cookie';

const cookies = new Cookies();



const signUp = (user) => {
  return axios.post("http://localhost:8000/chat/auth/signup", user)
  .then(response =>{
    if(response.data.token)cookies.set("usertkn", response.data.token,{ path: "/" },{ httpOnly: true })
    return response.data;
  })
}

const signIn = (user) => {
  return axios.post("http://localhost:8000/chat/auth/signin", user)
  .then(response =>{
    if(response.data.token)cookies.set("usertkn", response.data.token,{ path: "/" },{ httpOnly: true })
    return response.data;
  })
}

const confirmAccount = (token) => {
  return axios.post("http://localhost:8000/chat/auth/confirm/account/" + token)
  .then(response =>{
    return response.data;
  })
}

const forgotPassword = (email) => {
  return axios.post("http://localhost:8000/chat/auth/forgotpassword", email)
  .then(response =>{
    return response.data;
  })
}

const resetPassword = ({token, password}) => {
  return axios.post("http://localhost:8000/chat/auth/resetpassword/" + token, { password })
  .then(response =>{
    return response.data;
  })
}

const logOut = () => {
  return cookies.remove('usertkn');
};

const authService = {
  signUp,
  logOut,
  signIn,
  forgotPassword,
  confirmAccount,
  resetPassword
};

export default authService;