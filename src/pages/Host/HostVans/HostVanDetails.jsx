import { useOutletContext } from 'react-router-dom'

//Componment to display the details of a van in the host dashboard
export default function HostVanDetails() {
  //use the useOutletContext hook to get the van object from the context
  const { van } = useOutletContext()

  //return the details of the van
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
