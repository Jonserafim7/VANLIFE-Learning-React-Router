import React from 'react';
import { useParams } from 'react-router-dom';

export default function ListedVansDetails() {

    const { id } = useParams()

  return (
    <div>
      <h1>van {id} detail</h1>
    </div>
  );
}
