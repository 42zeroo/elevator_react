import React from 'react'
import { useSelector } from 'react-redux';
import CallElevatorButton from 'components/atoms/CallElevatorButton';
import axios from 'axios'
import { Container, ButtonWrapper } from './Components'

const ElevatorButtons = () => {
    const floors = useSelector((state) => state.building.floors)

    return (
        <Container>
            {
                floors.map((f, i) =>
                    <ButtonWrapper key={f.uuid}>
                        <CallElevatorButton onClick={() => axios.put(`http://localhost:8080/floor/${i}`)}> {i} </CallElevatorButton>
                    </ButtonWrapper>
                ).reverse()
            }
        </Container>
    )
}

export default ElevatorButtons
