import { useEffect, useState } from 'react'

const SERVER_PATH = 'http://localhost:8080'
const DEFAULT_SOURCE_API = `${SERVER_PATH}/stream`

const useEventSource = (sourceDir = DEFAULT_SOURCE_API) => {
    const [sourceMessage, setSourceMessage] = useState(null)
    const [sourceError, setSourceError] = useState(null)

    useEffect(() => {
        const sse = new EventSource(sourceDir);
        sse.addEventListener('message', async e => {
            setSourceMessage(JSON.parse(e.data))
            setSourceError(null)
        })
        sse.addEventListener('error', async e => {
            setSourceMessage(null)
            setSourceError(JSON.parse(e.data))
        })

        return () => {
            sse.close();
        };
    }, [])

    return { error: sourceError, data: sourceMessage }
}

export default useEventSource