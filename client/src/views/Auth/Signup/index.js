import React, {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { authenticate, isAuth } from '../../../helpers/auth'

import { Redirect, Link } from 'react-router-dom'

import api from '../../../services/api'

import * as Style from './styles'


import Footer from '../../../components/Footer/index'

export default function Signup() {

    const [formData, setFormData] = useState({

        name: "",
        email:"",
        password1: "",
        password2:""
    
    })

    const {email, name, password1, password2} = formData
    
    //handle change from inputs
    const handleChange = text => e => {
    
        setFormData({...formData, [text]: e.target.value})
    
    }
    
    //Submit data do backend
    const handleSubmit = async e => {
        
        e.preventDefault()
        
        if(name && email && password1) {
            
            if(password1 === password2) {
                await api.post(`/api/register`, {
                    name, email, password: password1
                
                //teste register insomnia http://localhost:5000/api/register
                //erro no console de post  POST http://localhost:3000/undefined/register

                }).then(res => {
                    
                    setFormData({
                        ...formData,
                        name: "",
                        email:"",
                        password1: "",
                        password2:""
                    
                    })
                    
                    toast.success(res.data.message)
                    
                
                }).catch(err => {
                    console.log('erro na requisição ao BD')
                    toast.error(err.response.data.errors)
                })
        
            } else {
                toast.error('Passwords do not matches!')
            }
        
        } else {
           toast.error('Please, fill all fields') 
        }
    }

    


    return (
        <Style.Container>

           {isAuth() ? <Redirect to='/'/> : null} 
           <ToastContainer/>
           
                <Style.Form>
                    
                    <Style.Title>
                        <h1 >
                            APPointments
                        </h1>
                    </Style.Title>
                    
                    <Style.Title>
                        <h2 >
                            Sign Up
                        </h2>
                    </Style.Title>

                        <form  onSubmit={handleSubmit}>
                                  
                            <Style.Input>
                                <input  
                                        type="text" 
                                        placeholder="Name" 
                                        onChange={handleChange('name')} 
                                        value={name}
                                />
                            </Style.Input>
                            
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
                                <input  
                                        type="password" 
                                        placeholder="Confirm Password" 
                                        onChange={handleChange('password2')} 
                                        value={password2}
                                />
                            </Style.Input>

                            <Style.Signup>
                                <button 
                                    type='submit'
                                    
                                > 
                                    Register
                                </button>
                            </Style.Signup>

                            <Style.Signin>
                                < Link to="/"   
                                >
                                    Sign in
                                </Link>
                            </Style.Signin>

                        </form>
                  
                </Style.Form>
            <Footer/>   
        </Style.Container>
    )
}

