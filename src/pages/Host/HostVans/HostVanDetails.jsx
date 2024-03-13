import React, { useContext } from 'react'
import { HostVansContext } from './HostVanLayout'

export default function HostVanDetails() {
  const { van } = useContext(HostVansContext)

  return (
    <div className="flex flex-col gap-3">
      <p>
        <span className="font-bold">Name: </span>
        {van.name}
      </p>
      <p>
        <span className="font-bold">Category: </span>
        {van.type}
      </p>
      <p>
        <span className="font-bold">Description: </span>
        {van.description}
      </p>
      <p>
        <span className="font-bold">Visibility: </span>
        Public
      </p>
    </div>
  )
}
