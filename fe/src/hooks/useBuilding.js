import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useGetBuildingQuery, useGetElevatorsQuery } from 'redux/services/buildingApi'
import { setBuildingData } from 'redux/features/buildingSlice'

import { generateData } from 'models/building'

const useBuilding = () => {
    const dispatch = useDispatch()
    const building = useSelector(state => state.building)
    const buildingQuery = useGetBuildingQuery()
    const elevatorsQuery = useGetElevatorsQuery()

    const isLoading = buildingQuery.isLoading || elevatorsQuery.isLoading
    const isError = elevatorsQuery.isError || buildingQuery.isError

    useMemo(() => {
        if (!isLoading && !isError) {
            const generatedBuildingData = generateData(elevatorsQuery.data, buildingQuery.data.floors)
            console.log(generatedBuildingData)
            return dispatch(setBuildingData(generatedBuildingData))
        }
    }, [isLoading, isError, dispatch, buildingQuery, elevatorsQuery])

    return building
}

export default useBuilding