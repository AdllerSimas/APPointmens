import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom'
import * as Style from './styles'
import {format} from 'date-fns'

import api from '../../services/api'
import isConnected from '../../utils/isConnected'

import TypeIcons from '../../utils/typeicons'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { setHours } from 'date-fns';
import { isAuth } from '../../helpers/auth'

function Task({match}) {

    // const [lateTask, setLateTask] = useState()
    const [type, setType] = useState()
    const [id, setId] = useState()
    const [done, setDone] = useState(false)
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [date, setDate] = useState()
    const [time, setTime] = useState()
    // const [macaddress, setMacaddress] = useState('11:11:11:11:11:11')
    const [redirect, setRedirect] = useState(false)

    // async function lateTaskCount() {
    //     await api.get(`/task/filter/late/11:11:11:11:11:11`)
    //       .then(response => {
    //           setLateTask(response.data.length)
    //     })
    // }

    async function LoadTask() {        
        await api.get(`/task/${match.params.id}`)
                .then(response => {
                    setType(response.data.type)
                    setTitle(response.data.title)
                    setDescription(response.data.description)
                    setDate(format(new Date(response.data.when), 'yyyy-MM-dd'))
                    setTime(format(new Date(response.data.when), 'HH:mm'))
                    setDone(response.data.done)
                    
                })
    }

    async function Save() {

        if (isAuth()) {

        if(!title) {
            return alert("What's the name of task?")
        } else if (!description) {
            return alert("What's the description of task?")
        } else if (!type) {
            return alert('Select a icon task!')
        } else if (!date) {
            return alert('Select the date of task!')
        } else if (!time) {
            return alert('Select the time of task!')
        }


        if(match.params.id) {
            await api.put(`/task/${match.params.id}`, {
                macaddress: isConnected.email,
                done,
                type,
                title,
                description,
                when: `${date}T${time}:00.000`
            }).then(() => {
                setRedirect(true)
            })
        }

        await api.post('/task', {
            macaddress: isConnected.email,
            type,
            title,
            done,
            description,
            when: `${date}T${time}:00.000`
        }).then(() => {
            setRedirect(true)
        })

        } else {

            setRedirect(true)
        
        }
    
    }
    
    useEffect(() => {
        if(!isConnected) {
            setRedirect(true)
        }
        LoadTask()
    }, [])

    async function Remove() {
        const res = window.confirm('Do you want to remove the task?')
        
        if(res === true) {
            await api.delete(`/task/${match.params.id}`)
                .then(() => {
                    setRedirect(true)
                }) 
        } else {
            setRedirect(true)
        }
        
        
    }

    return (
            <Style.Container>
                {redirect && <Redirect to='/home'/> }
                <Header/>
                <Style.Form>
                    
                    <Style.Input>
                        <span> Name of Task</span>
                        <input type='text' placeholder='Name of Task...' onChange={e => setTitle(e.target.value)} value={title}/>
                    </Style.Input>

                    <Style.TextArea>
                        <span>Description</span>
                        <textarea rows={3} type='textarea' placeholder='Description of Task...' onChange={e => setDescription(e.target.value)} value={description}/>
                    </Style.TextArea>

                    <Style.TypeIcons>
                        <Style.Input>
                            <span>Select a icon</span>
                        </Style.Input>
                        {
                            TypeIcons.map((icon, index) => (
                                (index > 0) &&
                                <button type='button' onClick={() => {setType(index)}}>
                                     <img src={icon} alt='Type of Task' className={type && type != index && 'inative'}/>
                                </button>    
                            ))
                        }    
                    </Style.TypeIcons>
                    
                    <Style.When>
                        <span>Date</span>
                        <input type='date' placeholder='Date...' onChange={e => setDate(e.target.value)} value={date}/>
                        <span>Time</span>
                        <input type='time' placeholder='Time...' onChange={e => setTime(e.target.value)} value={time}/>
                    </Style.When>

                    <Style.Options>
                        <div>
                            <Style.CheckBoxWrapper>
                                <Style.CheckBox type='checkbox' id="checkbox" checked={done} onChange={() => setDone(!done)}/>
                                <Style.CheckBoxLabel htmlFor="checkbox" />
                                
                            </Style.CheckBoxWrapper>
                        </div>
                        <span>{done ? 'TASK DONE': 'TASK PENDING'}</span>    
                    </Style.Options>
                    
                    <Style.Delete>
                        { match.params.id ? <button type='button' onClick={Remove}>DELETE TASK</button> : null }
                    </Style.Delete>
                    
                    <Style.Save>
                        <button onClick={Save} type='button'>SAVE</button>
                    </Style.Save>
                    
                </Style.Form>
                <Footer/>
            </Style.Container>
            
    )
}

export default Task;
