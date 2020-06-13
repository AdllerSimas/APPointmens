import styled from 'styled-components'

export const Container = styled.div`
    
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #3b0087;
    opacity: 90%;
    position: absolute;
      
`
export const Form = styled.div`

    width: 100%;
    height: 100%;
    margin-top: 50px;
    background: #410395;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-Radius: 20px;

`

export const Input = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    
   input {
       padding: 8px;
       margin-top: 10px;
       font-size: 16px;
       border: 2px solid #800DD1;
       border-radius: 8px;
       font-size: 22px;
       

       &:hover{
            border: 2px solid #800DD1;
       }
   }

   a {
       margin-right: 10px;
       color: #fff;
       text-decoration: none; 
       display: flex;
       flex-direction: row;
       justify-content: flex-end;
       font-weight: bold;
       font-size: 16px;
       margin-bottom: 15px;
       margin-top: 5px;

       &:hover{
            color: #ff01ea;
       }
   }

`

export const Signin = styled.div`

    height: 20px;
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 5px;

    button {
        width:100%;
        background: #800DD1;
        color: #FFF;
        border-radius: 8px;
        border: 2px solid #020024;
        font-size: 20px;
        cursor: pointer;
        margin-top: 10px;
        padding: 5px;
            
        &:hover {
            opacity: 0.8;
            background-color: #ff01ea;
        }
    }

`

export const Signup = styled.div`
    
    height: 20px;
    display:flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 5px;
    margin-top: 20px;
    margin-right: 10px;
    
    a {       
        color: #fff;
        text-decoration: none;
        font-size: 18px;
        font-weight: bold;

        &:hover {
            opacity: 0.8;
            color: #ff01ea;
        }
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
    
    h1 {
        color: #FFF;
        position: relative;
        background: none;
        padding: 0 20px;

    }

    h2 {
        color: #FFF;
        position: relative;
        background: none;
        padding: 0 20px;

    }
    

`

export const SignSocialGoogle = styled.div`
    
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-Content: center;
    align-items: center;
    color: #fff;
    font-weight: bold;
    position: relative;

    button {
        
        width:100%;
        background: #dd4b39;
        color: #FFF;
        border-radius: 8px;
        border: 2px solid #020024;
        font-size: 20px;
        cursor: pointer;
        margin-top: 15px;
        padding: 5px;
        display: flex;
        flex-direction: row;
        justify-Content: center;
        align-items: center;    

        &:hover {
            opacity: 0.8;
            
        }

    }

`

export const SignSocialFacebook = styled.div`
    
    margin-top: 5px;
    display: flex;
    flex-direction: row;
    justify-Content: center;
    align-items: center;
    color: #fff;
    font-weight: bold;
    position: relative;

    button {
        
        width:100%;
        background: #3b5998;
        color: #FFF;
        border-radius: 8px;
        border: 2px solid #020024;
        font-size: 20px;
        cursor: pointer;
        margin-top: 15px;
        padding: 5px;
        display: flex;
        flex-direction: row;
        justify-Content: center;
        align-items: center;
        
        &:hover {
            opacity: 0.8;
            
        }

    }

`
