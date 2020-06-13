import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 70px;
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(49,9,121,1) 35%, rgba(126,0,255,1) 100%);
    border-bottom: 6px solid #020024;
    display: flex;
`

export const LeftSide = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center
    padding-left: 30px

    
    img {
        width: 150px;
        height: 150px;
        margin: auto 
        
        
    }

`

export const RightSide = styled.div`
    width: 50%;
    height: 70px;

    display: flex;
    align-items: center;
    justify-content: flex-end;
    
    

    a, button {
        color: #FFF;
        font-weight: bold;
        text-decoration: none;
        margin: 10px 20px 0px 50px;
        background: none;
        border: none;
        &: hover {
            color: #b6b6bb;
        }
    }


    

    #notification {
        
        cursor: pointer;
       
        span{ 
            background: #e70505;
            color: #FFF;
            padding: 3px 7px;
            border-radius: 50%;
            position: relative;
            top: -15px;
            right: 10px;

            
       }

       &: hover {
           opacity: 0.5;
       }

       
    }

    .pipe::after {
        content: '|';
        margin: 0 10px;
        color: #FFF;
    }

    button {
        font-size: 16px;
    }
    
`

