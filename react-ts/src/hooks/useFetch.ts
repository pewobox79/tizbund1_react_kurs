import { useEffect, useState } from "react"
export function useFetch(url: string) {

    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<unknown>()

    //alternative Schreibweise useState bei mehreren propeties
    const [values, setValues] = useState({
        data: null,
        error: null,
        isLoading: true
    })

    // useEffect darf keien ASYNC / AWAIT sein
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(url)
                if (!response.ok) {
                    throw Error("Network response was not ok")
                }
                const data = await response.json()
                setData(data)

            } catch (err) {
                setError(err)
                console.log("catched", err)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData() // => aufruf der FetchData Funktion
    }, [url])


    return { data, isLoading, error }
}