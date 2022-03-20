import styled from 'styled-components';

const BuildingFloorWrapper = styled.div`
    width: 100%;
    border: 2px solid #470303;
    background: #7c0505;
    position: relative;
    height: 60px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    &:before, &:after{
        content: "";
        width: 20px;
        height: 20px;
        background: #00ffff;
        border: 1px solid #000;
    }
    button{
        background: ${props => props.data_isActive ? "#00ff00" : props.data_isTarget ? "#aaaaaa" : "#fafafa"};
    }
`

export default BuildingFloorWrapper
