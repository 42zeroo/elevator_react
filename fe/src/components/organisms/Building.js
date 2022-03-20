import { useState, useEffect } from 'react'
import BuildingFloor from 'components/molecules/BuildingFloor'
import { useSelector } from 'react-redux'
import styled from 'styled-components';

const Building = () => {
    const building = useSelector(state => state.building)
    const [activeFloors, setActiveFloors] = useState([])
    const [targetFloors, setTargetFloors] = useState([])
    useEffect(() => {
        setActiveFloors(building.elevators.map(e => e.level))
        setTargetFloors(building.elevators.map(e => e?.targetFloor))
    }, [building.elevators])
    return (
        <Container>
            {building.floors.map((f, i) =>
                <BuildingFloor
                    key={f.uuid}
                    floor={i}
                    isTarget={targetFloors.includes(i)}
                    isActive={activeFloors.includes(i)} />
            ).reverse()}
        </Container>
    )
}

export default Building

const Container = styled.div`
    position: relative;
    width: 100%;
    max-width: 300px;
`
