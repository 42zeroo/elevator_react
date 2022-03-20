import { v4 as uuid } from 'uuid'

export const generateData = (elevators, floors) => {
  const floorsData = []
  const elevatorsData = []
  for (let i = 0; i < floors; i++) {
    floorsData.push({
      name: i === 0 ? "Ground Floor" : `Floor ${i}`,
      level: i,
      uuid: uuid(),
    });
  }
  for (let i = 0; i < elevators?.length ?? 0; i++) {
    elevatorsData.push({
      uuid: uuid(),
      id: elevators[i].id,
      name: `Lift ${i + 1}`,
      level: elevators[i].floor,
      state: elevators[i].state,
      targetFloor: undefined,
    });
  }
  return { floors: floorsData, elevators: elevatorsData }
}
