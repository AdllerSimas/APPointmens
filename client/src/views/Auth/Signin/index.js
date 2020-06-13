import React, {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify'
//import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'
import { GoogleLogin } from 'react-google-login'
import { FaGoogle, FaFacebook } from 'react-icons/fa'
import Footer from '../../../components/Footer/index'
import * as Style from './styles'
import api from '../../../services/api'

import { authenticate, isAuth } from '../../../helpers/auth'



import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';


const SignIn = ({history}) => {
    
    const [formData, setFormData] = useState({
        
        email:"",
        password1: "",
    
    })

    const {email, password1} = formData


    


    //handle change from inputs
    const handleChange = text => e => {
        setFormData({...formData, [text]: e.target.value})
    }

    const sendFacebookToken = async (userID, accessToken) => {
        
        await api.post(`/api/facebooklogin`, {
            userID,
            accessToken
          })
            .then(res => {
    
                informParent(res);
          
            })
            .catch(error => {
            
                console.log('Facebook sign in error', error.response);
          
            });
    };

    const sendGoogleToken = async tokenId => {
        
        await api.post(`/api/googlelogin`, {
        
            idToken: tokenId
        
        }).then(res => {
            informParent(res)
        })
        
        .catch(err => {
            toast.error('google login error')
        })
    }

    //authenticate google and redirect
    const informParent = response => {
    
        authenticate(response, () => {
            if (isAuth()) {
                window.location.replace('/home')
            }
            // isAuth() && isAuth.role === 'admin' ? history.push('/admin') : history.push('/home')
        })
    
    }

    //get response from google
    const responseGoogle = response => {
        
        sendGoogleToken(response.tokenId)
    
    }

    //get response from facebook
    const responseFacebook = response => {
        console.log(response);
        sendFacebookToken(response.userID, response.accessToken)
    };

    //Submit data do backend
    const handleSubmit = async e => {
        
        e.preventDefault()
        
        if(email && password1) {
            
            
                await api.post(`/api/login`, {
                    
                    email, password: password1
                
                }).then( async res => {
                    
                    toast.success(`Hey ${res.data.user.name}, welcome back!`)

                    await authenticate(res, () => {
                        
                        setFormData({
                            ...formData,
                            
                            email:"",
                            password1: "",
                            
                        })
                        console.log('data')
                        
                        
                        
                        //isAuth() && isAuth().role === 'admin' ? history.push('/admin') : history.push('/home')
                    })

                    if (isAuth()) {
                        window.location.replace('/home')
                    }
                      
                    
                    
                    
                    
                    
                
                }).catch(err => {
                    toast.error(err)
                })
        
        } else {
           toast.error('Please, fill all fields') 
        }
    }

    
    return (

        <Style.Container>

           {/* {isAuth() ? <Redirect to='/'/> : null}  */}
           
           <ToastContainer/>

                    <Style.Form>
                        
                        <Style.Title>
                            <h1>
                                APPointments
                            </h1>
                        </Style.Title>
                        
                        <Style.Title>
                            <h2>
                                Sign in
                            </h2>
                            
                        </Style.Title>
                        

                        <form onSubmit={handleSubmit}>
                            
                            <Style.Input>
                                <input  
                                        type="email" 
                                        placeholder="Email" 
                                        onChange={handleChange('email')} 
                                        value={email}
                                />
                            </Style.Input>
                            
                            <Style.Input>
                                <input 
                                        type="password" 
                                        placeholder="Password" 
                                        onChange={handleChange('password1')} 
                                        value={password1}
                                />
                            </Style.Input>
                            
                            <Style.Input>
                                <Link to='/forget'>
                                    Forget Password?
                                </Link>
                            </Style.Input> 
                            
                            <Style.Signin>  
                                <button 
                                    onClick={handleSubmit}
                                    type='submit'
                                    
                                > 
                                    Sign in
                                </button>
                            </Style.Signin>

                            <Style.Signup>  
                                <Link to='/signup'  
                                > 
                                    Sign up
                                </Link>
                            </Style.Signup>
 
                                
                            <Style.SignSocialGoogle>
                                <div>
                                    Sign in with Social Login 
                                </div>
                             
                                <GoogleLogin
                                    clientId = {`${process.env.REACT_APP_GOOGLE_CLIENT}`}
                                    onSuccess = { responseGoogle }
                                    onFailure = { responseGoogle }
                                    cookiePolicy = { 'single_host_origin'}
                                    render = { renderProps => (
                                        <button
                                            onClick = {renderProps.onClick}
                                            disabled = {renderProps.disabled}
                                            className = ""
                                        >
                                            Sign in with Google &nbsp; <FaGoogle/>
                                        </button>
                                    )}
                                >
                                </GoogleLogin>
                                
                            </Style.SignSocialGoogle> 

                            <Style.SignSocialFacebook>
                            <FacebookLogin
                                appId={`${process.env.REACT_APP_FACEBOOK_CLIENT}`}
                                autoLoad={false}
                                callback={responseFacebook}
                                render= { renderProps => (

                                            <button onClick={renderProps.onClick}>
                                                Sign in with Facebook &nbsp; <FaFacebook/>
                                            </button>
                                        
                                        )}
                                />
                            </Style.SignSocialFacebook>
                            
                        </form>

                    </Style.Form>  
            
                <Footer/>
            
        </Style.Container>
           
    )
}



export default SignIn


