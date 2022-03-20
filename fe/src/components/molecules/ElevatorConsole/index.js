import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { setElevatorByIndex } from 'redux/features/buildingSlice'
import useElevatorEventSource from 'hooks/useElevatorEventSource';

import { Container } from './Components'
import ElevatorStatus from 'components/atoms/ElevatorStatus'
import ElevatorStatusWrapper from 'components/atoms/ElevatorStatusWrapper'


const ElevatorConsole = () => {
    const { data } = useElevatorEventSource()
    const dispatch = useDispatch()
    const elevators = useSelector((state) => state.building.elevators)

    useEffect(() => {
        const updateElevator = (id) => {
            const movingElevatorData = {
                level: data.floor,
                state: data.state,
                targetFloor: data?.targetFloor ?? undefined
            }
            dispatch(setElevatorByIndex({ index: id, data: movingElevatorData }))
        }
        if (data)
            return updateElevator(data.id)
    }, [data, dispatch])


    return (
        <Container>
            {elevators.map(e =>
                <ElevatorStatusWrapper key={e.uuid}>
                    {e.name}
                    <ElevatorStatus >
                        0{e.level}
                    </ElevatorStatus>
                </ElevatorStatusWrapper>
            )
            }
        </Container >
    )
}

export default ElevatorConsole

