
import styled from 'styled-components';

export const Window = styled.span`
width: 20px;
height: 20px;
position: relative;
content: "";
background: #00ffff;
border: 1px solid #000;`

export const Elevator = styled.span`
width: 30px;
height: 100%;
background: red;
`
export const ActiveElevatorsWrapper = styled.div`
display: flex;
justify-content: space-around;
position: absolute;
top: 0;
height: ${props => props.data_height}px;
width: ${props => props.data_width}px;
`

export const ActiveElevator = styled.div`
width: 29px;
margin-left: 3px;
height: 60px;
border: 2px solid green;
z-index: 5;
transform: translateY(${props => props.data_active_offset_top}px);
background: green;
${props => props.isTransition && `transition: transform 1s linear;`}

`