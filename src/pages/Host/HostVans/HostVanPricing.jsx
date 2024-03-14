import { useOutletContext } from 'react-router-dom'

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
