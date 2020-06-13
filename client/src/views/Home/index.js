import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom'
import * as Style from './styles'
import api from '../../services/api'
import isConnected from '../../utils/isConnected'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FilterCard from '../../components/FilterCard'
import TaskCard from '../../components/TaskCard'




function Home({history}) {

  const [filterActived, setFilterActived] = useState('all')
  const [tasks, setTasks] = useState([])
  const [redirect, setRedirect] = useState(false)

  console.log(history)

  async function loadTasks() {
    
    const email = isConnected.email

    await api.get(`/task/filter/${filterActived}/${email}`)
      .then(response => {
            
          setTasks(response.data)
       
      })

  }

  useEffect( () => {
    
    loadTasks()
 
  }, [])


  useEffect(() => {
     

    loadTasks()

    if(!isConnected) {
       setRedirect(true)
    }

    

  }, [filterActived])

  

  function Notification() {
    setFilterActived('late')
  }

  return (
        <Style.Container>

            { redirect && <Redirect to='/'/> }
            <Header  clickNotification={Notification}/>
              <Style.FilterContainer>
                <button type='button' onClick={() => setFilterActived('all')}>
                  <FilterCard title="Todas"  actived={filterActived === 'all'} />                
                </button>
                <button type='button' onClick={() => setFilterActived('today')}>
                  <FilterCard title="Hoje"   actived={filterActived === 'today'} />
                </button>
                <button type='button' onClick={() => setFilterActived('week')}>
                  <FilterCard title="Semana" actived={filterActived === 'week'} />
                </button>
                <button type='button' onClick={() => setFilterActived('month')}>
                  <FilterCard title="Mês"    actived={filterActived === 'month'} />
                </button>
                <button type='button' onClick={() => setFilterActived('year')}>
                  <FilterCard title="Ano"    actived={filterActived === 'year'} />
                </button>
              </Style.FilterContainer>

              <Style.Title>
                <h2> - Appointments - {filterActived === 'late' ? 'Tasks Late -': null}</h2>
              </Style.Title>

              <Style.Content>
                {
                  tasks.map(task => (
                      <Link to={`/task/${task._id}`}>
                        <TaskCard type={task.type} title={task.title} when={task.when} done={task.done}/>
                      </Link>
                  ))
                }
              </Style.Content>
            <Footer/>
        </Style.Container>
        
  )
}

export default Home;
