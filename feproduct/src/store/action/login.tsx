import * as action from '../action/actiontypes';
import * as actionTypes from "./actiontypes";


export const loginAppAdmin = (username:string,password:string) => {
    return {
        type: actionTypes.LOGIN_APP_ADMIN,
        username: username,
        password: password
    }
}
export const loginAppUser = (username:string,password:string) => {
    return {
        type: actionTypes.LOGIN_APP_USER,
        username: username,
        password: password
    }
}

export const signup = (name:string,fullname:string,username:string,
    password:string,phone:string,city:string,gender:string) => {
    return {
        type: actionTypes.SIGNUP_APP_USER,
        name: name,
        fullname: fullname,
        username: username,
        password: password,
        phone: phone,
        city: city,
        gender: gender,
    }
}
export const statusSignup = (title: any,status: boolean) => {
    return {
        type: actionTypes.STATUS_POST_SIGNUP,
        title: title,
        status: status
    }
}
export const authSuccess = (token: any,isLogin:boolean) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        isLogin: isLogin
    }
}
export const authSuccessUser = (tokenUser: any,isLoginUser:boolean) => {
    console.log("tokenUser",tokenUser,isLoginUser);
    return {
        type: actionTypes.AUTH_SUCCESS_USER,
        tokenUser: tokenUser,
        isLoginUser: isLoginUser
    }
}
export const isTokenauth = (istoken:boolean) => {
    return {
        type: actionTypes.IS_AUTH_SUCCESS,
        isToken: istoken,
    }
}
export const logoutSucceed= () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}
export  const logout = () => {
    return {
        type:actionTypes.AUTH_INITITATE_LOGOUT
    }
}
export  const logoutUser = () => {
    return {
        type:actionTypes.AUTH_INITITATE_LOGOUT_USER
    }
}
export const checkAuthTimeOut = (expirationTime:any) => {
    return {
        type:action.AUTH_CHECK_TIMEOUT,
        expirationTime: expirationTime
    }
}
export const setAuthRedirectPath = (path:string) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    }
  }
