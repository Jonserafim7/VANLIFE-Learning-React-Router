import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useOutletContext } from 'react-router-dom'

export default function Vans() {
  // get the van data from the outlet context
  const { vansData, setVansData, vansClasses } = useOutletContext()

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

  // map the van data to JSX elements
  const vansElements = vansData.map((van) => {
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
        <button className="bg-[#FFEAD0] py-2 px-4 rounded-md">Simple</button>
        <button className="bg-[#FFEAD0] py-2 px-4 rounded-md">Luxury</button>
        <button className="bg-[#FFEAD0] py-2 px-4 rounded-md">Rugged</button>
        <button className="underline ml-auto">Clear filters</button>
      </nav>

      <section className="grid grid-cols-custom1 gap-8 mt-8">
        {vansElements}
      </section>
    </div>
  )
}
