import styled from 'styled-components';

const Wall = styled.div`
  position: absolute;
  width: 200px;
  &.front{
      z-index: 3; 
      transform: rotateY(  15deg) translateZ(100px);
    }

    &.right {
      z-index: 0; 
    margin-left: -115px;
    transform: rotateY( -30deg) translateZ(90px) scaleY(0.983);
  }
`

export default Wall