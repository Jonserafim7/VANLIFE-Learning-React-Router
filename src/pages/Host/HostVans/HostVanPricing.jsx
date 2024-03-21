import { useOutletContext } from 'react-router-dom'

// Component to display the pricing of a van inside HostVanLayout
// This component gets rendered through the Outlet component in HostVanLayout
export default function HostVanPricing() {
  const { van } = useOutletContext()
  return (
    <div>
      <h2>
        <span className="font-medium text-2xl">${van.price}</span>/day
      </h2>
    </div>
  )
}
