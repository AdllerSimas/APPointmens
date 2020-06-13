import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    
`

export const Form = styled.div`
    width: 65%;
    margin-bottom: 100px;
    
`

export const TypeIcons = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-left: 15px;
    flex-wrap: wrap;
    .inative{
        opacity: 0.25;
    }

    img {
        cursor: pointer;
    
        &:hover{
            opacity: 0.25;
        }
    }

    span {
       margin-left: 10px;
       display: flex;
       flex-direction: row;
       justify-content: center;
       font-weight: bold;
       font-size: 20px;
   }
`

export const Input = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 15px;
   
   
   
   span {
       margin-left: 10px;
       display: flex;
       flex-direction: row;
       justify-content: center;
       font-weight: bold;
       font-size: 20px;
   }

   input {
       padding: 8px;
       font-size: 16px;
       border: 2px solid #800DD1;
       border-radius: 8px;
   }
`

export const TextArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 15px;

    span {
        margin-left: 10px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        font-weight: bold;
        font-size: 20px;
    }

    textarea {
        padding: 8px;
        font-size: 16px;
        border-radius: 8px;
        border: 2px solid #800DD1;
    }
`
export const When = styled.div`
    
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 50px;
    

   span {
       display: flex;
       flex-direction: row;
       align-items: center;
       justify-content: center;
       font-weight: bold;
       font-size: 20px;
   }

   input {
       padding: 8px;
       font-size: 16px;
       border: 2px solid #800DD1;
       border-radius: 8px;
       width: 280px;
   }
`

export const Options = styled.div`
   margin-top: 50px;
   display: flex;
   flex-direction: row;
   

   div {
       margin-left: 10px;
       
       align-items: center;
       color:#000000;
       
       font-size: 20px;

       input {
           zoom: 1.25;
           padding: 10px;
       }

       
   }

   span {
        margin-top: 5px;
   }

   button {
       
    align-content: flex-end; 
    background: none;
    color: #00000;
    border-radius: 8px;
    border: none;
    font-size: 20px;
    cursor: pointer;

    &:hover {
         opacity: 0.8;
    }
}
`
export const Save = styled.div`
    
    height: 30px;
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 30px;

    button {
        width:60%;
        background: #800DD1;
        color: #FFF;
        border-radius: 8px;
        border: 2px solid #020024;
        font-size: 24px;
        cursor: pointer;
        margin-top: 100px;
        padding: 5px;
        &:hover {
             opacity: 0.8;
        }
    }
`
export const CheckBoxWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
   
`

export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`

export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: #800DD1;
    
    &::after {
      content: "";
      color:#800DD1;
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;

      
    }
  }
`
export const Delete = styled.div`
    margin-top: 5px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    button {
        align-content: flex-end; 
        background: rgba(49,9,121,1) 35%;
        color: #FFF;
        border-radius: 8px;
        border-bottom: 6px solid #020024;
        font-size: 20px;
        cursor: pointer;

        &:hover {
            opacity: 0.8;
        }
    }
`