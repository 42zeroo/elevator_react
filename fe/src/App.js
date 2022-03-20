import AppWrapper from 'components/atoms/AppWrapper'
import ConsoleContainer from 'components/atoms/ConsoleContainer'
import ElevatorConsole from 'components/molecules/ElevatorConsole'
import ElevatorButtons from 'components/molecules/ElevatorButtons'
import Building from 'components/organisms/Building';

const App = () => {

  return (
    <AppWrapper>
      <Building />
      <ConsoleContainer>
        <ElevatorConsole />
        <ElevatorButtons />
      </ConsoleContainer>
    </AppWrapper>
  )
}

export default App
