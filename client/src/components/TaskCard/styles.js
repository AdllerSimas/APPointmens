import styled from 'styled-components'

export const Container = styled.div`
    width: 220px;
    height: 180px;
    box-shadow: 10px 11px 36px -1px rgba(0,0,0,0.75);
    

    border-radius: 10px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background: #DCDCDC;

    margin: 15px;

    cursor: pointer;
    transition: all 0.3s ease;

    &:hover{
        background: #ccccff; 
        opacity: 0.75;
    }

`
export const TopOfTop = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-right: 40px;
`

export const TopCard = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`

export const BottomCard = styled.div `
    width: 100%;
    display: flex;
    justify-content: space-around;

    span {
        color: rgba(126,0,255,1);
    }
    

`

