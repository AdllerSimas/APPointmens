import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

// App
import Home from '../views/Home'
import Task from '../views/Task'
//import QrCode from '../views/QrCode'





// Auth
import Signin from '../views/Auth/Signin/'
import Signup from '../views/Auth/Signup/'
import Activation from '../views/Auth/Activation/'
import Forget from '../views/Auth/Forget/'
import NewPass from '../views/Auth/NewPass'

export default function Routes(){
    return (
        
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={Signin}/>
                    <Route path='/signup' exact component={Signup}/>
                    <Route path='/users/activate/:token' exact component={Activation}/>
                    <Route path='/forget' exact component={Forget}/>
                    <Route path='/users/password/reset/:token' exact component={NewPass}/>
                    
                    <Route path='/home' exact component={Home}/>
                    <Route path='/task' exact component={Task}/>
                    <Route path='/task/:id' exact component={Task}/>
                    {/* <Route path='/qrcode' exact component={QrCode}/> */}
                </Switch>
            </BrowserRouter>
        
    )
}