import { useState, useEffect } from 'react'
import { getResults } from '../../../api'

const useGiphy = (query, limit) => {
  const [results, setResults] = useState([])

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const apiResults = await getResults({
          query,
          limit,
        })

        setResults(apiResults)
      } catch (err) {
        console.error(err)
      }
    }

    fetchResults()
  }, [query, limit])

  return results
}

export default useGiphy
