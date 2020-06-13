import React, { useMemo } from 'react';
import { format } from 'date-fns'
import * as Style from './styles'

import { 
  FaTasks, 
  FaFutbol, 
  FaGlassCheers, 
  FaUserTie, 
  FaUserEdit, 
  FaRunning, 
  FaMusic, 
  FaMugHot, 
  FaHeart, 
  FaAmazonPay, 
  FaCarAlt, 
  FaBus, 
  FaSearch, 
  FaWrench,
  FaCheck
} from 'react-icons/fa'


function TaskCard({type, title, when, done}) {
  
  const date = useMemo(() => format(new Date(when), 'dd/MM/yyyy'))
  const time = useMemo(() => format(new Date(when), 'HH:mm'))
  
  return (
      <Style.Container done={done}>
        <Style.TopOfTop>
              {done  ? <FaCheck size='1.5em' color='#26d608'/> : null}
        </Style.TopOfTop>
        <Style.TopCard>
              {type === 1   ? <FaTasks size='3em'       color='rgba(126,0,255,1)'/> : null}
              {type === 2   ? <FaGlassCheers size='3em' color='rgba(126,0,255,1)'/> : null}
              {type === 3   ? <FaUserTie size='3em'     color='rgba(126,0,255,1)'/> : null}
              {type === 4   ? <FaRunning size='3em'     color='rgba(126,0,255,1)'/> : null}
              {type === 5   ? <FaMugHot size='3em'      color='rgba(126,0,255,1)'/> : null}
              {type === 6   ? <FaHeart size='3em'       color='rgba(126,0,255,1)'/> : null}
              {type === 7   ? <FaAmazonPay size='3em'   color='rgba(126,0,255,1)'/> : null}
              {type === 8   ? <FaCarAlt size='3em'      color='rgba(126,0,255,1)'/> : null}
              {type === 9   ? <FaSearch size='3em'      color='rgba(126,0,255,1)'/> : null}
              {type === 10  ? <FaWrench size='3em'      color='rgba(126,0,255,1)'/> : null}
              <h3>{title}</h3>
        </Style.TopCard>
        <Style.BottomCard>
              <strong>{date}</strong>
              <span>{time}h</span>
        </Style.BottomCard>
      </Style.Container>
  )
}

export default TaskCard;