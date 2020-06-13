import styled from 'styled-components'

export const Container = styled.div`
    width: 250px;
    height: 70px;
    background: ${props => props.actived ? 'rgba(49,9,121,1)' : 'linear-gradient(180deg, rgba(126,0,255,1) 20%, rgba(49,9,121,1) 35%, rgba(126,0,255,1) 20%)'};
    
    cursor: pointer;
    display: flex;


    border-radius: 10px;
    
    justify-content: center;
    
    span {
        color: #FFF;
        font-weight: bold;
        margin-top: 5px;
        font-size: 18px;
    }
    

    
`