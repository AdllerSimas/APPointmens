import React from 'react';
import * as Style from './styles'




function FilterCard(props) {
  return (
      <Style.Container actived={props.actived}>
          <span>{props.title}</span>
      </Style.Container>
  )
}

export default FilterCard;