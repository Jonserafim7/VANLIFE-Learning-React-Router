import React, { useEffect, useContext } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { AppContext } from '../../Components/Layout'

export default function Vans() {
  // get the van data from the outlet context
  const { vansData, setVansData, vansClasses } = useContext(AppContext)

  // get the search params from the URL
  const [searchParams, setSearchParams] = useSearchParams()

  // get the type filter from the search params
  const typeFilter = searchParams.get('type')

  // async function to fetch the van data from the mock server
  const fetchVansData = async () => {
    try {
      const response = await fetch('/api/vans')
      const data = await response.json()
      setVansData(data.vans)
    } catch (error) {
      console.error('Error fetching van data', error)
    }
  }

  // fetch the van data when the component mounts
  useEffect(() => {
    fetchVansData()
  }, [])

  // filter the van data based on the type filter
  const filedteredVans = vansData.filter((van) => {
    if (typeFilter) {
      return van.type === typeFilter
    }
    return van
  })

  // map the van data to JSX elements
  const vansElements = filedteredVans.map((van) => {
    return (
      <Link to={`/vans/${van.id}`} key={van.id}>
        <div className="flex flex-col">
          <img
            className="rounded-md w-full object-cover"
            src={van.imageUrl}
            alt={`${van.name} + image`}
          />

          <div className="flex flex-col mt-1">
            <div className="flex">
              <p className="text-lg font-semibold">{van.name}</p>

              <p className="ml-auto text-lg font-semibold">
                ${van.price}
                <span className="text-sm font-normal">/day</span>
              </p>
            </div>

            <p
              className={`py-1 px-5 rounded-md w-max 
              ${vansClasses(van)} text-white mt-1`}>
              {van.type}
            </p>
          </div>
        </div>
      </Link>
    )
  })

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Explore our van options</h1>

      <nav className="flex gap-4 items-center mt-4">
        <button
          onClick={() => setSearchParams({ type: 'simple' })}
          className={`${
            typeFilter === 'simple'
              ? 'shadow-md bg-[#E17654] text-white'
              : 'bg-[#FFEAD0]'
          }  
            py-2 px-4 rounded-md hover:bg-[#E17654] hover:text-white `}>
          Simple
        </button>
        <button
          onClick={() => setSearchParams({ type: 'luxury' })}
          className={`${
            typeFilter === 'luxury'
              ? 'shadow-md bg-[#161616] text-white'
              : 'bg-[#FFEAD0]'
          }  
            py-2 px-4 rounded-md hover:bg-[#161616] hover:text-white `}>
          Luxury
        </button>
        <button
          onClick={() => setSearchParams({ type: 'rugged' })}
          className={`${
            typeFilter === 'rugged'
              ? 'shadow-md bg-[#115E59] text-white'
              : 'bg-[#FFEAD0]'
          }  
            py-2 px-4 rounded-md hover:bg-[#115E59] hover:text-white `}>
          Rugged
        </button>
        <button
          onClick={() => setSearchParams({})}
          className="underline ml-auto">
          Clear filters
        </button>
      </nav>

      <section className="grid grid-cols-custom1 gap-8 mt-8">
        {vansElements}
      </section>
    </div>
  )
}
