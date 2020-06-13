import React, {useState} from 'react'

import { ToastContainer, toast } from 'react-toastify'
import { authenticate, isAuth } from '../../../helpers/auth'
import { Redirect, Link } from 'react-router-dom'
import api from '../../../services/api'
import * as Style from './styles'
import styled from 'styled-components'

import Footer from '../../../components/Footer/'

export default function Forget({history}) {

    const [formData, setFormData] = useState({
        email: "",
        textChange:'Submit'
    })

    const {email, textChange} = formData
    
    //handle change from inputs
    const handleChange = text => e => {
        setFormData({...formData, [text]: e.target.value})
    }
    
    //Submit data do backend
    const handleSubmit = async e => {
        
        e.preventDefault()
        
        if(email) {
            
            setFormData({...formData, textChange:'Submitting'})
                
                await api.put(`/api/password/forget`, {
                
                    email
                   
                }).then(res => {
                    
                    setFormData({
                        ...formData,
                        email: "",
                
                    })
                    
                    toast.success('Please, check your email!')
                
                }).catch(err => {
                    console.log(err)
                    //toast.error(err.response.data.error)
                })
        
        } else {
           toast.error('Please, fill the email field') 
        }
    }

    


    return (
        <Style.Container>

           { isAuth() ? <Redirect to='/'/> : null } 
           <ToastContainer/>
           
                <Style.Form>
                    
                    <Style.Title>
                        <h1 >
                            APPointments
                        </h1>
                    </Style.Title>
                    
                    <Style.Title>
                        <h2 >
                            Forget Password
                        </h2>
                    </Style.Title>

                        <form  onSubmit={handleSubmit}>
                                  
                            <Style.Input>
                                <input  
                                        type="email" 
                                        placeholder="Email" 
                                        onChange={handleChange('email')} 
                                        value={email}
                                />
                            </Style.Input>

                            <Style.Signup>
                                <button 
                                    type='submit'
                                    
                                > 
                                    Submit
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

