import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-wrap: wrap;
max-width: 320px;
width: 100%;
border: 2px solid #000;
background: #aaa;
border-top: 0px;
`


export const ButtonWrapper = styled.div`
display: flex;
flex: 1 0 33.3333%;
height: 70px;
button{
    width: 100%;
}
&:last-of-type{
    flex: 1 0 100%;
}
`
