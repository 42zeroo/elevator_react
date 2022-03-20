import React from 'react'
import useBuilding from 'hooks/useBuilding';
import ElevatorConsole from 'components/molecules/ElevatorConsole'
import Building from 'components/organisms/Building';

const App = () => {
  useBuilding()
  return (
    <>
      <Building />
      <ElevatorConsole />
    </>
  )
}

export default App