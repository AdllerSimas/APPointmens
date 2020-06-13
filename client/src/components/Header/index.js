import React, { useState, useEffect } from 'react';
import * as Style from './styles'
import { FaBell } from 'react-icons/fa'

import logo from '../../assets/logo.png'
import { Link, Redirect } from 'react-router-dom'

import api from '../../services/api'
import isConnected from '../../utils/isConnected'




function Header({ clickNotification }) {
  
  

  async function SignOut() {
    
    localStorage.removeItem('@APPointments/user')
    window.location.replace('/');
    
  }
  
  return (

      <Style.Container>
          
          <Style.LeftSide>
            <img src={logo} alt="Logo"/>
          </Style.LeftSide>
          
          <Style.RightSide>

             <Link to='/home'>MY TASKS</Link>
            
             <Link to='/task'>ADD NEW TASK</Link>
             
             { !isConnected ? null 
                            
                            : 
                            
                            <>
                            <button onClick={SignOut} type='button'>SIGN OUT</button>
                
                            </> 
              }
             
          </Style.RightSide>
          
      </Style.Container>
  )
}

export default Header;
