import React, {useContext} from 'react';
import { HostVansContext } from './HostVanLayout';

export default function HostVanPricing() {
  const { van } = useContext(HostVansContext);
  return (
    <div>
      <h2><span className='font-medium text-2xl'>${van.price}</span>/day</h2>
    </div>
  );
}
