import React, { useState, useEffect } from 'react'
import {ToastContainer, toast } from 'react-toastify'
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'
import api from '../../../services/api'
import * as Style from './styles'
import styled from 'styled-components'

import Footer from '../../../components/Footer'


export default function NewPass({match}) {
    
    const [formData, setFormData ] = useState({
    
        password1: "",
        password2: "",
        token: ""
    })

    const { password1, password2, token} = formData

    useEffect(() => {
        
        let token = match.params.token
        
        if(token) {
            setFormData({...formData, token})
        }

    },[])

    const handleChange = text => e => {

        setFormData({...formData, [text]: e.target.value})
    
    }

    const handleSubmit = async e => {
        
        e.preventDefault()

        if((password1 === password2) && password2 && password1) {
            
            await api.put(`/api/password/reset`, {
            
                newPassword: password1,
                resetPasswordLink: token
            
            }).then(res => {
            
                setFormData({...formData, password1:"", password2:""})
                toast.success(res.data.message)
            
            }).catch(err => {
                alert(err)
                toast.error("Something is wrong, try again!")
            
            })
        
        } else {
            
            toast.error("Verify your passwords!")
        
        }
    }

    return (

        <Style.Container>

           
           <ToastContainer/>
           
                <Style.Form>
                    
                    <Style.Title>
                        <h1 >
                            APPointments
                        </h1>
                    </Style.Title>
                    
                    <Style.Title>
                        <h2 >
                            New Password
                        </h2>
                    </Style.Title>

                        <form  onSubmit={handleSubmit}>
                                  
                            <Style.Input>
                                <input  
                                        type="password" 
                                        placeholder="New Password" 
                                        onChange={handleChange('password1')} 
                                        value={password1}
                                />
                            </Style.Input>

                            <Style.Input>
                                <input  
                                        type="password" 
                                        placeholder="Confirm New Password" 
                                        onChange={handleChange('password2')} 
                                        value={password2}
                                />
                            </Style.Input>

                            <Style.Signup>
                                <button 
                                    type='submit'
                                    
                                > 
                                    New Password
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
