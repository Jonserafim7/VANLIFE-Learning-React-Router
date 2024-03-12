import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

export default function ListedVans() {

  const [hostVans, setHostVans] = useState([])
  const [signedIn, setSignedIn] = useState(true)

  useEffect(() => {
    if(signedIn) {
      fetch('/api/host/vans')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setHostVans(data)
      })
    }
  }, [])

  return (
    <div>
      <h1>host listed vans</h1>
    </div>
  );
}
