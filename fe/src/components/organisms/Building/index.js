import { createContext } from 'react'

import { Container, Cube } from './Components'
import BuildingWall from 'components/molecules/BuildingWall'

import useBuilding from 'hooks/useBuilding';

const wallClasses = ['front', 'right']

export const ElevatorsContext = createContext();

const Building = () => {
    const { elevators, floors } = useBuilding()

    return (
        <Container>
            <Cube>
                <ElevatorsContext.Provider value={elevators}>
                    {wallClasses.map((w) =>
                        <BuildingWall
                            displayElevators={w === "front"}
                            key={`wall-${w}`}
                            className={w}
                            floors={floors}
                        />
                    )}
                </ElevatorsContext.Provider>
            </Cube>

        </Container>
    )
}

export default Building

