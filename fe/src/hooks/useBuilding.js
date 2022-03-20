import { useEffect, useMemo, useCallback } from 'react'
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

    const isOk = useMemo(() => !isError && !isLoading, [isError, isLoading])

    const dispatchGeneratedBuildingData = useCallback(() => {
        if (isOk) {
            const generatedBuildingData = generateData(elevatorsQuery?.data, buildingQuery?.data?.floors)
            dispatch(setBuildingData(generatedBuildingData))
        }
    }, [isOk, dispatch, buildingQuery, elevatorsQuery])

    useEffect(() => {
        if (isOk) {
            dispatchGeneratedBuildingData()
        }
    }, [isOk])

    return building
}

export default useBuilding