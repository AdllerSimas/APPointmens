import React, {useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import jwt from 'jsonwebtoken'
import { authenticate, isAuth } from '../../../helpers/auth'

import api from '../../../services/api'
import { Redirect, Link } from 'react-router-dom'

import * as Style from './styles'


import Footer from '../../../components/Footer/index'

export default function Activation({ match }) {

    const [formData, setFormData] = useState({

        name: "",
        token:"",
        show: true,
        
    })

    
    useEffect(() => {
    
        let token = match.params.token;
        let { name } = jwt.decode(token);
    
        if (token) {
          setFormData({ ...formData, name, token });
        }
        console.log('teste')
        console.log(token, name);
    }, [match.params]);


    const { name, token, show } = formData;
    
    
    const handleSubmit = async e => {
        
        e.preventDefault();
    
    await api.post(`/api/activation`, {
                token
            }).then(res => {
                    setFormData({
                    ...formData,
                    show: false
                    });
                toast.success(res.data.message);
            })
            .catch(err => {
                toast.error(err.response.data.errors);
            });
    };

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
                            Welcome John!
                        </h2>
                    </Style.Title>

                        <form  onSubmit={handleSubmit}>
                                  
                            <Style.Signup>
                                <button 
                                    type='submit'
                                    
                                > 
                                    Click to Activate Account
                                </button>
                            </Style.Signup>

                            <Style.Signin>
                                < Link to="/"   
                                >
                                    Sign in!
                                </Link>
                            </Style.Signin>

                        </form>
                  
                </Style.Form>
            <Footer/>   
        </Style.Container>
    )
}

