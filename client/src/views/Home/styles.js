import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    
`

export const FilterContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 30px;

    button {
        background: none;
        border: none;
    }
`
export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 70px;

    a {
        text-decoration: none;
        color: #000;
    }

`
export const Title = styled.div`
    width:100%;
    background: linear-gradient(270deg, rgba(2,0,36,1) 20%, rgba(49,9,121,1) 35%, rgba(126,0,255,1) 100%);
    border-bottom: 1px solid #FFF;
    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
    
    
    h2 {
        color: #FFF;
        position: relative;
        background: none;
        padding: 0 20px;

    }
`