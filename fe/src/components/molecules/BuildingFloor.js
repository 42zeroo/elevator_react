import React from 'react'
import BuildingFloorWrapper from 'components/atoms/BuildingFloorWrapper'
import CallElevatorButton from 'components/atoms/CallElevatorButton'
import axios from 'axios'

const BuildingFloor = ({ floor, isActive, isTarget }) => {
    return (
        <BuildingFloorWrapper data_isActive={isActive} data_isTarget={isTarget}>
            <CallElevatorButton onClick={() => axios.put(`http://localhost:8080/floor/${floor}`)}> #{floor} </CallElevatorButton>
        </BuildingFloorWrapper>
    )
}

export default BuildingFloor
