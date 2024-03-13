import React, {useContext} from 'react';
import { HostVansContext } from './HostVanLayout';

export default function HostVanPhotos() {
  const { van } = useContext(HostVansContext);
  return (
    <div>
      <img className='w-28 rounded-md object-cover' src={`${van.imageUrl}`}/>
    </div>
  );
}
