import { useOutletContext } from 'react-router-dom'

export default function HostVanPhotos() {
  const { van } = useOutletContext()
  return (
    <div>
      <img className="w-28 rounded-md object-cover" src={`${van.imageUrl}`} />
    </div>
  )
}
