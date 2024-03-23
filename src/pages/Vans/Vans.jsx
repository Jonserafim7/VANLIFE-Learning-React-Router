import React, { useEffect, useContext } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { AppContext } from '../../Components/Layout'
import NotFound from '../NotFound'

// Component that displays all then vans listed on the site
export default function Vans() {
  // destructure the context
  const {
    vansData,
    setVansData,
    vansClasses,
    error,
    setError,
    setLoading,
    loading,
  } = useContext(AppContext)

  // get the search params from the URL
  const [searchParams, setSearchParams] = useSearchParams()

  // get the type filter from the search params
  const typeFilter = searchParams.get('type')

  // async function to fetch the van data from the mock server
  const fetchVansData = async () => {
    // set the loading state to true
    setLoading(true)
    //
    try {
      // fetch the van data from the mock server
      const response = await fetch('/api/vans')
      // parse the response to JSON
      const data = await response.json()
      // if the response is not ok, throw an error
      if (!response.ok) {
        throw {
          message: 'Failed to fetch vans',
          status: response.status,
          statusText: response.statusText,
        }
      }
      // set the van data in the context
      setVansData(data.vans)
    } catch (error) {
      // set the error state in the context
      setError(error)
    } finally {
      // set the loading state to false
      setLoading(false)
    }
  }

  // call the fetchVansData function when the component mounts
  useEffect(() => {
    fetchVansData()
  }, [])

  // filter the van data based on the type filter
  const getVansElements = () => {
    if (vansData) {
      const filedteredVans = vansData.filter((van) => {
        if (typeFilter) {
          return van.type === typeFilter
        }
        return van
      })

      // map the van data to JSX elements
      const vansElements = filedteredVans.map((van) => {
        return (
          <Link
            to={van.id}
            key={van.id}
            state={{ search: `?${searchParams.toString()}`, type: typeFilter }}>
            <div className="flex flex-col">
              <img
                className="w-full rounded-md object-cover"
                src={van.imageUrl}
                alt={`${van.name} + image`}
              />

              <div className="mt-1 flex flex-col">
                <div className="flex">
                  <p className="text-lg font-semibold">{van.name}</p>

                  <p className="ml-auto text-lg font-semibold">
                    ${van.price}
                    <span className="text-sm font-normal">/day</span>
                  </p>
                </div>

                <p
                  className={`w-max rounded-md px-5 py-1 
                ${vansClasses(van)} mt-1 text-white`}>
                  {van.type}
                </p>
              </div>
            </div>
          </Link>
        )
      })
      return vansElements
    } else {
      return null
    }
  }

  // function to generate a new search param string
  function genNewSearchParamString(key, value) {
    const sp = new URLSearchParams(searchParams)
    if (value === null) {
      sp.delete(key)
    } else {
      sp.set(key, value)
    }
    return `?${sp.toString()}`
  }

  // if the data is still loading, return a loading message
  if (loading) {
    return (
      <h1 className="p-8 text-lg font-bold" aria-live="polite">
        Loading...
      </h1>
    )
  }

  // if there is an error, return the not found page
  if (error) {
    return <NotFound />
  }

  // if there is no error and the data is not loading, return the van data
  return (
    <div>
      <h1 className="text-3xl font-bold">Explore our van options</h1>

      <nav className="mt-4 flex items-center gap-4">
        <Link
          to={genNewSearchParamString('type', 'simple')}
          className={`${
            typeFilter === 'simple'
              ? 'bg-[#E17654] text-white shadow-md'
              : 'bg-[#FFEAD0]'
          }  
            rounded-md px-4 py-2 hover:bg-[#E17654] hover:text-white `}>
          Simple
        </Link>
        <Link
          to={genNewSearchParamString('type', 'luxury')}
          className={`${
            typeFilter === 'luxury'
              ? 'bg-[#161616] text-white shadow-md'
              : 'bg-[#FFEAD0]'
          }  
            rounded-md px-4 py-2 hover:bg-[#161616] hover:text-white `}>
          Luxury
        </Link>
        <Link
          to={genNewSearchParamString('type', 'rugged')}
          className={`${
            typeFilter === 'rugged'
              ? 'bg-[#115E59] text-white shadow-md'
              : 'bg-[#FFEAD0]'
          }  
            rounded-md px-4 py-2 hover:bg-[#115E59] hover:text-white `}>
          Rugged
        </Link>
        {typeFilter ? (
          <Link
            to={genNewSearchParamString('type', null)}
            className="underline">
            Clear filters
          </Link>
        ) : null}
      </nav>

      <section className="mt-4 grid grid-cols-custom1 gap-4 md:mt-6 md:gap-6">
        {getVansElements()}
      </section>
    </div>
  )
}
