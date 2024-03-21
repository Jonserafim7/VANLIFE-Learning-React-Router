import { useOutletContext } from 'react-router-dom'

// Component to display the photos of a van inside HostVanLayout
// This component gets rendered through the Outlet component in HostVanLayout
export default function HostVanPhotos() {
  const { van } = useOutletContext()
  return (
    <div>
      <img className="w-28 rounded-md object-cover" src={`${van.imageUrl}`} />
    </div>
  )
}
